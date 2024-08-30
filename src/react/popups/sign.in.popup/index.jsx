import Popup from '../popup'
import Textfield from '@/react/components/forms/textfield'
import SignInIconWhite from '@/react/components/icons/sign.in.icon.white'
import DefaultButton from '@/react/components/buttons/default.button'
import s from './sign.in.module.scss'
import { useLogin } from '@/react/popups/sign.in.popup/model'
import cssIf from '@/scripts/helpers/css.if'
import { extractNumbers } from '@/scripts/helpers/extract.numbers'
import RecoveryPopup from '@/react/popups/recovery.popup'

const SignInPopup = ({

  signUp = () => {},
  bodyClassName = "",
  isOpened = false,
  closePopup = () => {},
  setShowSignInPopup,
  showRecoveryPopup,
  setShowRecoveryPopup

}) => {

  const {

    handleClosePopup,
    handleLog,
    setUserNumber,
    setUserPassword,
    userNumber,
    userPassword,
    handleRecovery,
    recoveryData,
    error,

  } = useLogin( {

    closePopup,
    setShowRecoveryPopup

  } )
  
  console.log( error?.phone ? error.phone[0] : error )
  
  if( showRecoveryPopup ) {

    return (

      <RecoveryPopup

        isOpened = { showRecoveryPopup }
        closePopup = { handleClosePopup }
        bodyClassName = {`${ s.recovery__popup }`}
        email = { recoveryData?.email }
        logIn = { setShowRecoveryPopup }

      />

    )

  } else {

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
            error = { error?.phone ? error.phone?.[0] : error }
            type = 'phone'
            className = {`${s.signin_content__field}`}

          />

          <Textfield

            value = { userPassword }
            onChange = { (e) => setUserPassword(e.target.value) }
            withTitle = { false }
            className = {`${s.signin_content__field}`}
            error = { error?.phone ? error : error }
            placeholder = "Пароль"
            maxLength = { 5 }
            password

          />

          <p

            className = { `text-14 
          ${ s.signin_content__forgot } 
          ${ cssIf( extractNumbers(userNumber).length < 11, s.signin_content__forgot__disabled )}` }
            onClick = { handleRecovery }

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

}

export default SignInPopup;