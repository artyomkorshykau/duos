import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { steps } from "@/constants/quiz.steps";
import QuizProgress from "@/constants/quiz.progress";
import s from '@/pages/questionnaire/questionnaire.module.scss'
import Profile from "@/react/widgets/steps/profile/ui/index.jsx";
import Services from "@/react/widgets/steps/services/ui/index.jsx";
import School from "@/react/widgets/steps/school/ui/index.jsx";
import Publications from "@/react/widgets/steps/publications/ui/index.jsx";
import Document from "@/react/widgets/steps/document/ui/index.jsx";
import useGlobal from "@/store";

export const useQuestionnaire = () => {

  const [ globalState, globalActions ] = useGlobal();

  const [ stepTriggered, setStepTriggered ] = useState(false);
  const [ title, setTitle ] = useState( 'Профиль' )
  const [ description, setDescription ] = useState( 'Эти данные станут частью вашего профиля и помогут продвижению' )

  const router = useRouter()

  let buttonTitle

  switch( globalState.quiz.progress ) {

    case QuizProgress.begin:
      buttonTitle = 'Начать'
      break

    case QuizProgress.continue:
      buttonTitle = 'Продолжить'
      break

    default:
      buttonTitle = 'На главную'

  }

  const handleButtonAction = () => {

    if ( globalState.data.profile?.temp && globalState.data.profile?.temp.length === 0 ) {

      globalActions.quiz.setStep(steps.profile);
      setTitle('Профиль')
      setDescription('Эти данные станут частью вашего профиля и помогут продвижению' )

    } else if (globalState.data.profile?.temp && globalState.data.services?.temp.length === 0) {

      globalActions.quiz.setStep(steps.service);
      setTitle('Услуги')
      setDescription('В каких направлениях и какие услуги вы готовы оказывать вашим будущим клиентам')  

    } else if (globalState.data.services?.temp && globalState.data.values?.temp.length === 0) {

      globalActions.quiz.setStep(steps.school);
      setTitle('Школа')
      setDescription('Если у вас нет собственной школы или курса переходите к следующему шагу')

    } else if (globalState.data.values?.temp && globalState.data.docs?.temp.length === 0) {

      globalActions.quiz.setStep(steps.documents);
      setTitle('Документы')
      setDescription('Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее')

    } else if (globalState.data.docs?.temp && globalState.data.publications?.temp.length === 0) {

      globalActions.quiz.setStep(steps.publications);
      setTitle('Публикации')
      setDescription('Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее')

    } else if (globalState.data.publications?.temp) {

      router.push('/')

    }

  }

  const nextStep = async () => {

    if( globalState.quiz.step === steps.profile ) {

      globalActions.quiz.setStep( steps.service )
      setTitle('Услуги')
      setDescription('В каких направлениях и какие услуги вы готовы оказывать вашим будущим клиентам')

    }

    if( globalState.quiz.step === steps.service ) {

      globalActions.quiz.setStep( steps.school )
      setTitle('Школа')
      setDescription('Если у вас нет собственной школы или курса переходите к следующему шагу')

    }

    if( globalState.quiz.step === steps.school ) {

      await globalActions.school.sendProfile()
      setStepTriggered(true)

    }

    if( globalState.quiz.step === steps.documents ) {

      globalActions.quiz.setStep( steps.publications )
      setTitle('Публикации')
      setDescription('Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее')

    }
    if( globalState.quiz.step === steps.publications ) {

      // setStatus(QuizProgress.end)
      globalActions.quiz.setStep( steps.questionnaire )

    }

    const scrollContainer = document.querySelector( `.${ s.content }` )

    if (scrollContainer) {

      scrollContainer.scrollTo({

        top: 0,
        behavior: 'smooth'

      })

    }

  }

  useEffect(() => {

    if (!globalState.school.errors && globalState.quiz.step === steps.school) {

      globalActions.quiz.setStep( steps.documents )
      setTitle('Документы')
      setDescription('Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее') 

      const scrollContainer = document.querySelector( `.${ s.content }` )

      if (scrollContainer) {

        scrollContainer.scrollTo({

          top: 0,
          behavior: 'smooth'

        })

      }
          
    } 

    setStepTriggered(false)

  }, [stepTriggered])

  const prevStep = () => {

    if ( globalState.quiz.step === steps.service ) {

      globalActions.quiz.setStep( steps.profile )
      setTitle('Профиль')
      setDescription('Эти данные станут частью вашего профиля и помогут продвижению')

    }

    if ( globalState.quiz.step === steps.school ) {

      globalActions.quiz.setStep( steps.service )
      setTitle('Услуги')
      setDescription('В каких направлениях и какие услуги вы готовы оказывать вашим будущим клиентам')

    }

    if ( globalState.quiz.step === steps.documents ) {

      globalActions.quiz.setStep( steps.school )
      setTitle('Школа')
      setDescription('Если у вас нет собственной школы или курса переходите к следующему шагу')

    }
    if ( globalState.quiz.step === steps.publications ) {

      globalActions.quiz.setStep( steps.documents )
      setTitle('Документы')
      setDescription('Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее')

    }

    window.scrollTo({

      top: 0,
      behavior: 'smooth'

    })

  }


  const quizContent = useMemo(() => {

    if ( globalState.quiz.step === steps.profile ) {

      return (

        <Profile />

      )

    }
    if ( globalState.quiz.step === steps.service ) {

      return (

        <Services />

      )

    }

    if ( globalState.quiz.step === steps.school ) {

      return (

        <School/>

      )

    }

    if ( globalState.quiz.step === steps.documents ) {

      return (

        <Document />

      )

    }

    if ( globalState.quiz.step === steps.publications ) {

      return (

        <Publications />

      )

    }

  }, [ globalState.quiz ])

  return {

    quizContent,
    nextStep,
    prevStep,
    buttonTitle,
    handleButtonAction,
    title,
    description

  }

}