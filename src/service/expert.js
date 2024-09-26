import { BASE_URL } from '@/constants/urls.js'
import { getHeaders } from '@/service/headers.js'
import { postImage } from '@/service/image.js'
import {
  profileStateInstance,
  publicationsStateInstance,
  schoolStateInstance,
  serviceStateInstance
} from '../../localforage.config.js'

const expert = {
  
  async getExpert() {
    
    try {
      
      const response = await fetch( `${ BASE_URL }/expert`, {
        
        method: 'GET',
        headers: getHeaders()
        
      } )
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( 'Error fetching data:', error )
      throw error
      
    }
    
  },
  
  async sendExpertDataStep1( isTemp, email ) {
    
    const profile = await profileStateInstance.getItem( 'profile' )
    
    const birthDate = new Date( profile.birthDate ).toISOString().split( 'T' )[ 0 ]
    
    const body = {
      
      first_name: profile.firstName,
      mid_name: profile.surName,
      last_name: profile.lastName,
      pseudonym: profile.nickName || '',
      birthday: birthDate,
      tax_name: profile.taxName || '',
      tax_inn: profile.taxIIN || '',
      country_id: profile.country.id,
      city_id: profile.city.id,
      email: email,
      is_temp: !!isTemp,
      ...( profile.gender && { gender: profile.gender } ),
      ...( profile.taxStatus && { tax_status: profile.taxStatus } )
      
    }
    
    try {
      
      
      const response = await fetch( `${ BASE_URL }/expert/step1`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify( body )
        
      } )
      
      if ( !response.ok ) {
        
        const { errors } = await response.json()
        throw errors
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      throw error
      
    }
    
  },
  
  async sendExpertDataStep2( isTemp ) {
    
    const service = await serviceStateInstance.getItem( 'service' )
    
    const {
      
      category,
      serviceCategories
      
    } = service
    
    const service_category_expert = await Promise.all(
      category.map( async( expert ) => {
        
        const educationCompletionDate = new Date( expert.educationCompletionDate ).toISOString().split( 'T' )[ 0 ]
        
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
              pay_format: service.paymentFormat,
              subscription_duration: service.dayWeekMonthYearList
              
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
          education_date: educationCompletionDate,
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
        
        const { errors } = await response.json()
        throw errors
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      throw error
      
    }
    
  },
  
  async sendExpertDataStep3( isTemp ) {
    
    
    const school = await schoolStateInstance.getItem( 'school' )
    
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
        
        throw new Error()
        
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
    } = await serviceStateInstance.getItem( 'service' )
    
    try {
      
      const passportPhoto = await postImage( passport.files )
      
      const categoryEducationImages = await Promise.all( category.map( async( cat ) => {
        
        const service_category = serviceCategories.find( ( category ) => category.value === cat.direction )
        
        try {
          
          const documentPhoto = await postImage( cat.certificatesFiles )
          
          return {
            
            service_category_expert_id: service_category?.id,
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
      
      const response = await fetch( `${ BASE_URL }/expert/step4`, {
        method: 'POST', headers: getHeaders(), body: JSON.stringify( body )
      } )
      
      if ( !response.ok ) {
        alert( '500: ( Internal Server Error )' )
        throw new Error()
      }
      
      return await response.json()
    } catch ( error ) {
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      throw error
    }
    
  },
  
  async sendExpertDataStep5( isTemp, articles ) {
    
    const publications = await publicationsStateInstance.getItem( 'publications' )
    
    const photo = await postImage( publications.categories[ 0 ].photos )
    
    const [
      
      _, about, mission, ethical_principle, personal_principles
    
    ] = publications.categories[ 0 ].profileInfo
    
    const newArticles = articles.map( ( article ) => ( {
      
      title: article.title,
      content: article.content,
      article_category_id: article.category.id,
      image_url: article.image_url,
      tags: article.tags,
      is_draft: article.is_draft,
      in_library: article.in_library
      
    } ) )
    
    const body = {
      
      is_temp: !!isTemp,
      photo_url: photo.image_url,
      about: about.text,
      mission: mission.text,
      ethical_principles: ethical_principle.text,
      personal_principles: personal_principles.text,
      articles: newArticles
      
    }
    
    try {
      
      const response = await fetch( `${ BASE_URL }/expert/step5`, {
        
        method: 'POST', headers: getHeaders(), body: JSON.stringify( body )
        
      } )
      
      if ( !response.ok ) {
        
        alert( '500: ( Internal Server Error )' )
        throw new Error()
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      throw error
      
    }
    
  },
  
  async createArticle( data ) {
    
    try {
      
      let image_url = ''
      
      if ( data.image_url ) {
        
        const result = await postImage( data.image_url )
        image_url = result.image_url
        
      }
      
      const response = await fetch( `${ BASE_URL }/article`, {
        
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify( { ...data, image_url } )
        
      } )
      
      if ( !response.ok ) {
        
        const errorData = await response.json()
        throw new Error( JSON.stringify( errorData ) )
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      throw error
      
    }
    
  },
  
  async articleList( expert_id ) {
    
    try {
      
      const response = await fetch( `${ BASE_URL }/article?expert_id=${ expert_id }`, {
        
        method: 'GET',
        headers: getHeaders()
        
      } )
      
      if ( !response.ok ) {
        
        console.log( `Ошибка сервера (500)` )
        throw new Error()
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      throw error
      
    }
    
  },
  
  async deleteArticle( article_id ) {
    
    try {
      
      const response = await fetch( `${ BASE_URL }/article/${ article_id }`, {
        
        method: 'DELETE',
        headers: getHeaders()
        
      } )
      
      if ( !response.ok ) {
        
        console.log( `Ошибка сервера (500)` )
        throw new Error()
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      throw error
      
    }
    
  },
  
  async editArticleById( article_id, data ) {
    try {
      let image_url = data.image_url
      
      const isBase64 = ( str ) => {
        const base64Pattern = /^data:image\/(png|jpeg|jpg);base64,[A-Za-z0-9+/=]+$/
        return base64Pattern.test( str )
      }
      
      if ( data.image_url && isBase64( data.image_url ) ) {
        const result = await postImage( data.image_url )
        image_url = result.image_url
      }
      
      const response = await fetch( `${ BASE_URL }/article/${ article_id }`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify( { ...data, image_url } )
      } )
      
      if ( !response.ok ) {
        console.log( 'Ошибка сервера (500)' )
        throw new Error()
      }
      
      return await response.json()
    } catch ( error ) {
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      throw error
    }
  }
  
}

export default expert

