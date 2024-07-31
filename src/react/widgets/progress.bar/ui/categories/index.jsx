import s from '../progress.bar.module.scss'
import useGlobal from '@/store';
import NotiseSuccess from '@/react/components/icons/notise.success';
import QuizSteps from '@/constants/quiz.steps';
import cssIf from '@/scripts/helpers/css.if'
import Progress from '../progress';

const Categories = ( props ) => {

  const {

    activeStep

  } = props

  const [ globalState ] = useGlobal()

  return (

    <div className = {`${ s.progressBar__steps }`}>

      { QuizSteps.map((category, i) => {

        return (

          <div className = {`relative ${ s.progressBar__steps__item }`} key = {category.id}>

            <p className = {`text-16 ${ s.progressBar__steps__item__title } ${ cssIf( activeStep === category.title, s.progressBar__steps__item__title__active ) }`}>

              { category.title }

            </p>

            <div className = {`${ s.progressBar__steps__item__icon }`}>

              <NotiseSuccess

                fill = { activeStep === category.title ? '#E1EBF9' : 'white' }
                check = { activeStep === category.title }

              />

            </div>

            <Progress i = { i } check = { activeStep === category.title }/>

          </div>

        )

      })}

    </div>
  )

}

export default Categories