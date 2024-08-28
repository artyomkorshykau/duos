import { BASE_URL } from '@/constants/urls.js'
import { getHeaders } from '@/service/headers.js'
import { postImage } from '@/service/image.js'

const expert = {
  
  async getExpert() {
    
    const response = await fetch( `${ BASE_URL }/expert`, {
      
      method: 'GET',
      headers: getHeaders()
      
    } )
    
    return await response.json()
    
  },
  
  async sendExpertDataStep1( isTemp, email ) {
    
    const profile = JSON.parse(localStorage.getItem('profile'))
    
    const body = {
      
      first_name: profile.firstName,
      mid_name: profile.surName,
      last_name: profile.lastName,
      pseudonym: profile.nickName,
      birthday: profile.birthDate.split('T')[0],
      gender: profile.gender,
      tax_status: profile.taxStatus,
      tax_name: profile.taxName || '',
      tax_inn: profile.taxIIN || '',
      country_id: profile.country.id,
      city_id: profile.city.id,
      email: email,
      is_temp: !!isTemp
      
    }
    
    try {
      
      const response = await fetch(`${BASE_URL}/expert/step1`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body)
        
      })
      
      if ( !response.ok ) {
        
        console.log(`Ошибка сервера (500)`)
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error(`Ошибка при отправке данных: ${error.message}`)
      
    }
    
  },

  async sendExpertDataStep3( isTemp ) {
    
    
    
    const school = JSON.parse(localStorage.getItem('school'))
    
    const body = {
    
    
    }
    
    try {
      
      const response = await fetch(`${BASE_URL}/expert/step3`, {
        
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body)
        
      })
      
      if ( !response.ok ) {
        
        console.log(`Ошибка сервера (500)`)
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error(`Ошибка при отправке данных: ${error.message}`)
      
    }
  
    },
  
  async sendExpertDataStep5( isTemp ) {
    
    const publications = JSON.parse(localStorage.getItem('publications'))
    
    const photo = await postImage(publications.categories[0].photos[0])
    
    const [
      
      _,
      about,
      mission,
      ethical_principle,
      personal_principles
      
    ] = publications.categories[0].profileInfo
    
    const articles = publications.categories[1].publicationsCards
    
    const body = {
      
      is_temp: !!isTemp,
      photo_url: photo.image_url,
      about: about.text,
      mission: mission.text,
      ethical_principles: ethical_principle.text,
      personal_principles: personal_principles.text,
      articles: articles
      
    }
    
    try {
      
      const response = await fetch(`${BASE_URL}/expert/step5`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body)
        
      })
      
      if ( !response.ok ) {
        
        console.log(`Ошибка сервера (500)`)
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error(`Ошибка при отправке данных: ${error.message}`)
      
    }
    
  }
  
}

export default expert

