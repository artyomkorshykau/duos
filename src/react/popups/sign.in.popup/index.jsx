import { useState } from "react";
import Popup from "../popup";
import Textfield from "@/react/components/forms/textfield";
import SignInIconWhite from "@/react/components/icons/sign.in.icon.white";
import DefaultButton from "@/react/components/buttons/default.button";
import s from "./sign.in.module.scss";

const SignInPopup = ({

  set,
  logIn = () => {},
  signUp = () => {},
  bodyClassName = "",
  isOpened = false,
  closePopup = () => {}

}) => {

  const [ userNumber, setUserNumber ] = useState("");
  const [ showToolTip, setShowToolTip ] = useState( false );
  const [ rememberUser, setRememberUser ] = useState( false );

  const handleInputChange = (e) => {
    const { value } = e.target;
    let formattedValue = value.replace(/^(\+)?/, "");
    if (value.length === 1 && value === "+") {
      formattedValue = "";
    } else if (value.length === 1) {
      formattedValue = "+" + value;
    } else {
      formattedValue = "+" + formattedValue;
    }
    if (formattedValue.length > 12) {
      formattedValue = formattedValue.substring(0, 12);
      formattedValue = "+" + formattedValue.substring(1);
    }
    setUserNumber(formattedValue);
  };

  const handleClosePopup = () => {

    closePopup();
    setUserNumber("");

  };

  function log() {

    if ( userNumber.length >= 11 && rememberUser === true ) {

      logIn();

    }

  };

  const handleMouseOut = () => { setShowToolTip( false ) };
  const handleMouseOver = () => { setShowToolTip( true ) };

  return (

    <Popup

      title = "Вход"
      subtitle = "Введите номер телефона и пароль из SMS, который вы получили при регистрации"
      isOpened = { isOpened }
      closePopup = { handleClosePopup }
      bodyClassName = { bodyClassName }

    >

      <div className = { `${ s.signin_content }` }>

        <Textfield

        set = { set }
        value = { userNumber }
        withTitle = { false }
        onChange = {(e) => {
          const { value } = e.target;
          const onlyNumbers = value.replace(/[^0-9+]/g, '');
          handleInputChange({ target: { value: onlyNumbers } });
        }}
        placeholder = "+7 (___) ___-__-__"

        />

        <Textfield

          withTitle = { false }
          placeholder = "Пароль"
          password

        />


        <p className = { `text-14 ${ s.signin_content__forgot }` }>Забыли
          пароль?</p>

        <DefaultButton

          name = "Войти"
          className = { `${ s.button }` }
          action = { () => log() }
          positionIcon = { 'right' }
          icon = { <SignInIconWhite className = { s.button__icon }/> }

        />

        <p className = { `text-13 ${ s.signin_content_description }` }>

          Вы все еще не часть DUOS?

        </p>

        <DefaultButton

          gray
          small
          name = "Зарегистрироваться"
          className = { s.button__gray }
          action = { signUp }

        />

      </div>

    </Popup>

  )

}

export default SignInPopup;