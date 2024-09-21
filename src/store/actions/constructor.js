import { constructorStateInstance } from '../../../localforage.config.js'


export const setPublicationStatus = ( store, status ) => {
  store.setState( { constructor: { ...store.state.constructor, status } } )
}

export const setCurrentArticle = async( store, currentArticle ) => {
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
}

export const removeCurrentArticle = async( store ) => {
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
}

export const setConstructor = async( store, newConstructor ) => {
  try {
    const constructor = await constructorStateInstance.getItem( 'constructor' ) || {}
    
    const updatedConstructor = { ...constructor, ...newConstructor }
    
    await constructorStateInstance.setItem( 'constructor', updatedConstructor )
    
    store.setState( { constructor: updatedConstructor } )
  } catch ( error ) {
    console.error( 'Error setting constructor:', error )
  }
}


