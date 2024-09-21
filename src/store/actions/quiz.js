export const setQuizStatus = ( store, status ) => {
  
  store.setState( { quiz: { ...store.state.quiz, progress: status } } )
  
}

export const setStep = ( store, step ) => {
  
  store.setState( { quiz: { ...store.state.quiz, step } } )
  
}

export const setContinueStep = ( store, step ) => {
  
  store.setState( { quiz: { ...store.state.quiz, continueStep: step } } )
  
}

export const setStepsProgress = ( store, stepsProgress ) => {
  
  store.setState( { quiz: { ...store.state.quiz, stepsProgress } } )
  
}



