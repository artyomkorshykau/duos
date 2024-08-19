import auth from "@/service/auth.js";

const userActions = {

  setUser: async( store ) => {

    try {
      const userData = await auth.checkToken()

      if ( userData && userData.success ) {

        store.setState( { user: userData.user } )

      } else {

        console.error( 'Ошибка проверки токена:', userData.message )

      }

    } catch ( error ) {

      console.error( 'Ошибка сети или сервера:', error )

    }

  }

}

export default userActions