import dictionary from '@/service/dictionary'
import { serviceStateInstance } from '../../../localforage.config.js'
import { v1 } from 'uuid'

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


export const getServiceCategories = async( store ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка сети или сервера:', error )
  }
}
export const setDirection = async( store, direction, index ) => {
  try {
    const service = await serviceStateInstance.getItem( 'service' ) || {}
    if ( !service?.category ) {
      service.category = []
    }
    service.category[ index ] = { ...service.category[ index ], direction }
    await serviceStateInstance.setItem( 'service', service )
    store.setState( { service } )
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления направления:', error )
  }
}
export const setDirectionName = async( store, directionName, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления названия направления:', error )
  }
}
export const setDirectionWorkExperience = async( store, directionWorkExperience, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления опыта работы:', error )
  }
}
export const setEducation = async( store, education, index ) => {
  try {
    const service = await serviceStateInstance.getItem( 'service' ) || {}
    if ( !service?.category ) {
      service.category = []
    }
    service.category[ index ] = { ...service.category[ index ], education }
    await serviceStateInstance.setItem( 'service', service )
    store.setState( { service } )
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления образования:', error )
  }
}
export const setEducationCourseAuthor = async( store, educationCourseAuthor, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления автора курса:', error )
  }
}
export const setEducationOrganizationName = async( store, educationOrganizationName, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления названия организации:', error )
  }
}
export const setEducationDuration = async( store, educationDuration, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления продолжительности обучения:', error )
  }
}
export const setEducationCourseName = async( store, educationCourseName, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления названия курса:', error )
  }
}
export const setEducationCompletionDate = async( store, educationCompletionDate, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления даты завершения обучения:', error )
  }
}

export const setTitle = async( store, title, categoryIndex, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления заголовка:', error )
  }
}
export const setServiceType = async( store, serviceType, categoryIndex, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления типа услуги:', error )
  }
}
export const setDeliveryFormat = async( store, deliveryFormat, categoryIndex, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления формата доставки:', error )
  }
}
export const setDuration = async( store, duration, categoryIndex, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления продолжительности:', error )
  }
}
export const setMinuteHoursDays = async( store, minuteHoursDays, categoryIndex, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления минут/часов/дней:', error )
  }
}
export const setMeaningService = async( store, meaningService, categoryIndex, index ) => {
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
    store.actions.updateRender()
  } catch ( error ) {
    console.error( 'Ошибка обновления значения услуги:', error )
  }
}
export const setServiceFiles = async( store, files, categoryIndex, index ) => {
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
}
export const setPaymentFormat = async( store, paymentFormat, categoryIndex, index ) => {
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
}
export const setPrice = async( store, price, categoryIndex, index ) => {
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
}
export const setFrom = async( store, from, categoryIndex, index ) => {
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
}

export const setBefore = async( store, before, categoryIndex, index ) => {
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
}
export const setDayWeekMonthYearList = async( store, dayWeekMonthYearList, categoryIndex, index ) => {
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
}
export const setNewServices = async( store, categoryIndex ) => {
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
      id: v1(),
      title: `Услуга №${ length + 1 }`,
      status: 'New',
      documentStatus: 'New'
    }
    await serviceStateInstance.setItem( 'service', service )
    store.setState( { service } )
  } catch ( error ) {
    console.error( 'Ошибка добавления новой услуги:', error )
  }
}
export const setNewDirection = async( store ) => {
  try {
    const service = await serviceStateInstance.getItem( 'service' ) || {}
    if ( !service?.category ) {
      service.category = []
    }
    const length = service.category.length
    service.category[ length ] = {
      id: v1(),
      title: `Направление №${ length + 1 }`,
      services: [
        {
          id: v1(),
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
}
export const setDeleteServices = async( store, categoryIndex, index ) => {
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
}
export const setDeleteCategory = async( store, index ) => {
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
}
export const setChangeStatusCategory = async( store, status, index ) => {
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
}
export const setChangeStatusServices = async( store, status, categoryIndex, index ) => {
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
}
export const setChangeProgress = async( store, progress ) => {
  try {
    const service = await serviceStateInstance.getItem( 'service' ) || {}
    service.progress = progress
    await serviceStateInstance.setItem( 'service', service )
    store.setState( { service } )
  } catch ( error ) {
    console.error( 'Ошибка изменения прогресса:', error )
  }
}
export const setChangeStatusPassport = async( store, status ) => {
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
}

export const setClientFullName = async( store, clientFullName, categoryIndex, index ) => {
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
}
export const setCommunication = async( store, communication, categoryIndex, index ) => {
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
}
export const setPhone = async( store, phone, categoryIndex, index ) => {
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
}
export const setChangeDocumentStatusCategory = async( store, documentStatus, index ) => {
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
}
export const setServiceErrors = ( store, errors ) => {
  store.setState( {
    ...store.state,
    service: { ...store.state.service, errors }
  } )
}

export const setChangeDocumentStatusServices = async( store, documentStatus, categoryIndex, index ) => {
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
}
export const setServiceReviewsFiles = async( store, reviewsFiles, categoryIndex, index ) => {
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
}
export const setChangeFilesPassport = async( store, files ) => {
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
}
export const setCertificatesFiles = async( store, certificatesFiles, index ) => {
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
}
export const setServiceDeleteReviewsFiles = async( store, categoryIndex, index, indexFile ) => {
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
}

export const setService = async( store, newService ) => {
  
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





