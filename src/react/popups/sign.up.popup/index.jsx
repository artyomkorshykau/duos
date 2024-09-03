import Link from 'next/link'
import Popup from '../popup'
import Checkbox from '@/react/components/forms/checkbox'
import Textfield from '@/react/components/forms/textfield'
import DefaultButton from '@/react/components/buttons/default.button'
import RoleChoice from './role.choice'
import s from './sign.up.module.scss'
import { useSignup } from '@/react/popups/sign.up.popup/model'

const SignUpPopup = ({

  set,
  logIn = () => {},
  bodyClassName = "",
  isOpened = false,
  closePopup = () => {},

}) => {

  const {

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
    error

  } = useSignup( {closePopup} )
  
    return (

      <Popup

        title = { !codeModeOpened ? `Присоединяйтесь` : `Введите код из SMS` }
        titlebottom = { !codeModeOpened ? `к сообществу DUOS` : `` }
        subtitle = { !codeModeOpened ? `Введите номер телефона и действующий e-mail` : `Этот код будет служить вашим паролем для входа в личный кабинет` }
        isOpened = { isOpened }
        closePopup = { handleClosePopup }
        bodyClassName = { !codeModeOpened ? bodyClassName : s.signup_popup }
        subtitleMargin = { codeModeOpened }
        contentOnly = { roleModeOpened }
        content = { roleModeOpened && <RoleChoice close = { handleClosePopup }/> }

      >

        { !codeModeOpened ?

          <div className = { roleModeOpened && s.hidden }>

            <Textfield

              set = { set }
              value = { userNumber }
              withTitle = { false }
              onChange = { (e) => setUserNumber(e.target.value) }
              error = { error?.errors?.phone ? error?.errors?.phone?.[0] : error?.errors?.[0] }
              type = 'phone'
              placeholder = { userNumber ? "Телефон" : "+7 (___) ___ - __ - __" }

            />

            <Textfield

              withTitle = { false }
              placeholder = "E-mail"
              className = { `${ s.email }` }
              error = { error?.errors?.email?.[0] }
              value = { userEmail }
              onChange = { (e) => setUserEmail(e.target.value) }
              type = 'text'

            />

            <div className = {`flex items-center my-6`}>

              <Checkbox

                className = { s.checkbox }
                isChecked = { policyAgree }
                setIsChecked =  { (value) => setPolicyAgree(value) }

              />

              <p className = {`font-semibold text-13 ${ s.argeetext } relative`}>

                Согласен <Link href = "/#policy"><span className = {`${ s.argeetext__link }`}>с политикой обработки <br />персональных данных</span></Link>

              </p>

            </div>

            <DefaultButton

              name = "Получить код"
              className = { s.button }
              action = { () => getCode() }
              width = 'full'
              disabled = { !policyAgree }

            />

          </div>

          :

          <div className = { roleModeOpened && s.hidden }>

            <div className = {`flex items-center justify-center ${ s.code__numbers }`}>

              <Textfield

                withTitle = { false }
                placeholder = "Код-пароль"
                password
                className = {`${ s.code__numbers__password }`}
                value = { userCode }
                maxLength = { 5 }
                error = { error }
                onChange = { (e) => setUserCode(e.target.value) }

              />

            </div>

            <div className = {`flex items-center ${s.code_message}`}>

              { !showTimer ?

                <p className = {`font-semibold text-13 ${ s.gettext }`}>

                  Отправить код повторно можно через {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}

                </p>

                :

                <p

                  onClick = { () => getNewCode() }
                  className = {`font-semibold text-15 ${ s.gettext } ${ s.gettext__new_code } relative pointer`}

                >

                  Отправить новый код-пароль

                </p>

              }

            </div>

          </div>

        }

        <p className = {`font-semibold text-13 ${ s.calltext } relative`}>У вас уже есть личный кабинет?</p>

        <DefaultButton

          gray
          small
          name = "Войти"
          action = { logIn }
          className = { s.button__gray }

        />

      </Popup>

    )

  }

export default SignUpPopup;