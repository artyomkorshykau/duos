"use client"

import { useEffect, useState } from "react";
import useGlobal from "@/store";
import SignInIcon from "@/react/components/icons/sign.in.icon";
import DefaultButton from "@/react/components/buttons/default.button";
import HeaderAuthPanel from "./auth.panel";
import s from "./header.sign.panel.module.scss";

const HeaderSignPanel = ({

  quizHadCompleted = false,
  signIn = () => {},
  signUp = () => {},
  status

}) => {

  const [ globalState, globalActions ] = useGlobal()
  const [ logged , setLogged ] = useState(false)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {

    globalActions.user.setUser().then(() => {

      setLogged(true)
      setLoading(false)

    })

  }, [ globalState.user.role_id ])

  if (loading) {

    return null

  }

  function sendQuiz() { alert('закончить анкету') }

  return (

    <div className = {`flex items-center justify-between${ s['sign-panel'] } ${ globalState.user.role_id ? s['sign-panel__in_auth'] : s['sign-panel__in_unauth'] } relative`}>

      { !logged  ?

        <>

          <div

            onClick={ () => signIn() }
            className={ `flex items-center justify-between ${ s[ 'sign-panel__in' ] } pointer` }

          >

            <p
              className={ `flex items-center justify-between text-16 ${ s[ 'sign-panel__in__text' ] }` }>Войти</p>

            <SignInIcon className={ `${ s[ 'sign-panel__in__icon' ] } pointer` }/>

          </div>

          <DefaultButton

            name="Регистрация"
            className={ `${ s.button }` }
            action={ () => signUp() }

          />

        </>

        : <div className={ `flex items-center ${ s[ 'sign-panel__in_auth__avatar' ] }` }>

        { !quizHadCompleted &&

          <DefaultButton

            name="Закончить анкету"
            className={ `${ s.button } ${ s.button__quiz } ${ globalState.user.user_id === 1 && s[ 'button__quiz--opened' ] }` }
            action={ () => sendQuiz() }

          />

        }

        <HeaderAuthPanel

          quizHadCompleted={ quizHadCompleted }
          status={ status }

        />

        </div>

      }

    </div>

  )

}

export default HeaderSignPanel;