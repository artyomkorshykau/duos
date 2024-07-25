import QuizProgress from '@/constants/quiz.progress';

const quizActions = {

  setQuizStatus: (store) => {

    if (store.state.quiz.progress === QuizProgress.begin) {

      store.setState({ quiz: { progress: QuizProgress.continue} })

    } else if (store.state.quiz.progress === QuizProgress.continue ) {

      store.setState({ quiz: { progress: QuizProgress.end} })

    } else if (store.state.quiz.progress === QuizProgress.end ) {

      store.setState({ quiz: { progress: QuizProgress.begin} })

    }

  }

}

export default quizActions


