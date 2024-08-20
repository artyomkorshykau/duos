"use client"

import s from './quiz.module.scss'
import DefaultButton from "@/react/components/buttons/default.button";
import ContextNotise
  from "@/react/widgets/steps/quiz/ui/context.notise/index.jsx";
import FormLogo from "@/react/widgets/steps/quiz/ui/form.img/index.jsx";
import Titles from "@/react/widgets/steps/quiz/ui/titles/index.jsx";
import Steps from "@/react/widgets/steps/quiz/ui/steps/index.jsx";

const Quiz = ( props ) => {

  const {

    buttonTitle,
    handleButtonAction,
    status

  } = props

  return (

    <div className = {`${ s.quiz }`}>

      <FormLogo status = { status }/>
      <Titles status = { status }/>
      <ContextNotise status = { status }/>
      <DefaultButton

        name = { buttonTitle }
        action = { handleButtonAction }
        className = {`${ s.quiz__button }`}

      />
      <Steps status = { status }/>

    </div>

  )

}

export default Quiz