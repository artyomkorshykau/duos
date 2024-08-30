import QuizProgress from '@/constants/quiz.progress'
import { steps } from '@/constants/quiz.steps'

const quizState = {

  progress: QuizProgress.begin,
  step: steps.questionnaire,
  continueStep: null,
  isLoading: false

}

export default quizState