import { BASE_URL } from '@/constants/urls.js'
import { getHeaders } from '@/service/headers.js'
import { extractNumbers } from '@/scripts/helpers/extract.numbers.js'
import { postImage } from '@/service/image.js'

const profile = {
  
  async editPhone( phone, code ) {
    
    try {
      const response = await fetch( `${ BASE_URL }/user/edit/phone`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify( {
          
          phone: +extractNumbers( phone ),
          code: +code
          
        } )
        
      } )
      
      if ( !response.ok ) {
        
        throw await response.json()
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( 'Error editing phone:', error )
      throw error
      
    }
    
  },
  
  async editAvatar( photo ) {
    
    const { image_url } = await postImage( photo )
    
    try {
      
      const response = await fetch( `${ BASE_URL }/user/edit/photo`, {
        
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify( { photo_url: image_url } )
        
      } )
      
      if ( !response.ok ) {
        
        throw await response.json()
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( 'Error editing phone:', error )
      throw error
      
    }
    
  },
  
  async editEmail( email, code ) {
    
    try {
      
      const response = await fetch( `${ BASE_URL }/user/edit/email`, {
        
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify( {
          
          email,
          code: +code
          
        } )
        
      } )
      
      if ( !response.ok ) {
        
        throw await response.json()
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( 'Error editing email:', error )
      throw error
      
    }
    
  },
  
  async editNotifies( body ) {
    
    try {
      
      const response = await fetch( `${ BASE_URL }/user/edit/notify`, {
        
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify( body )
        
      } )
      
      if ( !response.ok ) {
        
        throw await response.json()
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( 'Error editing notifies:', error )
      throw error
      
    }
    
  },
  
  async getUserInfo() {
    
    try {
      
      const response = await fetch( `${ BASE_URL }/user/edit`, {
        
        method: 'GET',
        headers: getHeaders()
        
      } )
      
      if ( !response.ok ) {
        
        throw await response.json()
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( 'Error fetching user:', error )
      throw error
      
    }
    
  },
  
  async editPseudonym( pseudonym ) {
    
    
    try {
      
      const response = await fetch( `${ BASE_URL }/user/edit/pseudonym`, {
        
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify( { pseudonym } )
        
      } )
      
      if ( !response.ok ) {
        
        throw await response.json()
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( 'Error editing pseudonym:', error )
      throw error
      
    }
    
  }
  
}

export default profile