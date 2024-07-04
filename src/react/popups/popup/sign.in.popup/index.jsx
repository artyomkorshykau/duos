import { useState } from "react";
import Popup from "..";
import WhiteBox from "@/react/components/containers/whitebox";
import Checkbox from "@/react/components/forms/checkbox";
import Textfield from "@/react/components/forms/textfield";
import ToolTipIcon from "@/react/components/icons/tooltip.icon";
import SignInIconWhite from "@/react/components/icons/sign.in.icon.white";
import DefaultButton from "@/react/components/buttons/default.button";
import s from "./sign.in.module.scss";

const SignInPopup = ({

  set,
  value,
  logIn = () => {},
  signUp = () => {},
  bodyClassName = "",
  isOpened = false,
  isRememberUser = false,
  setIsRememberUser = () => {},
  closePopup = () => {},

}) => {

  
  const [ showToolTip, setShowToolTip ] = useState( false );

  const handleMouseOut = () => { setShowToolTip( false ) };
  const handleMouseOver = () => { setShowToolTip( true ) };

  return (

    <Popup

      title = "Вход"
      subtitle = "Введите номер телефона"
      isOpened = { isOpened }
      closePopup = { closePopup() }
      bodyClassName = { bodyClassName }

    >

      <Textfield

        set = { set }
        value = { value }
        withTitle = { false }
        type = "number"
        placeholder = "+7 (___) ___-__-__"

      />

      <div className = {`flex items-center ${ s.checkbox__container }`}>

        <Checkbox

          title = "Запомнить меня"
          className = { s.checkbox }
          isChecked = { isRememberUser }
          setIsChecked = { setIsRememberUser }

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
        action = { logIn }

      >

        <SignInIconWhite className = { s.button__icon }/>

      </DefaultButton>

      <p className = {`font-semibold text-13 ${ s.calltext }`}>Вы все еще не часть DUOS?</p>

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