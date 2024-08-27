import useGlobal from '@/store/index.js'
import { useMutation } from '@tanstack/react-query'
import auth from '@/service/auth.js'
import { useEffect, useState } from 'react'

export const usePhoneChange = (closePopup) => {
  
  const [ globalState, globalActions ] = useGlobal()
  const { phoneNumber } = globalState.profile
  const { setPhoneNumber } = globalActions.profile
  
  const [ codeMode, setCodeMode ] = useState(false)
  const [ userCode, setUserCode ] = useState("")
  const [ error, setError ] = useState(null)
  
  const { mutate: mutatePhoneEdit, data } = useMutation({
    
    mutationKey: [ 'phone-edit' ],
    mutationFn: ( { phone, code } ) => auth.editPhone(  phone, code  ),
    onSuccess: ( error ) => { setError(error.errors ? error.errors : error.error) }
    
  })
  
  const handleButtonAction = () => {
    
    mutatePhoneEdit( { phone: phoneNumber } )
    setCodeMode(true)
    
  }
  
  const handleCancelButton = () => {
    
    closePopup()
    setCodeMode(false)
    
  }
  
  useEffect( ()=> {
    
    if( data?.success ) setCodeMode(true)
    
  }, [ data ])
  
  useEffect(() => {
    
    if (userCode.length === 5) {
      
      mutatePhoneEdit({ phone: phoneNumber, code: userCode })
      
    }
    
  }, [userCode])
  
  return {
    
    phoneNumber,
    setPhoneNumber,
    handleButtonAction,
    handleCancelButton,
    codeMode,
    setUserCode,
    userCode,
    error
  
  }
  
}