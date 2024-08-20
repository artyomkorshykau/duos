import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { steps } from "@/constants/quiz.steps";
import QuizProgress from "@/constants/quiz.progress";
import Profile from "@/react/widgets/profile/ui";
import Services from "@/react/widgets/services/ui";
import School from "@/react/widgets/school/ui";
import Document from "@/react/widgets/document/ui";
import Publications from "@/react/widgets/publications/ui";
import s from '@/pages/questionnaire/questionnaire.module.scss'
import useGlobal from "@/store";


export const useQuestionnaire = () => {

  const [ globalState, globalActions ] = useGlobal();

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

    if ( globalState.data.profile.temp.length === 0 ) {

      globalActions.quiz.setStep(steps.profile);

    } else if (globalState.data.profile.temp && globalState.data.services.temp.length === 0) {

      globalActions.quiz.setStep(steps.service);

    } else if (globalState.data.services.temp && globalState.data.values.temp.length === 0) {

      globalActions.quiz.setStep(steps.school);

    } else if (globalState.data.values.temp && globalState.data.docs.temp.length === 0) {

      globalActions.quiz.setStep(steps.documents);

    } else if (globalState.data.docs.temp && globalState.data.publications.temp.length === 0) {

      globalActions.quiz.setStep(steps.publications);

    } else if (globalState.data.publications.temp) {

      router.push('/')

    }

  }

  const nextStep = () => {

    if( globalState.quiz.step === steps.profile ) {

      globalActions.profile.sendProfile()
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

      globalActions.quiz.setStep( steps.documents )
      setTitle('Документы')
      setDescription('Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее')

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