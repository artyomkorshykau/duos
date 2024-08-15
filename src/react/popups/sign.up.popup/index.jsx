import { useState, useEffect } from "react";
import Link from "next/link";
import Popup from "../popup";
import Checkbox from "@/react/components/forms/checkbox";
import Textfield from "@/react/components/forms/textfield";
import DefaultButton from "@/react/components/buttons/default.button";
import RoleChoice from "./role.choice";
import s from "./sign.up.module.scss";

const SignUpPopup = ({

  set,
  logIn = () => {},
  bodyClassName = "",
  isOpened = false,
  closePopup = () => {},
  closePopups = () => {},

}) => {

  const [ userNumber, setUserNumber ] = useState("");
  const [ userEmail, setUserEmail ] = useState("");
  const [ userCode, setUserCode ] = useState("");
  const [ policyAgree, setPolicyAgree ] = useState( false );
  const [ codeModeOpened, setCodeModeOpened ] = useState( false );
  const [ showTimer, setShowTimer ] = useState( false );
  const [ time, setTime ] = useState( 180 );
  const [ intervalId, setIntervalId ] = useState( null );

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleClosePopup = () => {

    closePopup();
    setUserNumber("");
    setUserEmail("");
    setUserCode("");
    setCodeModeOpened(false)

  };

  useEffect(() => {
    if (codeModeOpened) {
      const id = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          setShowTimer(true);
        }
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [codeModeOpened, time]);

  const getCode = () => {
    if (userNumber.length >= 11 && policyAgree === true) {
      setCodeModeOpened(true);
    }
  };

  const [ roleModeOpened, setRoleModeOpened ] = useState( false );

  const getNewCode = () => {

    alert('отправить новый код');
    setShowTimer( false );
    setTime( 31 );

  };

  useEffect(() => {

    const nextInput = document.querySelector(`[data-index="1"]`);
    if (nextInput) {
      nextInput.focus();
    }

  }, [ codeModeOpened ]);

  return (

    <Popup

      title = { !codeModeOpened ? `Присоединяйтесь` : `Введите код из SMS` }
      titlebottom = { !codeModeOpened ? `к сообществу DUOS` : `` }
      subtitle = { !codeModeOpened ? `Введите номер телефона и действующий e-mail` : `Этот код будет служить вашим паролем для входа в личный кабинет` }
      isOpened = { isOpened }
      closePopup = { handleClosePopup }
      bodyClassName = { !codeModeOpened ? bodyClassName : s.signup_popup }
      subtitleMargin = { codeModeOpened ? true : false }
      contentOnly = { roleModeOpened && true }
      content = { <RoleChoice close = { () => closePopups }/> }

    >

      { !codeModeOpened ?

          <div className = { roleModeOpened && s.hidden }>

            <Textfield

              set = { set }
              value = { userNumber }
              withTitle = { false }
              onChange = { (e) => setUserNumber(e.target.value) }
              type = 'phone'
              placeholder = "+7 (___) ___ - __ - __"

            />

            <Textfield

              withTitle = { false }
              placeholder = "E-mail"
              className = { `${ s.email }` }
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
                onChange = { (e) => setUserCode(e.target.value) }

              />

            </div>

            <div className = {`flex items-center`}>

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