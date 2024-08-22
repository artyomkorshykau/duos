import { BASE_URL } from "@/constants/urls.js";
import { headers } from "@/service/headers.js";

const locations = {

  async getCountries( limit, offset ) {

    const response = await fetch(`${BASE_URL}/dictionary/countries`, {

      method: 'GET',
      headers: headers,

    })

   return response.json()

  },

  async getCities( countryId,  limit, offset ) {

    const response = await fetch(`${BASE_URL}/dictionary/cities?country_id=${ countryId }`, {

      method: 'GET',
      headers: headers,

    })

    return response.json()

  }

}

export default locations