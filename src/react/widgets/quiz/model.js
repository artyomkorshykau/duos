import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuizProgress from '@/constants/quiz.progress'


export const useQuiz = ( { setStep } ) => {

  const { push } = useRouter()

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
    if( status === QuizProgress.continue ) setStatus( QuizProgress.end )
    if( status === QuizProgress.end ) {

      setStatus( QuizProgress.begin )
      push( '/' )

    }

  }

  return { buttonTitle, handleButtonAction, status }
}