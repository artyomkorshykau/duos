import auth from '@/service/auth.js'
import profile from '@/service/profile.js'


export const setUser = async( store ) => {
  
  try {
    
    const userData = await auth.checkToken()
    
    if ( userData && userData.success ) {
      
      const userInfo = await profile.getUserInfo()
      store.setState( { user: { ...userData.user, ...userInfo.user } } )
      store.actions.updateRender()
      
    } else {
      
      console.error( 'Ошибка проверки токена:', userData )
      
    }
    
  } catch ( error ) {
  
  
  }
  
}
  