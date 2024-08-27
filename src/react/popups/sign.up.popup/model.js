import { useMutation } from '@tanstack/react-query'
import auth from '@/service/auth'
import { useEffect, useState } from 'react'
import useGlobal from '@/store/index.js'

export const useSignup = ( { closePopup } ) => {

  const [ userNumber, setUserNumber ] = useState("");
  const [ userEmail, setUserEmail ] = useState("");
  const [ userCode, setUserCode ] = useState("");
  const [ policyAgree, setPolicyAgree ] = useState( false );
  const [ codeModeOpened, setCodeModeOpened ] = useState( false );
  const [ showTimer, setShowTimer ] = useState( false );
  const [ time, setTime ] = useState( 180 );
  const [ intervalId, setIntervalId ] = useState( null );
  const [ roleModeOpened, setRoleModeOpened ] = useState( false );
  const [ globalState, globalActions ] = useGlobal()
  const [ error, setError ] = useState(null)
  const [ codeError, setCodeError ] = useState(null)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const { mutate, data } = useMutation({

    mutationKey: [ 'sign-up' ],
    mutationFn: ({ phone, email, code }) => auth.register(phone, email, code ),
    onSuccess: ( error ) => { setError(error.errors ? error.errors : error.error) }

  })

  const handleClosePopup = () => {

    closePopup()
    setUserNumber("");
    setUserEmail("");
    setUserCode("");
    setCodeModeOpened(false)
    setError(null)

  };

  const getCode = () =>  { if( policyAgree ) mutate({ phone : userNumber, email: userEmail }) }

  const getNewCode = () => {

    alert('отправить новый код')
    setShowTimer( false )
    setTime( 31 )

  };
  
  useEffect(() => {
    
    if (codeModeOpened) {
      
      const id = setInterval(() => {
        
        if (time > 0) {
          
          setTime(time - 1)
          
        } else {
          
          setShowTimer(true)
          
        }
        
      }, 1000)
      
      setIntervalId(id)
      return () => clearInterval(id)
      
    }
    
  }, [codeModeOpened, time])

  useEffect(() => {

    const nextInput = document.querySelector(`[data-index="1"]`)

    if (nextInput) {

      nextInput.focus()

    }

  }, [ codeModeOpened ])

  useEffect(()=> {

    if( userCode.length === 5 && policyAgree ) {
      
      globalActions.profile.setPhoneNumber(userNumber)
      mutate({ phone : userNumber, email: userEmail, code: userCode })

    }

  }, [ userCode ])

  useEffect(()=> {
    
    if( data?.success ) {

      setCodeModeOpened(true)

    }

    if( data?.token ) {

      setCodeModeOpened(false)
      setRoleModeOpened(true)
      globalActions.user.setUser()

    }

  },[ data?.success ])

  return {

    codeModeOpened,
    handleClosePopup,
    roleModeOpened,
    userNumber,
    setUserNumber,
    userEmail,
    setUserEmail,
    policyAgree,
    setPolicyAgree,
    getCode,
    userCode,
    setUserCode,
    showTimer,
    minutes,
    seconds,
    getNewCode,
    data,
    error

  }

}