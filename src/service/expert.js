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
    
    const profile = JSON.parse( localStorage.getItem( 'profile' ) )
    
    const body = {
      
      first_name: profile.firstName,
      mid_name: profile.surName,
      last_name: profile.lastName,
      pseudonym: profile.nickName,
      birthday: profile.birthDate.split( 'T' )[ 0 ],
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
      
      const response = await fetch( `${ BASE_URL }/expert/step1`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify( body )
        
      } )
      
      if ( !response.ok ) {
        
        console.log( `Ошибка сервера (500)` )
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      throw error
      
    }
    
  },
  
  async sendExpertDataStep2( isTemp ) {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) )
    
    const {
      
      category,
      serviceCategories
      
    } = service
    
    const service_category_expert = await Promise.all(
      category.map( async( expert ) => {
        
        const service_category_id = serviceCategories.find( ( category ) => category.value === expert.direction )
        
        const servicesWithPhotos = await Promise.all(
          expert.services.map( async( service ) => {
            
            const photo = await postImage( service.files )
            
            return {
              
              service_category_id: service_category_id.id,
              title: service.title,
              description: service.meaningService,
              price: +service?.price || '',
              price_from: +service?.before || '',
              image_url: photo.image_url,
              format: service.deliveryFormat,
              duration: service.duration,
              duration_type: service.minuteHoursDays,
              pay_format: service.paymentFormat
              //subscription_duration
              
            }
            
          } )
        )
        
        return {
          
          service_category_id: service_category_id.id,
          title: expert.direction,
          experience: expert.directionWorkExperience,
          education_grade: expert.education,
          education_organization: expert.educationOrganizationName,
          education_name: expert.educationCourseName,
          teacher_name: expert.educationCourseAuthor,
          education_days: expert.educationDuration,
          education_date: expert.educationCompletionDate.split( 'T' )[ 0 ],
          services: servicesWithPhotos
          
        }
        
      } )
    )
    
    const body = {
      
      is_temp: !!isTemp,
      service_category_expert
      
    }
    
    try {
      
      const response = await fetch( `${ BASE_URL }/expert/step2`, {
        
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify( body )
        
      } )
      
      if ( !response.ok ) {
        
        console.log( `Ошибка сервера (500)` )
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      throw error
      
    }
    
  },
  
  async sendExpertDataStep3( isTemp ) {
    
    
    const school = JSON.parse( localStorage.getItem( 'school' ) )
    
    const body = {
      
      name: school.schoolName,
      comment: school.comment,
      expert_course: school.courses,
      isTemp: isTemp
      
    }
    
    try {
      
      const response = await fetch( `${ BASE_URL }/expert/step3`, {
        
        method: 'POST', headers: getHeaders(), body: JSON.stringify( body )
        
      } )
      
      if ( !response.ok ) {
        
        console.log( `Ошибка сервера (500)` )
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      throw error
      
    }
    
  },
  
  async sendExpertDataStep4( isTemp ) {
    
    const {
      category,
      passport,
      serviceCategories
    } = JSON.parse( localStorage.getItem( 'service' ) )
    
    try {
      
      const passportPhoto = await postImage( passport.files )
      
      const categoryEducationImages = await Promise.all( category.map( async( cat ) => {
        
        const service_category = serviceCategories.find( ( category ) => category.value === cat.direction )
        
        try {
          
          const documentPhoto = await postImage( cat.certificatesFiles )
          
          return {
            
            service_category_expert_id: service_category.id,
            document_image_url: documentPhoto.image_url
            
          }
          
        } catch ( error ) {
          
          console.error( `Ошибка при загрузке сертификата для категории ${ service_category.id }: ${ error.message }` )
          throw error
          
        }
        
      } ) )
      
      const expertConfirmContacts = category.flatMap( cat => {
        
        const service_category = serviceCategories.find( ( category ) => category.value === cat.direction )
        
        return cat.services.map( service => {
          
          let communicationMethod = ''
          
          if ( service.communication === 'Telegram' ) {
            
            communicationMethod = 'telegram'
            
          } else if ( service.communication === 'WhatsApp' ) {
            
            communicationMethod = 'whatsapp'
            
          } else if ( service.communication === 'По номеру' ) {
            
            communicationMethod = 'phone'
            
          }
          
          return {
            
            name: service.clientFullName,
            phone: service.phone,
            communication_method: communicationMethod,
            service_id: service_category.id
            
          }
          
        } )
        
      } )
      
      const expertReviews = await Promise.all( category.flatMap( ( cat ) =>
        
        cat.services.map( async( service ) => {
          
          const service_category = serviceCategories.find( ( category ) => category.value === cat.direction )
          
          try {
            
            const imageIdResponse = await postImage( service.reviewsFiles[ 0 ] )
            
            return {
              
              image_id: imageIdResponse.image_id,
              service_id: service_category.id
              
            }
            
          } catch ( error ) {
            
            console.error( `Ошибка при загрузке изображения для service_id ${ service.id }: ${ error.message }` )
            throw error
            
          }
          
        } ) ) )
      
      const body = {
        
        passport_photo_url: passportPhoto.image_url,
        is_temp: isTemp,
        category_education_image: categoryEducationImages,
        expert_confirm_contacts: expertConfirmContacts,
        expert_reviews: expertReviews
        
      }
      
      console.log( 'Sending data to server...', body )
      
      const response = await fetch( `${ BASE_URL }/expert/step4`, {
        method: 'POST', headers: getHeaders(), body: JSON.stringify( body )
      } )
      
      if ( !response.ok ) {
        console.log( `Ошибка сервера (${ response.status })` )
      }
      
      return await response.json()
    } catch ( error ) {
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      throw error
    }
    
  },
  
  async sendExpertDataStep5( isTemp ) {
    
    const publications = JSON.parse( localStorage.getItem( 'publications' ) )
    
    const photo = await postImage( publications.categories[ 0 ].photos[ 0 ] )
    
    const [
      
      _, about, mission, ethical_principle, personal_principles
    
    ] = publications.categories[ 0 ].profileInfo
    
    const articles = publications.categories[ 1 ].publicationsCards
    
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
      
      const response = await fetch( `${ BASE_URL }/expert/step5`, {
        method: 'POST', headers: getHeaders(), body: JSON.stringify( body )
        
      } )
      
      if ( !response.ok ) {
        
        console.log( `Ошибка сервера (500)` )
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      throw error
      
    }
    
  }
  
}

export default expert

