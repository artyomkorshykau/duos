const progressSteps = {
  
  profileIsDone: false,
  serviceIsDone: false,
  schoolIsDone: false,
  documentsIsDone: false,
  publicationsIsDone: false
  
}

const getInitialProgressState = () => {
  
  if ( typeof window !== 'undefined' ) {
    
    const storedProgressStepsState = JSON.parse( localStorage.getItem( 'progressSteps' ) )
    
    if ( storedProgressStepsState ) {
      
      return storedProgressStepsState
      
    } else {
      
      localStorage.setItem( 'progressSteps', JSON.stringify( progressSteps ) )
      
      return progressSteps
      
    }
    
  }
  
  return progressSteps
}

export default getInitialProgressState