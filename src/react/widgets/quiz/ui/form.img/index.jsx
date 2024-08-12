import s from "@/react/widgets/quiz/ui/quiz.module.scss";
import QuizProgress from '@/constants/quiz.progress'

const FormLogo = ({

  status

}) => {

  return (

    <div className = {`${ s.quiz__form_logo }`}>

      { status === QuizProgress.begin && <img src="/img/questionnaire/begin.png" alt=""/> }
      { status === QuizProgress.continue && <img src="/img/questionnaire/continue.png" alt=""/> }
      { status === QuizProgress.end && <img src="/img/questionnaire/end.png" alt=""/> }

    </div>

  )

}

export default FormLogo