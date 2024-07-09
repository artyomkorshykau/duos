import { Fragment, useState, useEffect } from "react";
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
  value,
  logIn = () => {},
  getCode = () => {},
  bodyClassName = "",
  isOpened = false,
  policyAgree = false,
  codeModeOpened = false,
  setPolicyAgree = () => {},
  closePopup = () => {},
  closePopups = () => {}

}) => {

  const [ roleModeOpened, setRoleModeOpened ] = useState( false );

  const [ code1, setCode1 ] = useState('-');
  const [ code2, setCode2 ] = useState('-');
  const [ code3, setCode3 ] = useState('-');
  const [ code4, setCode4 ] = useState('-');
  const [ code5, setCode5 ] = useState('-');

  const handleCode1Change = (e) => {
    const newValue = e.target.value;
    setCode1(newValue);
    if (newValue !== "-" && newValue.length === 1) {
      document.querySelector(`[data-index="2"]`).focus();
    }
  };

  const handleCode2Change = (e) => {
    const newValue = e.target.value;
    setCode2(newValue);
    if (newValue !== "-" && newValue.length === 1) {
      document.querySelector(`[data-index="3"]`).focus();
    }
  };

  const handleCode3Change = (e) => {
    const newValue = e.target.value;
    setCode3(newValue);
    if (newValue !== "-" && newValue.length === 1) {
      document.querySelector(`[data-index="4"]`).focus();
    }
  };

  const handleCode4Change = (e) => {
    const newValue = e.target.value;
    setCode4(newValue);
    if (newValue !== "-" && newValue.length === 1) {
      document.querySelector(`[data-index="5"]`).focus();
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

  const [ showTimer, setShowTimer ] = useState( false );
  const [ time, setTime ] = useState( 31 );

  useEffect(() => {

    const intervalId = setInterval(() => {

      if ( time > 0 ) {

        setTime( time - 1 );

      } else {

        setShowTimer( true );

      }

    }, 1000);

    return () => clearInterval( intervalId );

  }, [ time ]);

  const rolechoice = <RoleChoice close = { () => closePopups } />

  return (

    <Popup

      title = { !codeModeOpened ? `Присоединяйтесь` : `Введите код` }
      titlebottom = { !codeModeOpened ? `к сообществу DUOS` : `` }
      subtitle = { !codeModeOpened ? `Введите номер телефона` : `Мы отправили его вам в СМС` }
      isOpened = { isOpened }
      closePopup = { closePopup }
      bodyClassName = { bodyClassName }
      subtitleMargin = { codeModeOpened ? true : false }
      contentOnly = { roleModeOpened && true }
      content = { rolechoice }

    >

      { !codeModeOpened ?

          <div className = { roleModeOpened && s.hidden }>

            <Textfield

              set = { set }
              value = { value }
              withTitle = { false }
              type = "number"
              placeholder = "+7 (___) ___-__-__"

            />

            <div className = {`flex items-center ${ s.checkbox__container }`}>

              <Checkbox

                className = { s.checkbox }
                isChecked = { policyAgree }
                setIsChecked = { setPolicyAgree }

              />

              <p className = {`font-semibold text-13 ${ s.argeetext } relative`}>
                
                Согласен <Link href = "/#policy"><span className = {`${ s.argeetext__link }`}>с политикой обработки <br />персональных данных</span></Link>
                
              </p>

            </div>

            <DefaultButton

              name = "Получить код"
              className = { s.button }
              action = { getCode }

            >

            </DefaultButton>

          </div>

        :

          <div className = { roleModeOpened && s.hidden }>

            <div className = {`flex items-center justify-center ${ s.code__numbers }`}>

              <NumberField

                index = { 1 }
                data-index = "1"
                value = { code1 }
                onChange = { handleCode1Change }
                
              />

              <NumberField

                index = { 2 }
                data-index = "2"
                value = { code2 }
                onChange = { handleCode2Change }

              />

              <NumberField

                index = { 3 }
                data-index = "3"
                value = { code3 }
                onChange = { handleCode3Change }

              />

              <NumberField

                index = { 4 }
                data-index = "4"
                value = { code4 }
                onChange = { handleCode4Change }

              />

              <NumberField

                index = { 5 }
                data-index = "5"
                value = { code5 }
                onChange = { handleCode5Change }

              />

            </div>

            <div className = {`flex items-center ${ s.checkbox__container }`}>

              <p className = {`font-semibold text-13 ${ s.gettext } ${ showTimer && s['gettext--hidden'] }`}>
                
                Отправить код повторно можно через { time }
                
              </p>
              
            </div>

          </div>

        }

      <p className = {`font-semibold text-13 ${ s.calltext }`}>У вас уже есть личный кабинет?</p>

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