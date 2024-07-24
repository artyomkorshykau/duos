import s from '@/react/widgets/quiz/ui/quiz.module.scss';
import NotiseSuccessDisabled
  from '@/react/components/icons/notise.success.disabled';
import useGlobal from '@/store';
import QuizProgress from '@/constants/quiz.progress';
import QuizSteps from '@/constants/quiz.steps';


const Steps = ( {

status

} ) => {

  const disabled = status === QuizProgress.end && `${ s.disabled }`;

  return (

    <div className={ `${ s.quiz__steps }` }>

      { QuizSteps.map( el => {

        return (

          <div className={ `${ s.quiz__steps__item }` } key={ el.id }>

            <p className={ `text-16 ${ s.quiz__steps__item__title } ${ disabled }` }>{ el.title }</p>

            { status !== QuizProgress.end

              ? <p className={ `text-13 ${ s.quiz__steps__item__progress }` }>{ el.timeToComplete }</p>

              : <div className={ `flex gap-1` }>

                <p className={ `text-13 ${ s.quiz__steps__item__progress } ${ disabled }` }>{ `Завершено` }</p>
                <NotiseSuccessDisabled fill={ '#D1E3F7' } />

              </div>

            }

          </div>

        )

      } )

      }

    </div>

  )

}

export default Steps;