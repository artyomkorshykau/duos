import { BASE_URL } from '@/constants/urls.js'
import { getHeaders } from '@/service/headers.js'

const tagsService = {
  
  async getTagList() {
    
    try {
      
      const response = await fetch( `${ BASE_URL }/tag`, {
        
        method: 'GET',
        headers: getHeaders()
        
      } )
      
      if ( !response.ok ) {
        
        throw await response.json()
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( 'Error fetching tags:', error )
      throw error
      
    }
    
  },

}

export default tagsService