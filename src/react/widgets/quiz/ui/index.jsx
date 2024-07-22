import s from './quiz.module.scss'
import DefaultButton from "@/react/components/buttons/default.button";
import FormLogo from "@/react/widgets/quiz/ui/form.img";
import Titles from "@/react/widgets/quiz/ui/titles";
import ContextNotise from "@/react/widgets/quiz/ui/context.notise";
import Steps from "@/react/widgets/quiz/ui/steps";

const Quiz = ({

  buttonTitle,
  handleButtonAction,
  status

}) => {

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