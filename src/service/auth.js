import { BASE_URL } from '@/constants/urls.js'
import { getHeaders } from '@/service/headers.js'
import { extractNumbers } from '@/scripts/helpers/extract.numbers.js'
import {
  profileStateInstance,
  schoolStateInstance,
  serviceStateInstance
} from '../../localforage.config.js'

const auth = {
  
  async register( phone, email, code ) {
    
    try {
      
      const response = await fetch( `${ BASE_URL }/sign-up`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify( { phone: extractNumbers( phone ), email, code } )
        
      } )
      
      if ( !response.ok ) {
        
        return await response.json()
        throw new Error( 'Что-то пошло не так' )
        
      }
      
      const data = await response.json()
      
      if ( data.token ) {
        
        document.cookie = `token=${ data.token }; path=/; secure;`
        
      }
      
      return data
      
    } catch ( error ) {
      
      console.error( 'Ошибка регистрации:', error.message )
      throw error
      
    }
    
  },
  
  async login( phone, password ) {
    
    const response = await fetch( `${ BASE_URL }/sign-in`, {
      
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify( { phone: extractNumbers( phone ), code: password } )
      
    } )
    
    const data = await response.json()
    
    if ( data.token ) {
      
      document.cookie = `token=${ data.token }; path=/; secure;`
      
    }
    
    return data
    
  },
  
  async logout() {
    
    await profileStateInstance.clear();
    await serviceStateInstance.clear();
    await schoolStateInstance.clear();
    
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure'
    
  },
  
  async recovery( phone ) {
    
    const response = await fetch( `${ BASE_URL }/forgot`, {
      
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify( { phone: extractNumbers( phone ) } )
      
    } )
    
    return await response.json()
    
  },
  
  async checkToken() {
    
    const response = await fetch( `${ BASE_URL }/sign/check`, {
      
      method: 'GET',
      headers: getHeaders()
      
    } )
    
    return await response.json()
    
  }
  
}

export default auth