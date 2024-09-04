const serviceState = {
  
  category: [],
  passport: {
    
    status: 'NotFinished'
    
  }
  
}

const getInitialServiceState = () => {
  
  if ( typeof window !== 'undefined' ) {
    
    const storedServiceState = JSON.parse( localStorage.getItem( 'service' ) )
    
    if ( storedServiceState ) {
      
      return storedServiceState
      
    } else {
      
      localStorage.setItem( 'service', JSON.stringify( serviceState ) )
      
      return serviceState
      
    }
    
  }
  
  return serviceState
}

export default getInitialServiceState