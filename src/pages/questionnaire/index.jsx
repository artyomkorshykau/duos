import ProgressBar from '@/react/widgets/progress.bar/ui';
import Pagination from '@/react/widgets/pagination/ui';
import Autosave from '@/react/widgets/autosave/ui';
import Carcas from '@/react/components/containers/carcas';
import { steps } from "@/constants/quiz.steps";
import { useMemo } from "react";
import s from './questionnaire.module.scss'
import { useQuestionnaire } from "@/react/widgets/steps/quiz/model.js";
import Quiz from "@/react/widgets/steps/quiz/ui/index.jsx";

export default function ProfilePage() {

  const {

    status,
    prevStep,
    nextStep,
    buttonTitle,
    quizContent,
    handleButtonAction,
    step,
    title,
    description

  } = useQuestionnaire()

  const content = useMemo(() => (

    <>

      { step === steps.questionnaire

        ? <Quiz

          buttonTitle = { buttonTitle }
          handleButtonAction = { handleButtonAction }
          status = { status }

        />
        : <div className = { `${ s.content }` }>

          <ProgressBar

            title = { title }
            description = { description }
            activeStep = { step }

          />

          { quizContent }

          <Autosave/>
          <Pagination

            nextStep = { nextStep }
            activeStep = { step }
            prevStep = { prevStep }

          />

        </div>

      }

    </>

  ), [ step ] )

  return (

    <main id = {``} className = {`${ step === steps.questionnaire && 'flex items-center h-dvh' }`}>

      <Carcas

        authorized = { true }

      >

        { content }

      </Carcas>

    </main>

  );

}