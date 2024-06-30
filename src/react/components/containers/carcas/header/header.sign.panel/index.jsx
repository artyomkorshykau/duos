import HeaderAuthPanel from "./auth.panel";
import SignInIcon from "@/react/components/icons/sign.in.icon";
import DefaultButton from "@/react/components/buttons/default.button";
import s from "./header.sign.panel.module.scss";

const HeaderSignPanel = ({

  userData = {},
  authorized = false,
  isClient = false,
  quizHadCompleted = false,

}) => {

  function signIn() { alert('открыть анкету SignIn') }
  function signUp() { alert('открыть анкету SignUp') }
  function sendQuiz() { alert('закочить анкету') }

  return (

    <div className = {`flex items-center justify-between ${ s['sign-panel'] } ${ authorized ? s['sign-panel__in_auth'] : s['sign-panel__in_unauth'] }`}>

      { !authorized

        ?

          <>

            <div
            
              onClick = { () => signIn() }
              className = {`flex items-center justify-between ${ s['sign-panel__in'] } pointer`}
              
            >

              <p className = {`flex items-center justify-between text-16 ${ s['sign-panel__in__text'] }`}>Войти</p>

              <SignInIcon className = {`${ s['sign-panel__in__icon'] } pointer`}/>

            </div>

            <DefaultButton

              name = "Регистрация"
              className = {`${ s.button }`}
              action = { () => signUp() }

            />

          </>

        :

          <>

            { !quizHadCompleted &&

              <DefaultButton

                name = "Закончить анкету"
                className = {`${ s.button } ${ s.button__quiz }`}
                action = { () => sendQuiz() }

              />

            }

            <HeaderAuthPanel

              userData = { userData }
              quizHadCompleted = { quizHadCompleted }

            />

          </>
    
      }

    </div>

  )

}

export default HeaderSignPanel;