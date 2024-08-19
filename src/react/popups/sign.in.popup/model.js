import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import auth from "@/service/auth";
import { useRouter } from "next/navigation";
import { extractNumbers } from "@/scripts/helpers/extract.numbers";
import useGlobal from "@/store";

export const useLogin = ( { closePopup, logIn } ) => {

  const [ userNumber, setUserNumber ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const [ showRecoveryPopup, setShowRecoveryPopup ] = useState( false );
  const [ globalState, globalActions ] = useGlobal()
  const { refresh } = useRouter()

  const handleClosePopup = () => {

    closePopup();
    setShowRecoveryPopup(false)
    setUserNumber("");
    setUserPassword("");

  };

  const { mutate: login, data: loginData } = useMutation({

    mutationKey: [ 'sign-in' ],
    mutationFn: ({ phone, password }) => auth.login(phone, password),

  })

  const { mutate: recovery, data: recoveryData } = useMutation({

    mutationKey: [ 'recovery' ],
    mutationFn: ({ phone }) => auth.recovery(phone ),

  })

  const handleLog = () => {

    if ( userNumber.length >= 11 && userPassword !== '' ) {

      login({ phone : userNumber, password: userPassword })

    }

  }

  const handleRecovery = () => {

    if( extractNumbers(userNumber).length === 11 ) {

      recovery({ phone: userNumber })

    }

  }

  useEffect(()=> {

    if( loginData?.success ) {

      handleClosePopup()
      globalActions.user.setUser()

    }

    if( recoveryData?.success ){

      setShowRecoveryPopup(true)

    }


  }, [ loginData, recoveryData ])

  return {

    handleClosePopup,
    handleLog,
    userNumber,
    setUserNumber,
    userPassword,
    setUserPassword,
    handleRecovery,
    showRecoveryPopup,
    recoveryData,
    setShowRecoveryPopup,
    loginData

  }

}