import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import auth from '@/service/auth'
import { extractNumbers } from '@/scripts/helpers/extract.numbers'
import useGlobal from '@/store'

export const useLogin = ( { closePopup, setShowRecoveryPopup } ) => {
  
  const [ userNumber, setUserNumber ] = useState( '' )
  const [ userPassword, setUserPassword ] = useState( '' )
  const [ globalState, globalActions ] = useGlobal()
  const [ error, setError ] = useState( null )
  
  const handleClosePopup = () => {
    
    closePopup()
    setUserNumber( '' )
    setUserPassword( '' )
    setError( null )
    setShowRecoveryPopup( false )
    
  }
  
  const { mutate: login, data: loginData } = useMutation( {
    
    mutationKey: [ 'sign-in' ],
    mutationFn: ( { phone, password } ) => auth.login( phone, password ),
    onSuccess: ( error ) => {
      
      setError( error )
      
    }
    
  } )
  
  const { mutate: recovery, data: recoveryData } = useMutation( {
    
    mutationKey: [ 'recovery' ],
    mutationFn: ( { phone } ) => auth.recovery( phone ),
    onSuccess: ( error ) => {
      
      setError( error )
      
    }
    
  } )
  
  const handleLog = () => {
    
    if ( userNumber.length >= 11 ) {
      
      login( { phone: userNumber, password: userPassword } )
      
    }
    
  }
  
  const handleRecovery = () => {
    
    if ( extractNumbers( userNumber ).length === 11 ) {
      
      recovery( { phone: userNumber } )
      
    } else {
      
      setError( { errors: { phone: ['Введите номер телефона'] } } )
      
    }
    
  }
  
  useEffect( () => {
    
    if ( loginData?.success ) {
      
      handleClosePopup()
      globalActions.user.setUser()
      
    }
    
  }, [ loginData ] )
  
  useEffect( () => {
    
    if ( recoveryData?.success ) {
      
      setShowRecoveryPopup( true )
      
    }
    
    
  }, [ recoveryData ] )
  
  return {
    
    handleClosePopup,
    handleLog,
    userNumber,
    setUserNumber,
    userPassword,
    setUserPassword,
    handleRecovery,
    recoveryData,
    loginData,
    error
    
  }
  
}