import { BASE_URL } from '@/constants/urls.js'
import { getHeaders } from '@/service/headers.js'

const dictionary = {

  async getServiceCategories( limit, offset, service_category_id ) {

    const response = await fetch(`${BASE_URL}/dictionary/service_categories`, {

      method: 'GET',
      headers: getHeaders(),

    })
    
   return response.json()

  },

}

export default dictionary