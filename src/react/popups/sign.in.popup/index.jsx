import { useState, useEffect } from "react";
import Popup from "../popup";
import WhiteBox from "@/react/components/containers/whitebox";
import Checkbox from "@/react/components/forms/checkbox";
import Textfield from "@/react/components/forms/textfield";
import ToolTipIcon from "@/react/components/icons/tooltip.icon";
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
      subtitle = "Введите номер телефона"
      isOpened = { isOpened }
      closePopup = { handleClosePopup }
      bodyClassName = { bodyClassName }

    >

      <Textfield

        set = { set }
        value = { userNumber }
        withTitle = { false }
        onChange = { handleInputChange }
        placeholder = "+7 (___) ___-__-__"

      />

      <div className = {`flex items-center ${ s.checkbox__container }`}>

        <Checkbox

          title = "Запомнить меня"
          className = { s.checkbox }
          isChecked = { rememberUser }
          setIsChecked = { (value) => setRememberUser(value) }

        />

        <div className = {`flex items-center justify-end $ ${ s.tooltip__container }`}>

          <div
          
            onMouseOut = { handleMouseOut }
            onMouseOver = { handleMouseOver }
            className = {`flex items-center justify-center relative pointer ${ s.tooltip }`}
            
          >

            <ToolTipIcon className = { s.tooltip__icon }/>

            <WhiteBox
            
              withPoint
              withBorder
              pointPosition = "center"
              onMouseOut = { handleMouseOut }
              onMouseOver = { handleMouseOver }
              className = {`absolute ${ s.tooltip__message } ${ showToolTip && s['tooltip__message--opened'] }`}

            >
              
              <p className = {`font-semibold text-13 ${ s.tooltip__message__text }`}>Не выходить из <br />системы</p>
              
            </WhiteBox>

          </div>

        </div>

      </div>

      <DefaultButton

        name = "Войти"
        className = { s.button }
        action = { () => log() }

      >

        <SignInIconWhite className = { s.button__icon }/>

      </DefaultButton>

      <p className = {`font-semibold text-13 ${ s.calltext } relative`}>Вы все еще не часть DUOS?</p>

      <DefaultButton

        gray
        small
        name = "Зарегистрироваться"
        className = { s.button__gray }
        action = { signUp }

      />

    </Popup>

  )

}

export default SignInPopup;