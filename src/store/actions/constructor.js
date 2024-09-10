const constructorActions = {
  
  setPublicationStatus( store, status ) {
    
    store.setState( { constructor: { ...store.state.constructor, status } } )
    
  }
  
}

export default constructorActions