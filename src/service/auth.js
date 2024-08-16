import { instance } from "@/service/axios";

class auth {

  async register( phone, email, code ) {

    const validatePhone = phone.replace( /\D/g, '' )
    const response = await fetch('http://194.58.94.203/v1/sign-up', {

      method: 'POST',
      headers: {

        Authorization: `6|bGcpuCRa9C11dVqd9qV5wxY28WrjsmTlOrPnyhekdc0cb1e5`,
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ phone: validatePhone, email, code })

    })

    return await response.json();

  }

  login( phone, password ) {

    const validatePhone = phone.replace( /\D/g, '' );

    return instance.post( `/sign-in`, { phone: validatePhone, code: password } )

  }

  getExpertsList() {

    return instance.get( '/admin/experts' )

  }

  getUserList() {

    return instance.get( '/admin/user' )

  }

}

export default new auth()