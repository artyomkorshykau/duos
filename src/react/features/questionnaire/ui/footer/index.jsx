import s from "@/react/features/questionnaire/ui/questionnaire.module.scss";
import NotiseSuccess from "@/react/components/icons/notise.success";

const questionnaires = [

  { title: 'Профиль', timeToComplete: '1 минута' },
  { title: 'Услуги', timeToComplete: '10 минут' },
  { title: 'Ценности', timeToComplete: '5 минут' },
  { title: 'Документы', timeToComplete: '3 минуты' },
  { title: 'Публикации', timeToComplete: '1 минута' }

]

const Footer = ({

  status

}) => {

  return (

    <div className = {`${ s.questionnaire__footer }`}>

      {questionnaires.map( el => {

        return (

          <div className = {`${ s.questionnaire__footer__item }`}>

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