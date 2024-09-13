const constructorActions = {
  
  setPublicationStatus( store, status ) {
    
    store.setState( { constructor: { ...store.state.constructor, status } } )
    
  },
  
  setCurrentArticle( store, currentArticle ) {
    
    store.setState( {
      
      constructor: {
        
        ...store.state.constructor,
        currentArticle
        
        }
        
      }
      
    )
    
  }
  
}

export default constructorActions