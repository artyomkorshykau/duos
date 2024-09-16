const constructorActions = {
  
  setPublicationStatus( store, status ) {
    
    store.setState( { constructor: { ...store.state.constructor, status } } )
    
  },
  
  setCurrentArticle( store, currentArticle ) {
    
    const constructor = JSON.parse( localStorage.getItem( 'constructor' ) )
    
    localStorage.setItem( 'constructor', JSON.stringify( {
      
      ...constructor,
      currentArticle
      
    } ) )
    
    store.setState( {
        
        constructor: {
          
          ...store.state.constructor,
          currentArticle
          
        }
        
      }
    )
    
  },
  removeCurrentArticle( store ) {
    
    const constructor = JSON.parse( localStorage.getItem( 'constructor' ) )
    
    localStorage.setItem( 'constructor', JSON.stringify( {
      
      ...constructor,
      currentArticle: null
      
    } ) )
    
    store.setState( {
        
        constructor: {
          
          ...store.state.constructor,
          currentArticle: null
          
        }
        
      }
    )
    
  }
  
  
}

export default constructorActions