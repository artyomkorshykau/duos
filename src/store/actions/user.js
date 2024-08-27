import auth from '@/service/auth.js'

const userActions = {

  setUser: async( store ) => {
    
    try {
      const userData = await auth.checkToken()

      if ( userData && userData.success ) {

        store.setState( { profile: userData.user } )

      } else {

        console.error( 'Ошибка проверки токена:', userData )

      }

    } catch ( error ) {


    }

  }

}

export default userActions