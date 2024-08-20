import { steps } from "@/constants/quiz.steps";
import QuizProgress from "@/constants/quiz.progress";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import s from '@/pages/questionnaire/questionnaire.module.scss'
import Profile from "@/react/widgets/steps/profile/ui/index.jsx";
import Services from "@/react/widgets/steps/services/ui/index.jsx";
import School from "@/react/widgets/steps/school/ui/index.jsx";
import Publications from "@/react/widgets/steps/publications/ui/index.jsx";
import Document from "@/react/widgets/steps/document/ui/index.jsx";
export const useQuestionnaire = () => {

  const [ step, setStep ] = useState( steps.questionnaire )
  const [ title, setTitle ] = useState( 'Профиль' )
  const [ description, setDescription ] = useState( 'Эти данные станут частью вашего профиля и помогут продвижению' )

  const router = useRouter()

  const [ status, setStatus ] = useState( QuizProgress.begin )

  let buttonTitle

  switch( status ) {

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

    if( status === QuizProgress.begin ) setStep( "Профиль" )
    if( status === QuizProgress.end ) {

      router.push('/')

    }

  }

  const nextStep = () => {

    if( step === steps.profile ) {

      setStep( steps.service )
      setTitle('Услуги')
      setDescription('В каких направлениях и какие услуги вы готовы оказывать вашим будущим клиентам')


    }

    if( step === steps.service ) {

      setStep( steps.school )
      setTitle('Школа')
      setDescription('Если у вас нет собственной школы или курса переходите к следующему шагу')

    }

    if( step === steps.school ) {

      setStep( steps.documents )
      setTitle('Документы')
      setDescription('Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее')

    }

    if( step === steps.documents ) {

      setStep( steps.publications )
      setTitle('Публикации')
      setDescription('Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее')

    }
    if( step === steps.publications ) {

      setStatus(QuizProgress.end)
      setStep( steps.questionnaire )

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

    if( step === steps.service ) {

      setStep( steps.profile )
      setTitle('Профиль')
      setDescription('Эти данные станут частью вашего профиля и помогут продвижению')

    }

    if( step === steps.school ) {

      setStep( steps.service )
      setTitle('Услуги')
      setDescription('В каких направлениях и какие услуги вы готовы оказывать вашим будущим клиентам')

    }

    if( step === steps.documents ) {

      setStep( steps.school )
      setTitle('Школа')
      setDescription('Если у вас нет собственной школы или курса переходите к следующему шагу')

    }
    if( step === steps.publications ) {

      setStep( steps.documents )
      setTitle('Документы')
      setDescription('Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее')

    }

    window.scrollTo({

      top: 0,
      behavior: 'smooth'

    })

  }

  const quizContent = useMemo(() => {

    if ( step === steps.profile ) {

      return (

        <Profile />

      )

    }
    if ( step === steps.service ) {

      return (

        <Services />

      )

    }

    if ( step === steps.school ) {

      return (

        <School/>

      )

    }

    if ( step === steps.documents ) {

      return (

        <Document />

      )

    }

    if ( step === steps.publications ) {

      return (

        <Publications />

      )

    }

  }, [ step ])

  return {

    quizContent,
    nextStep,
    prevStep,
    buttonTitle,
    handleButtonAction,
    status,
    step,
    title,
    description

  }

}