import dictionary from '@/service/dictionary'
import { serviceStateInstance } from '../../../localforage.config.js'

function flattenCategories( categories ) {
  let result = []
  
  categories.forEach( category => {
    result.push( {
      id: category.id,
      value: category.name,
      label: category.name
    } )
    
    if ( category.children_categories && category.children_categories.length > 0 ) {
      result = result.concat( flattenCategories( category.children_categories ) )
    }
  } )
  
  return result
}

const serviceActions = {
  
  getServiceCategories: async( store ) => {
    try {
      const dataServiceCategories = await dictionary.getServiceCategories( null, null, null )
      let serviceCategories = []
      
      if ( dataServiceCategories && dataServiceCategories.success ) {
        serviceCategories = flattenCategories( dataServiceCategories.service_categories )
      } else {
        console.error( 'Ошибка загрузки serviceCategories' )
      }
      
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      await serviceStateInstance.setItem( 'service', {
        ...service,
        serviceCategories
      } )
      store.setState( {
        service: {
          ...store.state.service,
          serviceCategories
        }
      } )
    } catch ( error ) {
      console.error( 'Ошибка сети или сервера:', error )
    }
  },
  setDirection: async( store, direction, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = { ...service.category[ index ], direction }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления направления:', error )
    }
  },
  setDirectionName: async( store, directionName, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = {
        ...service.category[ index ],
        directionName
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления названия направления:', error )
    }
  },
  setDirectionWorkExperience: async( store, directionWorkExperience, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = {
        ...service.category[ index ],
        directionWorkExperience
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления опыта работы:', error )
    }
  },
  setEducation: async( store, education, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = { ...service.category[ index ], education }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления образования:', error )
    }
  },
  setEducationCourseAuthor: async( store, educationCourseAuthor, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = {
        ...service.category[ index ],
        educationCourseAuthor
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления автора курса:', error )
    }
  },
  setEducationOrganizationName: async( store, educationOrganizationName, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = {
        ...service.category[ index ],
        educationOrganizationName
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления названия организации:', error )
    }
  },
  setEducationDuration: async( store, educationDuration, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = {
        ...service.category[ index ],
        educationDuration
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления продолжительности обучения:', error )
    }
  },
  setEducationCourseName: async( store, educationCourseName, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = {
        ...service.category[ index ],
        educationCourseName
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления названия курса:', error )
    }
  },
  setEducationCompletionDate: async( store, educationCompletionDate, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = {
        ...service.category[ index ],
        educationCompletionDate
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления даты завершения обучения:', error )
    }
  },
  
  setTitle: async( store, title, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        title
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления заголовка:', error )
    }
  },
  setServiceType: async( store, serviceType, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        serviceType
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления типа услуги:', error )
    }
  },
  setDeliveryFormat: async( store, deliveryFormat, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        deliveryFormat
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления формата доставки:', error )
    }
  },
  setDuration: async( store, duration, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        duration
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления продолжительности:', error )
    }
  },
  setMinuteHoursDays: async( store, minuteHoursDays, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        minuteHoursDays
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления минут/часов/дней:', error )
    }
  },
  setMeaningService: async( store, meaningService, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        meaningService
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления значения услуги:', error )
    }
  },
  setServiceFiles: async( store, files, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        files
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления файлов услуги:', error )
    }
  },
  setPaymentFormat: async( store, paymentFormat, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        paymentFormat
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления формата оплаты:', error )
    }
  },
  setPrice: async( store, price, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        price
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления цены:', error )
    }
  },
  setFrom: async( store, from, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        from
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления значения "from":', error )
    }
  },
  
  setBefore: async( store, before, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        before
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления before:', error )
    }
  },
  setDayWeekMonthYearList: async( store, dayWeekMonthYearList, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        dayWeekMonthYearList
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления списка:', error )
    }
  },
  setNewServices: async( store, categoryIndex ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      const length = service.category[ categoryIndex ].services.length
      service.category[ categoryIndex ].services[ length ] = {
        id: uuidv1(),
        title: `Услуга №${ length + 1 }`,
        status: 'New',
        documentStatus: 'New'
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка добавления новой услуги:', error )
    }
  },
  setNewDirection: async( store ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      const length = service.category.length
      service.category[ length ] = {
        id: uuidv1(),
        title: `Направление №${ length + 1 }`,
        services: [
          {
            id: uuidv1(),
            title: `Услуга №1`,
            status: 'New',
            documentStatus: 'New'
          }
        ],
        status: 'New',
        documentStatus: 'New'
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка добавления нового направления:', error )
    }
  },
  setDeleteServices: async( store, categoryIndex, index ) => {
    try {
      const removeObjectByIndex = ( arr, index ) => {
        if ( index >= 0 && index < arr.length ) {
          arr.splice( index, 1 )
        }
        return arr
      }
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services = removeObjectByIndex( service.category[ categoryIndex ].services, index )
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка удаления услуги:', error )
    }
  },
  setDeleteCategory: async( store, index ) => {
    try {
      const removeObjectByIndex = ( arr, index ) => {
        if ( index >= 0 && index < arr.length ) {
          arr.splice( index, 1 )
        }
        return arr
      }
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category = removeObjectByIndex( service.category, index )
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка удаления категории:', error )
    }
  },
  setChangeStatusCategory: async( store, status, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = { ...service.category[ index ], status }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка изменения статуса категории:', error )
    }
  },
  setChangeStatusServices: async( store, status, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        status
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка изменения статуса услуги:', error )
    }
  },
  setChangeProgress: async( store, progress ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      service.progress = progress
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка изменения прогресса:', error )
    }
  },
  setChangeStatusPassport: async( store, status ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service.passport ) {
        service.passport = {}
      }
      service.passport.status = status
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка изменения статуса паспорта:', error )
    }
  },
  
  setClientFullName: async( store, clientFullName, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        clientFullName
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления полного имени клиента:', error )
    }
  },
  setCommunication: async( store, communication, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        communication
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления коммуникации:', error )
    }
  },
  setPhone: async( store, phone, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        phone
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления телефона:', error )
    }
  },
  setChangeDocumentStatusCategory: async( store, documentStatus, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = {
        ...service.category[ index ],
        documentStatus
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка изменения статуса документа категории:', error )
    }
  },
  setChangeDocumentStatusServices: async( store, documentStatus, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ] = {
        ...service.category[ categoryIndex ].services[ index ],
        documentStatus
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка изменения статуса документа услуги:', error )
    }
  },
  setServiceReviewsFiles: async( store, reviewsFiles, categoryIndex, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      if ( !service.category[ categoryIndex ].services[ index ].reviewsFiles ) {
        service.category[ categoryIndex ].services[ index ].reviewsFiles = []
      }
      service.category[ categoryIndex ].services[ index ].reviewsFiles = [
        ...service.category[ categoryIndex ].services[ index ].reviewsFiles,
        ...reviewsFiles
      ]
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления файлов отзывов услуги:', error )
    }
  },
  setChangeFilesPassport: async( store, files ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service.passport ) {
        service.passport = {}
      }
      service.passport.files = files
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка изменения файлов паспорта:', error )
    }
  },
  setCertificatesFiles: async( store, certificatesFiles, index ) => {
    try {
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      service.category[ index ] = {
        ...service.category[ index ],
        certificatesFiles
      }
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка обновления файлов сертификатов:', error )
    }
  },
  setServiceDeleteReviewsFiles: async( store, categoryIndex, index, indexFile ) => {
    try {
      const removeObjectByIndex = ( arr, index ) => {
        if ( index >= 0 && index < arr.length ) {
          arr.splice( index, 1 )
        }
        return arr
      }
      const service = await serviceStateInstance.getItem( 'service' ) || {}
      if ( !service?.category ) {
        service.category = []
      }
      if ( !service.category[ categoryIndex ] ) {
        service.category[ categoryIndex ] = {}
      }
      if ( !service.category[ categoryIndex ]?.services ) {
        service.category[ categoryIndex ].services = []
      }
      service.category[ categoryIndex ].services[ index ].reviewsFiles = removeObjectByIndex(
        service.category[ categoryIndex ].services[ index ].reviewsFiles,
        indexFile
      )
      await serviceStateInstance.setItem( 'service', service )
      store.setState( { service } )
    } catch ( error ) {
      console.error( 'Ошибка удаления файлов отзывов услуги:', error )
    }
  },
  
  setService: async( store, newService ) => {
    
    try {
      
      const service = await serviceStateInstance.getItem( 'service' )
      
      const updatedService = {
        
        ...service,
        ...newService
        
      }
      
      await serviceStateInstance.setItem( 'service', updatedService )
      
      store.setState( {
        
        service: updatedService
        
      } )
      
    } catch ( error ) {
      
      console.error( 'Error setting service:', error )
      
    }
    
  }
  
}

export default serviceActions


