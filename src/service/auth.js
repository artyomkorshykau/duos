import { BASE_URL } from '@/constants/urls.js'
import { headers } from '@/service/headers.js'
import { extractNumbers } from '@/scripts/helpers/extract.numbers.js'
import { getCookie } from '@/scripts/helpers/get.token.js'

const auth = {

  async register( phone, email, code ) {

    const response = await fetch(`${BASE_URL}/sign-up`, {

      method: 'POST',
      headers: headers,
      body: JSON.stringify({ phone: extractNumbers(phone), email, code })

    })

    const data = await response.json();

    if ( data.token ) {

      document.cookie = `token=${data.token}; path=/; secure;`

    }

    return data

  },

  async login( phone, password ) {

    const response = await fetch(`${BASE_URL}/sign-in`, {

      method: 'POST',
      headers: headers,
      body: JSON.stringify({ phone: extractNumbers(phone), code: password })

    })

    const data = await response.json();

    if ( data.token ) {

      document.cookie = `token=${data.token}; path=/; secure;`

    }

    return data

  },

  async logout( ) {

    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure";

  },

  async recovery( phone ) {

    const response = await fetch(`${BASE_URL}/forgot`, {

      method: 'POST',
      headers: headers,
      body: JSON.stringify({ phone: extractNumbers(phone) })

    })

    return await response.json();

  },

  async checkToken() {

    const token = getCookie('token')

    const response = await fetch(`${BASE_URL}/sign/check`, {

      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }

    })

    return await response.json()

  }

}

export default auth