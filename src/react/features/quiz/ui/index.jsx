import s from './quiz.module.scss'
import DefaultButton from "@/react/components/buttons/default.button";
import FormLogo from "@/react/features/quiz/ui/form.img";
import Titles from "@/react/features/quiz/ui/titles";
import ContextNotise from "@/react/features/quiz/ui/context.notise";
import Footer from "@/react/features/quiz/ui/footer";

const Quiz = ({

  buttonTitle,
  handleButtonAction,
  status

}) => {

  return (

    <div className = {`${ s.questionnaire }`}>

      <FormLogo status = { status }/>
      <Titles status = { status }/>
      <ContextNotise status = { status }/>
      <DefaultButton

        name = { buttonTitle }
        action = { handleButtonAction }
        className = {`${ s.questionnaire__button }`}

      />
      <Footer status = { status }/>

    </div>

  )

}


export default Quiz