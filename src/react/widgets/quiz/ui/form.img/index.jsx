import FormLogoBegin from "@/react/components/icons/form.logo.begin";
import FormLogoContinue from "@/react/components/icons/form.logo.continue";
import FormLogoEnd from "@/react/components/icons/form.logo.end";
import s from "@/react/widgets/quiz/ui/quiz.module.scss";
import QuizProgress from '@/constants/quiz.progress';

const FormLogo = ({

  status

}) => {

  return (

    <div className={`${ s.quiz__form_logo }`}>

      { status === QuizProgress.begin && <FormLogoBegin/> }
      { status === QuizProgress.continue && <FormLogoContinue/> }
      { status === QuizProgress.end && <FormLogoEnd/> }

    </div>

  )

}

export default FormLogo