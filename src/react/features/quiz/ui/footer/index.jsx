import s from "@/react/features/quiz/ui/quiz.module.scss";
import NotiseSuccess from "@/react/components/icons/notise.success";

const quiz = [

  { id: 1, title: 'Профиль', timeToComplete: '1 минута' },
  { id: 2, title: 'Услуги', timeToComplete: '10 минут' },
  { id: 3, title: 'Ценности', timeToComplete: '5 минут' },
  { id: 4, title: 'Документы', timeToComplete: '3 минуты' },
  { id: 5, title: 'Публикации', timeToComplete: '1 минута' }

]

const Footer = ({

  status

}) => {

  return (

    <div className = {`${ s.questionnaire__footer }`}>

      {quiz.map( el => {

        return (

          <div className = {`${ s.questionnaire__footer__item }`} key={ el.id }>

            <p className = {`${ s.questionnaire__footer__item__title }`}>{ el.title }</p>

            {status !== 'end'

              ? <p className = {`${ s.questionnaire__footer__item__minutes }`}>{ el.timeToComplete }</p>

              : <div className = { `flex` }>

                <p className = {`${ s.questionnaire__footer__item__minutes }`}>{ `Завершено` }</p>
                <NotiseSuccess fill={ '#D1E3F7' }/>

                </div>

            }

          </div>

        )

      })

      }

    </div>

  )

}

export default Footer