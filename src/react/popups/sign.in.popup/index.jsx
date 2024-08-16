import Popup from "../popup";
import Textfield from "@/react/components/forms/textfield";
import SignInIconWhite from "@/react/components/icons/sign.in.icon.white";
import DefaultButton from "@/react/components/buttons/default.button";
import s from "./sign.in.module.scss";
import { useLogin } from "@/react/popups/sign.in.popup/model";

const SignInPopup = ({

  logIn = () => {},
  signUp = () => {},
  bodyClassName = "",
  isOpened = false,
  closePopup = () => {}

}) => {

  const {

    handleClosePopup,
    handleLog,
    setUserNumber,
    setUserPassword,
    userNumber,
    userPassword,
    data

  } = useLogin( {

    closePopup,
    logIn

  } )

  return (

    <Popup

      title = "Вход"
      subtitle = "Введите номер телефона и пароль из SMS, который вы получили при регистрации"
      isOpened = { isOpened }
      closePopup = { handleClosePopup }
      bodyClassName = { bodyClassName }
      subtitleMargin

    >

      <div className = { `${ s.signin_content }` }>

        <Textfield

        value = { userNumber }
        withTitle = { false }
        onChange = { (e) => setUserNumber(e.target.value) }
        placeholder = { userNumber ? "Телефон" : "+7 (___) ___ - __ - __" }
        error = {  data?.error && data?.error }
        type = 'phone'
        className = {`${s.signin_content__field}`}

        />

        <Textfield

          value = { userPassword }
          onChange = { (e) => setUserPassword(e.target.value) }
          withTitle = { false }
          className = {`${s.signin_content__field}`}
          error = {  data?.error && data?.errors?.code?.[0] }
          placeholder = "Пароль"
          maxLength = { 5 }
          password

        />

        <p

          className = { `text-14 ${ s.signin_content__forgot }` }
          onClick = { () => alert('Вспоминай))))0)')}

        >

          Забыли пароль?

        </p>

        <DefaultButton

          name = "Войти"
          className = { `${ s.button }` }
          action = { () => handleLog() }
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