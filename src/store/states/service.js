const serviceState = {
  
  category: [
    
    {
      
      title: "Направление №1",
      status: "NotFinished",
      documentStatus: "New",
      services: [
        
        {
          
          title: "Услуга №1",
          status: "New",
          documentStatus: "New",
          
        }
      
      ]
      
    },
    
  ],
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
      
      console.log(serviceState)
      
      localStorage.setItem( 'service', JSON.stringify( serviceState ) )
      
      return serviceState
      
    }
    
  }
  
  return serviceState
}

export default getInitialServiceState