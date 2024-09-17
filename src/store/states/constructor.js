import { constructorStateInstance } from '../../../localforage.config.js'

const constructor = {
  
  tabs: [
    
    { id: 0, title: 'Публикации', content: '12' },
    { id: 1, title: 'Услуги', content: '12' },
    { id: 2, title: 'Профиль', content: '12' }
  ],
  
  status: 'New',
  currentArticle: null
  
}


const getInitialConstructorState = async() => {
  
  try {
    
    const storedConstructorState = await constructorStateInstance.getItem( 'constructor' )
    
    if ( storedConstructorState ) {
      
      return storedConstructorState
      
    } else {
      
      await constructorStateInstance.setItem( 'constructor', constructor )
      return constructor
      
    }
    
  } catch ( error ) {
    
    console.error( 'Error accessing constructor state:', error )
    return constructor
    
  }
  
}

export default getInitialConstructorState
