import { useMemo } from 'react'
import ProgressBar from '@/react/widgets/progress.bar/ui'
import Pagination from '@/react/widgets/pagination/ui'
import Autosave from '@/react/widgets/autosave/ui'
import Carcas from '@/react/components/containers/carcas'
import { useQuestionnaire } from '@/react/widgets/steps/quiz/model.js'
import Quiz from '@/react/widgets/steps/quiz/ui/index.jsx'
import { steps } from '@/constants/quiz.steps'
import useGlobal from '@/store'
import s from './questionnaire.module.scss'

export default function QuestionnairePage() {

  const [ globalState, globalActions ] = useGlobal();

  const {

    prevStep,
    nextStep,
    buttonTitle,
    quizContent,
    handleButtonAction,
    title,
    description

  } = useQuestionnaire()

  const content = useMemo(() => (

    <>
      
      { globalState.quiz.isLoading === true &&
      
        ( globalState.quiz.step === steps.questionnaire

          ? <Quiz

              buttonTitle = { buttonTitle }
              handleButtonAction = { handleButtonAction }
              status = { globalState.quiz.progress }

            />

          : <div className = { `${ s.content }` }>

            <ProgressBar

              title = { title }
              description = { description }
              activeStep = { globalState.quiz.step }

            />

            { quizContent }

            <Autosave/>

            <Pagination

              nextStep = { nextStep }
              activeStep = { globalState.quiz.step }
              prevStep = { prevStep }

            />

            </div>

        )

      }

    </>

  ), [ globalState.quiz ] )

  return (

    <main id = {``} className = {`${ globalState.quiz.step === steps.questionnaire && 'flex items-center h-dvh' }`}>

      <Carcas

        authorized = { true }

      >

        { content }

      </Carcas>

    </main>

  );

}
