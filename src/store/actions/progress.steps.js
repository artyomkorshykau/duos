const progressStepsActions = {
  
  setProfileIsDone( store, isDone ) {
    
    const progressSteps = JSON.parse( localStorage.getItem( 'progressSteps' ) )
    
    localStorage.setItem( 'progressSteps', JSON.stringify( {
      ...progressSteps,
      profileIsDone: isDone
    } ) )
    store.setState( {
      progressSteps: {
        ...store.state.progressSteps,
        profileIsDone: isDone
      }
    } )
    
  }
  
}

export default progressStepsActions