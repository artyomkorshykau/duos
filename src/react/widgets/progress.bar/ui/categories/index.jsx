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

  const { service } = globalState

  useEffect(() => {

    const active = QuizSteps.find((el) => el.title === activeStep)
    
    setActiveId(active.id)

  }, [activeStep])

  return (

    <div className = {`${ s.progressBar__steps }`}>

      { QuizSteps.map((category, i) => {

        const serviceActive = activeStep === "Услуги" && service.progress === 1
        let fill = (activeStep === category.title && serviceActive) || (category.id < activeId) ? '#18009E' : activeStep === category.title ? '#E1EBF9' : '#FFFFFF'
        let stroke = (activeStep === category.title && serviceActive) || (category.id < activeId) ? '#FFFFFF' : activeStep === category.title ? '#18009E' : '#FFFFFF'
        return (

          <div className = {`relative ${ s.progressBar__steps__item }`} key = {category.id}>

            <p className = {`text-16 ${ s.progressBar__steps__item__title } ${ cssIf( activeStep === category.title, s.progressBar__steps__item__title__active ) }`}>

              { category.title }

            </p>

            <div className = {`${ s.progressBar__steps__item__icon }`}>

              <NotiseSuccess

                fill = { fill }
                stroke = { stroke }

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