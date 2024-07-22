import s from "@/react/widgets/quiz/ui/quiz.module.scss";
import NotiseSuccess from "@/react/components/icons/notise.success";
import useGlobal from "@/store";


const Footer = ({

  status

}) => {

  const [ globalState ] = useGlobal();

  return (

    <div className = {`${ s.quiz__footer }`}>

      {globalState.quizData.map( el => {

        return (

          <div className = {`${ s.quiz__footer__item }`} key={ el.id }>

            <p className = {`text-16 ${ s.quiz__footer__item__title }`}>{ el.title }</p>

            {status !== 'end'

              ? <p className = {`text-13 ${ s.quiz__footer__item__minutes }`}>{ el.timeToComplete }</p>

              : <div className = { `flex` }>

                <p className = {`text-13 ${ s.quiz__footer__item__minutes }`}>{ `Завершено` }</p>
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