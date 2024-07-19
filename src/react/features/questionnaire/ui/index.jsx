import s from './questionnaire.module.scss'
import DefaultButton from "@/react/components/buttons/default.button";
import FormLogo from "@/react/features/questionnaire/ui/form.img";
import Titles from "@/react/features/questionnaire/ui/titles";
import ContextNotise from "@/react/features/questionnaire/ui/context.notise";
import Footer from "@/react/features/questionnaire/ui/footer";
import {useQuestionnaire} from "@/react/features/questionnaire/model";

const Questionnaire = () => {

  const {

    buttonTitle,
    handleButtonAction,
    status

  } = useQuestionnaire()

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


export default Questionnaire