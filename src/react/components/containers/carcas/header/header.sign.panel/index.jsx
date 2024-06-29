import SignInIcon from "@/react/components/icons/sign.in.icon";
import s from "./header.sign.panel.module.scss";
import DefaultButton from "@/react/components/buttons/default.button";

const HeaderSignPanel = ({

  authorized = false,
  isClient = false,

}) => {

  function signIn() { alert('открыть анкету SignIn') }
  function signUp() { alert('открыть анкету SignUp') }

  return (

    <div className = {`flex items-center justify-between ${ s['sign-panel'] }`}>

      <div
      
        onClick = { () => signIn() }
        className = {`flex items-center justify-between ${ s['sign-panel__in'] } pointer`}
        
      >

        <p className = {`flex items-center justify-between text-14 ${ s['sign-panel__in__text'] }`}>Войти</p>

        <SignInIcon className = {`${ s['sign-panel__in__icon'] }`}/>

      </div>

      <DefaultButton

        name = "Регистрация"
        className = {`${ s.button }`}
        action = { () => signUp() }

      />

    </div>

  )

}

export default HeaderSignPanel;