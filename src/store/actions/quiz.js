
const quizActions = {
  
  setQuizStatus: ( store, status ) => {
    
    store.setState( { quiz: { ...store.state.quiz, progress: status } } )
    
  },
  
  setStep: ( store, step ) => {
    
    store.setState( { quiz: { ...store.state.quiz, step } } )
    
  },
  
  setContinueStep: ( store, step ) => {
    
    store.setState( { quiz: { ...store.state.quiz, continueStep: step } } )
    
  },
  
  setStepsProgress: ( store, stepsProgress ) => {
    
    store.setState( { quiz: { ...store.state.quiz, stepsProgress } } )
    
  }
  
}

export default quizActions


