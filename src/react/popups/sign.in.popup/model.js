import { useState } from "react";

export const useLogin = ( { closePopup, logIn } ) => {

  const [ userNumber, setUserNumber ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");

  const handleClosePopup = () => {

    closePopup();
    setUserNumber("");
    setUserPassword("");

  };

  const handleLog = () => {

    if ( userNumber.length >= 11 && userPassword !== '' ) logIn()

  }

  return {

    handleClosePopup,
    handleLog,
    userNumber,
    setUserNumber,
    userPassword,
    setUserPassword

  }

}