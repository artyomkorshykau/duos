import { constructorStateInstance } from '../../../localforage.config.js'

const constructorActions = {
  
  setPublicationStatus: ( store, status ) => {
    // Update only the status in the constructor state
    store.setState( { constructor: { ...store.state.constructor, status } } )
  },
  
  setCurrentArticle: async( store, currentArticle ) => {
    try {
      const constructor = await constructorStateInstance.getItem( 'constructor' ) || {}
      
      const updatedConstructor = {
        ...constructor,
        currentArticle
      }
      
      await constructorStateInstance.setItem( 'constructor', updatedConstructor )
      
      store.setState( {
        constructor: {
          ...store.state.constructor,
          currentArticle
        }
      } )
    } catch ( error ) {
      console.error( 'Error setting current article:', error )
    }
  },
  
  removeCurrentArticle: async( store ) => {
    try {
      const constructor = await constructorStateInstance.getItem( 'constructor' ) || {}
      
      const updatedConstructor = {
        ...constructor,
        currentArticle: null
      }
      
      await constructorStateInstance.setItem( 'constructor', updatedConstructor )
      
      store.setState( {
        constructor: {
          ...store.state.constructor,
          currentArticle: null
        }
      } )
    } catch ( error ) {
      console.error( 'Error removing current article:', error )
    }
  },
  
  setConstructor: async( store, newConstructor ) => {
    try {
      const constructor = await constructorStateInstance.getItem( 'constructor' ) || {}
      
      const updatedConstructor = { ...constructor, ...newConstructor }
      
      await constructorStateInstance.setItem( 'constructor', updatedConstructor )
      
      store.setState( { constructor: updatedConstructor } )
    } catch ( error ) {
      console.error( 'Error setting constructor:', error )
    }
  }
}

export default constructorActions
