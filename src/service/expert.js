import { BASE_URL } from '@/constants/urls.js'
import { getHeaders } from '@/service/headers.js'
import { format } from 'date-fns'
import { postImage } from '@/service/image.js'

const expert = {
  
  async getExpert() {
    
    const response = await fetch( `${ BASE_URL }/expert`, {
      
      method: 'GET',
      headers: getHeaders()
      
    } )
    
    return await response.json()
    
  },
  
  async sendExpertDataStep1( profile ) {
    
    const updatedProfile = {
      first_name: profile.firstName,
      mid_name: profile.surName,
      last_name: profile.lastName,
      birthday: profile.birthDate && format( new Date( profile.birthDate ), 'yyyy-MM-dd' ),
      gender: profile.gender,
      pseudonym: profile.nickName,
      tax_status: profile.taxStatus,
      tax_name: profile.taxName,
      tax_inn: profile.taxIIN,
      country_id: profile.country?.id,
      city_id: profile.city?.id,
      email: profile.email,
      is_temp: true
      
    }
    
    if ( profile.phoneNumber ) {
      updatedProfile.phone = parseInt( profile.phoneNumber.toString().replace( /\D/g, '' ) )
    }
    
    const response = await fetch( `${ BASE_URL }/expert/step1`, {
      
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify( updatedProfile )
      
    } )
    
    return await response.json()
    
  },

    async sendExpertDataStep3(school) {
       
        const updatedProfile = {

            name: school.schoolName,
            comment: school.comment,
            is_temp: 1,

          }

          if (school.courses) {

            const filteredCourses = school.courses
              .filter((item) => item.name !== '' && item.name !== undefined)
              .map((item) => ({
                name: item.name,
              }));

              if (filteredCourses.length > 0) {
                updatedProfile.expert_course = filteredCourses;
              }

          }
  
      const response = await fetch(`${BASE_URL}/expert/step3`, {
  
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(updatedProfile)
  
      })
  
    return await response.json()
  
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

