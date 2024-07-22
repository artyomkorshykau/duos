import s from "@/react/widgets/quiz/ui/quiz.module.scss";

const Titles = ({

  status

}) => {

  const title = status === 'end' ? `Проверяем...` : `Анкетирование`

  const subTitle = status === 'begin'

    ? `Заполните анкету, чтобы получить новые возможности. В любой момент вы можете прерваться и продолжить позже`
    : status === 'continue'

      ? `Продолжите заполнение анкеты в любой удобный момент`
      : `Проверка и верификация анкет займет какое-то время. Мы отправим вам уведомление сразу как будет известен результат`

  return (

    <>

      <p className={`text-26 ${ s.quiz__title }`}>{ title }</p>
      <p className={`text-14 ${ s.quiz__subtitle }`}>{ subTitle }</p>

    </>

  )

}

export default Titles