import { serviceStateInstance } from '../../../localforage.config.js'

const serviceState = {
  
  category: [
    
    {
      
      title: 'Направление №1',
      status: 'NotFinished',
      documentStatus: 'New',
      services: [
        
        {
          
          title: 'Услуга №1',
          status: 'New',
          documentStatus: 'New'
          
        }
      
      ]
      
    }
  
  ],
  passport: {
    
    status: 'NotFinished'
    
  }
  
}

const getInitialServiceState = async() => {
  
  try {
    
    const storedServiceState = await serviceStateInstance.getItem( 'service' )
    
    if ( storedServiceState ) {
      
      return storedServiceState
      
    } else {
      
      await serviceStateInstance.setItem( 'service', serviceState )
      return serviceState
      
    }
    
  } catch ( error ) {
    
    console.error( 'Error accessing service state:', error )
    return serviceState
    
  }
  
}

export default getInitialServiceState