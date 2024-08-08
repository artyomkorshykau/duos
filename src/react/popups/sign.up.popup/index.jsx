import { useState, useEffect } from "react";
import Link from "next/link";
import Popup from "../popup";
import Checkbox from "@/react/components/forms/checkbox";
import Textfield from "@/react/components/forms/textfield";
import NumberField from "@/react/components/forms/numberfield";
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
  codeModeClosed = false

}) => {

  const [ userNumber, setUserNumber ] = useState("");
  const [ policyAgree, setPolicyAgree ] = useState( false );
  const [ codeModeOpened, setCodeModeOpened ] = useState( false );
  const [ showTimer, setShowTimer ] = useState( false );
  const [ time, setTime ] = useState( 31 );
  const [ intervalId, setIntervalId ] = useState( null );

  const handleClosePopup = () => {

    closePopup();
    setUserNumber("");

  };

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

  const [ code1, setCode1 ] = useState('');
  const [ code2, setCode2 ] = useState('');
  const [ code3, setCode3 ] = useState('');
  const [ code4, setCode4 ] = useState('');
  const [ code5, setCode5 ] = useState('');

  const handleCode1Change = (e) => {
    const newValue = e.target.value;
    setCode1(newValue);
    if (newValue!== '-' && newValue.length === 1) {
      const nextInput = document.querySelector(`[data-index="2"]`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleCode2Change = (e) => {
    const newValue = e.target.value;
    setCode2(newValue);
    if (newValue!== '-' && newValue.length === 1) {
      const nextInput = document.querySelector(`[data-index="3"]`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleCode3Change = (e) => {
    const newValue = e.target.value;
    setCode3(newValue);
    if (newValue!== '-' && newValue.length === 1) {
      const nextInput = document.querySelector(`[data-index="4"]`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
  const handleCode4Change = (e) => {
    const newValue = e.target.value;
    setCode4(newValue);
    if (newValue!== '-' && newValue.length === 1) {
      const nextInput = document.querySelector(`[data-index="5"]`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleCode5Change = (e) => {
    const newValue = e.target.value;
    setCode5(newValue);
    if (newValue !== "-" && newValue.length === 1) {
      
      // axios.post("/api/verify-code", {
      //   code1,
      //   code2,
      //   code3,
      //   code4,
      //   code5
      // })
      // .then((response) => {
      //   if (response.data.success) {
        
      //   } else {

      //   }
      // })
      // .catch((error) => {
      //   console.error(error);
      // });

      setRoleModeOpened( true );

    }

  };

  function getNewCode() {

    alert('отправить новый код');
    setShowTimer( false );
    setTime( 31 );

  }

  useEffect(() => {

    const nextInput = document.querySelector(`[data-index="1"]`);
    if (nextInput) {
      nextInput.focus();
    }

  }, [ codeModeOpened ]);

  useEffect(() => {

    if ( codeModeClosed ) {

      setCodeModeOpened( false );
      setCode1('');
      setCode2('');
      setCode3('');
      setCode4('');
      setCode5('');

    }

  }, [ codeModeClosed ]);

  const rolechoice = 
  
    <RoleChoice
    
      close = { () => closePopups }
    
    />

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
      content = { rolechoice }
      doubletitle

    >

      { !codeModeOpened ?

          <div className = { roleModeOpened && s.hidden }>

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
              placeholder = "E-mail"
              className = { `${ s.email }` }

            />

            <div className = {`flex items-center ${ s.checkbox__container }`}>

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

              />

            </div>

            <div className = {`flex items-center ${ s.checkbox__container }`}>

              { !showTimer ?

                  <p className = {`font-semibold text-13 ${ s.gettext }`}>
                    
                    Отправить код повторно можно через { time }
                    
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