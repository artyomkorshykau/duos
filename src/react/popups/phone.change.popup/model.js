import useGlobal from '@/store/index.js'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import profile from '@/service/profile.js'

export const usePhoneChange = ( closePopup, email, phone ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const [ codeMode, setCodeMode ] = useState( false )
  const [ userCode, setUserCode ] = useState( '' )
  const [ error, setError ] = useState( null )
  const [ newPhoneNumber, setNewPhoneNumber ] = useState( globalState.profile.phoneNumber )
  const [ newEmail, setNewEmail ] = useState( globalState.user.email )
  
  const { mutate: mutatePhoneEdit } = useMutation( {
    
    mutationKey: [ 'phone-edit' ],
    mutationFn: ( { phone, code } ) => profile.editPhone( phone, code ),
    onSuccess: () => {
      
      if ( !codeMode ) {
        
        setCodeMode( true )
        
      } else {
        
        globalActions.profile.setPhoneNumber( newPhoneNumber )
        closePopup()
        setCodeMode( false )
        setUserCode( '' )
        
      }
      
    },
    onError: ( error ) => {
      
      setError( error )
      
    }
    
  } )
  
  const { mutate: mutateEmailEdit } = useMutation( {
    
    mutationKey: [ 'email-edit' ],
    mutationFn: ( { email, code } ) => profile.editEmail( email, code ),
    onSuccess: () => {
      
      if ( !codeMode ) {
        
        setCodeMode( true )
        
      } else {
        
        globalActions.user.setUser()
        closePopup()
        setCodeMode( false )
        setUserCode( '' )
        
      }
      
    },
    onError: ( error ) => {
      
      setError( error )
      
    }
    
  } )
  
  const handleButtonAction = () => {
    
    if ( phone ) {
      
      if ( !codeMode ) {
        
        mutatePhoneEdit( { phone: newPhoneNumber } )
        
      }
      
    }
    
    if ( email ) {
      
      if ( !codeMode ) {
        
        mutateEmailEdit( { email: newEmail } )
        
      }
      
    }
    
  }
  
  const handleCancelButton = () => {
    
    closePopup()
    setCodeMode( false )
    setUserCode( '' )
    
  }
  
  useEffect( () => {
    
    if ( phone ) {
      
      if ( userCode.length === 5 ) {
        
        mutatePhoneEdit( { phone: newPhoneNumber, code: userCode } )
        
      }
      
    }
    
    if ( email ) {
      
      if ( userCode.length === 5 ) {
        
        debugger
        
        mutateEmailEdit( { email: newEmail, code: userCode } )
        
      }
      
    }
    
  }, [ userCode ] )
  
  return {
    
    newPhoneNumber,
    setNewPhoneNumber,
    newEmail,
    setNewEmail,
    handleButtonAction,
    handleCancelButton,
    codeMode,
    setUserCode,
    userCode,
    error
    
  }
  
}