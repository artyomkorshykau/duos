import { BASE_URL } from '@/constants/urls.js'
import { getHeaders } from '@/service/headers.js'
import { postImage } from '@/service/image.js'

const expert = {
  
  async getExpert() {
    
    const response = await fetch( `${ BASE_URL }/expert`, {
      
      method: 'GET', headers: getHeaders()
      
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
        method: 'POST', headers: getHeaders(), body: JSON.stringify( body )
        
      } )
      
      if ( !response.ok ) {
        
        console.log( `Ошибка сервера (500)` )
        
      }
      
      return await response.json()
      
    } catch ( error ) {
      
      console.error( `Ошибка при отправке данных: ${ error.message }` )
      
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
      
    }
    
  },
  
  async sendExpertDataStep4( isTemp ) {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) )
    
    try {
      
      const passportPhoto = await postImage( service.passport.files )
      
      const categoryEducationImages = await Promise.all( service.category.map( async( category ) => {
        
        try {
          
          const documentPhoto = await postImage( category.certificatesFiles )
          
          return {
            
            service_category_expert_id: category.id,
            document_image_url: documentPhoto.image_url
            
          }
          
        } catch ( error ) {
          
          console.error( `Ошибка при загрузке сертификата для категории ${ category.id }: ${ error.message }` )
          
          throw error
          
        }
        
      } ) )
      
      const expertConfirmContacts = category.flatMap( cat =>
        
        cat.services.map( service => ( {
          
          name: service.clientFullName,
          phone: service.phone,
          communication_method: service.communication,
          service_id: service.id
          
        } ) ) )
      
      const expertReviews = await Promise.all( service.category.flatMap( ( cat ) =>
        
        cat.services.map( async( service ) => {
          
          try {
            
            const imageIdResponse = await postImage( service.reviewsFiles[ 0 ] )
            
            return {
              
              image_id: imageIdResponse.image_id, service_id: service.id
              
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
      
    }
    
  }
  
  
}

export default expert


const category = [ {
  'id': 'e26e3922-5d61-11ef-92d1-a343d9a361ea',
  'title': 'Психология',
  'status': 'Filled',
  'documentStatus': 'Filled',
  'services': [ {
    'id': 'e26e3924-5d61-11ef-92d1-a343d9a361ea',
    'title': 'Прием у психотерапевта',
    'status': 'Filled',
    'documentStatus': 'Filled',
    'files': '',
    'serviceType': '1',
    'deliveryFormat': 'Video',
    'duration': '1',
    'minuteHoursDays': 'minute',
    'paymentFormat': 'Fixed',
    'price': '1',
    'meaningService': '1',
    'clientFullName': '4',
    'communication': 'Telegram',
    'phone': '1',
    'reviewsFiles': [ '' ]
  } ],
  'direction': 'Наука',
  'directionWorkExperience': '1',
  'education': '1',
  'educationOrganizationName': '1',
  'educationCourseName': '1',
  'educationCourseAuthor': '3',
  'educationDuration': '1',
  'educationCompletionDate': '2024-08-01T09:36:15.000Z',
  'certificatesFiles': ''
}, {
  'id': '583c8230-65f8-11ef-a883-e93974cf76ce',
  'title': 'Направление №2',
  'services': [ {
    'id': '583c8231-65f8-11ef-a883-e93974cf76ce',
    'title': 'Услуга №1',
    'status': 'Filled',
    'documentStatus': 'Filled',
    'files': '',
    'serviceType': '1',
    'deliveryFormat': 'Video',
    'duration': '1',
    'minuteHoursDays': 'minute',
    'paymentFormat': 'Subscription',
    'price': '1',
    'meaningService': '1',
    'clientFullName': '1',
    'communication': 'Telegram',
    'phone': '1',
    'reviewsFiles': [ '' ]
  } ],
  'status': 'Filled',
  'documentStatus': 'Filled',
  'direction': 'Психология',
  'directionWorkExperience': '2',
  'education': '1',
  'educationOrganizationName': '1',
  'educationCourseName': '1',
  'educationCourseAuthor': '1',
  'educationDuration': '1',
  'educationCompletionDate': '2024-08-09T11:17:57.000Z',
  'certificatesFiles': ''
} ]