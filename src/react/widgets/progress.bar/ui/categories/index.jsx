import s from '../progress.bar.module.scss'
import useGlobal from '@/store';
import NotiseSuccess from '@/react/components/icons/notise.success';
import QuizSteps from '@/constants/quiz.steps';
import cssIf from '@/scripts/helpers/css.if'
import Progress from '../progress';
import { useEffect, useState } from 'react';

const Categories = ( props ) => {

  const {

    activeStep

  } = props

  const [ globalState ] = useGlobal()
  const [activeId, setActiveId] = useState()

  useEffect(() => {

    const active = QuizSteps.find((el) => el.title === activeStep)
    
    setActiveId(active.id)

  }, [activeStep])

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

                fill = { activeStep === category.title ? '#E1EBF9' :
                  category.id < activeId ? '#18009E' : 'white' }
                check = { activeStep === category.title }
                stroke = { category.id < activeId ? '#FFFFFF' : '#18009E' }
                checkStroke = { category.id < activeId }

              />

            </div>

            <Progress id = { category.id } check = { activeStep === category.title } activeId = {activeId}/>

          </div>

        )

      })}

    </div>
  )

}

export default Categories