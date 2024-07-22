import FormLogoBegin from "@/react/components/icons/form.logo.begin";
import FormLogoContinue from "@/react/components/icons/form.logo.continue";
import FormLogoEnd from "@/react/components/icons/form.logo.end";
import s from "@/react/widgets/quiz/ui/quiz.module.scss";

const FormLogo = ({

  status

}) => {

  return (

    <div className={`${ s.quiz__form_logo }`}>

      { status === 'begin' && <FormLogoBegin/> }
      { status === 'continue' && <FormLogoContinue/> }
      { status === 'end' && <FormLogoEnd/> }

    </div>

  )

}

export default FormLogo