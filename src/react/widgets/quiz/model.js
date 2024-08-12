import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuizProgress from '@/constants/quiz.progress'


export const useQuiz = ( { setStep } ) => {

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

  }

  return { buttonTitle, handleButtonAction, status, setStatus }
}