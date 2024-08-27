import useGlobal from '@/store/index.js'
import { useMutation } from '@tanstack/react-query'
import auth from '@/service/auth.js'
import { useEffect, useState } from 'react'

export const usePhoneChange = ( closePopup, isOpened ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const [ codeMode, setCodeMode ] = useState( false )
  const [ userCode, setUserCode ] = useState( '' )
  const [ error, setError ] = useState( null )
  const [ newPhoneNumber, setNewPhoneNumber ] = useState( globalState.profile.phoneNumber )
  
  const { mutate: mutatePhoneEdit, data } = useMutation( {
    
    mutationKey: [ 'phone-edit' ],
    mutationFn: ( { phone, code } ) => auth.editPhone( phone, code ),
    onSuccess: ( error ) => { setError( error.errors ? error.errors : error.error ) }
    
  } )
  
  const handleButtonAction = () => {
    
    globalActions.profile.setPhoneNumber( newPhoneNumber )
    mutatePhoneEdit( { phone: newPhoneNumber } )
    setCodeMode( true )
    
  }
  
  const handleCancelButton = () => {
    
    closePopup()
    setCodeMode( false )
    setUserCode( '' )
    
  }
  
  useEffect( () => {
    
    if ( data?.success ) setCodeMode( true )
    if ( userCode.length === 5 ) {
      
      //Если номер успешно изменён, то закрывает попап
      setTimeout( () => {
        
        handleCancelButton()
        
      }, 1000 )
      
    }
    
  }, [ data, userCode ] )
  
  useEffect( () => {
    
    if ( userCode.length === 5 ) {
      
      mutatePhoneEdit( { phone: newPhoneNumber, code: userCode } )
      
    }
    
  }, [ userCode ] )
  
  return {
    
    newPhoneNumber,
    setNewPhoneNumber,
    handleButtonAction,
    handleCancelButton,
    codeMode,
    setUserCode,
    userCode,
    error,
    
  }
  
}