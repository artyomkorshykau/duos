import s from "@/react/widgets/quiz/ui/quiz.module.scss";
import QuizProgress from '@/constants/quiz.progress';

const Titles = ({

  status

}) => {

  let title
  let subTitle

  switch (status) {

    case QuizProgress.begin:
      title = 'Анкетирование'
      subTitle = 'Заполните анкету, чтобы получить новые возможности. В любой момент вы можете прерваться и продолжить позже'
      break;

    case QuizProgress.continue:
      title = 'Анкетирование'
      subTitle = 'Продолжите заполнение анкеты в любой удобный момент'
      break;

    case QuizProgress.end:
      title = 'Проверяем...'
      subTitle = 'Проверка и верификация анкет займет какое-то время. Мы отправим вам уведомление сразу как будет известен результат'
      break;

    default:
      title = 'Анкетирование'
      subTitle = ''

  }

  return (

    <>

      <p className={`text-26 ${ s.quiz__title }`}>{ title }</p>
      <p className={`text-14 ${ s.quiz__subtitle }`}>{ subTitle }</p>

    </>

  )

}

export default Titles