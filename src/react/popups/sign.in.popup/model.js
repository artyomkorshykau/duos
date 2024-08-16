import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import auth from "@/service/auth";
import { useRouter } from "next/navigation";

export const useLogin = ( { closePopup, logIn } ) => {

  const [ userNumber, setUserNumber ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const { refresh } = useRouter()

  const handleClosePopup = () => {

    closePopup();
    setUserNumber("");
    setUserPassword("");

  };

  const { mutate, data } = useMutation({

    mutationKey: [ 'sign-in' ],
    mutationFn: ({ phone, password }) => auth.login(phone, password),

  })

  const handleLog = () => {

    if ( userNumber.length >= 11 && userPassword !== '' ) {

      mutate({ phone : userNumber, password: userPassword })

    }

  }

  useEffect(()=> {

    if( data?.success ) {

      alert("Вход выполнен!")

    }


  }, [ data ])

  return {

    handleClosePopup,
    handleLog,
    userNumber,
    setUserNumber,
    userPassword,
    setUserPassword,
    data

  }

}