import FormLogoBegin from "@/react/components/icons/form.logo.begin";
import FormLogoContinue from "@/react/components/icons/form.logo.continue";
import FormLogoEnd from "@/react/components/icons/form.logo.end";
import s from "@/react/features/questionnaire/ui/questionnaire.module.scss";

const FormLogo = ({

  status

}) => {

  return (

    <div className={`${ s.questionnaire__form_logo }`}>

      { status === 'begin' && <FormLogoBegin/> }
      { status === 'continue' && <FormLogoContinue/> }
      { status === 'end' && <FormLogoEnd/> }

    </div>

  )

}

export default FormLogo