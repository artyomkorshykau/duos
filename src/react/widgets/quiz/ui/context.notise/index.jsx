import s from "@/react/widgets/quiz/ui/quiz.module.scss";
import NotiseInfo from "@/react/components/icons/notise.info";
import QuizProgress from '@/constants/quiz.progress';

const ContextNotise = ({

  status

}) => {

  if ( status === QuizProgress.begin ) {

    return (

      <div className = {`${ s.quiz__context_notise }`}>

        <NotiseInfo fill = { '#18009E' }/>
        <p className = {`text-13 ${ s.quiz__context_notise__title }`}>{ `Все поля являются обязательными.` }</p>

      </div>

    )

  }

}

export default ContextNotise