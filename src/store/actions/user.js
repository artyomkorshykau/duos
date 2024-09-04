import auth from '@/service/auth.js'
import profile from '@/service/profile.js'

const userActions = {
  
  setUser: async( store ) => {
    
    try {
      
      const userData = await auth.checkToken()
      
      if ( userData && userData.success ) {
        
        const userInfo = await profile.getUserInfo()
        store.setState( { user: { ...userData.user, ...userInfo.user } } )
        
      } else {
        
        console.error( 'Ошибка проверки токена:', userData )
        
      }
      
    } catch ( error ) {
    
    
    }
    
  }
  
}

export default userActions