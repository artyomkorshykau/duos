import dictionary from '@/service/dictionary'
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
      
      const service = JSON.parse( localStorage.getItem( 'service' ) )
      
      localStorage.setItem( 'service', JSON.stringify( {
        ...service,
        serviceCategories
      } ) )
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
  
  setDirection: ( store, direction, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = { ...service.category[ index ], direction }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setDirectionName: ( store, directionName, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = { ...service.category[ index ], directionName }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setDirectionWorkExperience: ( store, directionWorkExperience, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = {
      ...service.category[ index ],
      directionWorkExperience
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setEducation: ( store, education, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = { ...service.category[ index ], education }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setEducationCourseAuthor: ( store, educationCourseAuthor, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = {
      ...service.category[ index ],
      educationCourseAuthor
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setEducationOrganizationName: ( store, educationOrganizationName, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = {
      ...service.category[ index ],
      educationOrganizationName
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setEducationDuration: ( store, educationDuration, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = {
      ...service.category[ index ],
      educationDuration
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setEducationCourseName: ( store, educationCourseName, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = {
      ...service.category[ index ],
      educationCourseName
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setEducationCompletionDate: ( store, educationCompletionDate, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = {
      ...service.category[ index ],
      educationCompletionDate
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setTitle: ( store, title, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      title
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setServiceType: ( store, serviceType, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      serviceType
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setDeliveryFormat: ( store, deliveryFormat, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      deliveryFormat
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setDuration: ( store, duration, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      duration
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setMinuteHoursDays: ( store, minuteHoursDays, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      minuteHoursDays
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setMeaningService: ( store, meaningService, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      meaningService
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setServiceFiles: ( store, files, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      files
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setPaymentFormat: ( store, paymentFormat, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      paymentFormat
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setPrice: ( store, price, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      price
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setFrom: ( store, from, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      from
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setBefore: ( store, before, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      before
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setDayWeekMonthYearList: ( store, dayWeekMonthYearList, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      dayWeekMonthYearList
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setNewServices: ( store, categoryIndex ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    const length = category[ categoryIndex ].services.length
    
    service.category[ categoryIndex ].services[ length ] = {
      id: v1(),
      title: `Услуга №${ length + 1 }`,
      status: 'New',
      documentStatus: 'New'
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setNewDirection: ( store ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    const length = service.category.length
    
    service.category[ length ] = {
      id: v1(),
      title: `Направление №${ length + 1 }`,
      services: [ {
        id: v1(),
        title: `Услуга №1`,
        status: 'New',
        documentStatus: 'New'
      } ],
      status: 'New',
      documentStatus: 'New'
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setDeleteServices: ( store, categoryIndex, index ) => {
    
    function removeObjectByIndex( arr, index ) {
      if ( index >= 0 && index < arr.length ) {
        arr.splice( index, 1 )
      }
      return arr
    }
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    let updatedService = removeObjectByIndex(
      service.category[ categoryIndex ].services,
      index
    )
    service.category[ categoryIndex ].services = updatedService
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setDeleteCategory: ( store, index ) => {
    
    function removeObjectByIndex( arr, index ) {
      if ( index >= 0 && index < arr.length ) {
        arr.splice( index, 1 )
      }
      return arr
    }
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    let updatedCategory = removeObjectByIndex( service.category, index )
    service.category = updatedCategory
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setChangeStatusCategory: ( store, status, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = { ...service.category[ index ], status }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setChangeStatusServices: ( store, status, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      status
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setChangeProgress: ( store, progress ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    service.progress = progress
    
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setChangeStatusPassport: ( store, status ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    service.passport.status = status
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setClientFullName: ( store, clientFullName, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      clientFullName
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setCommunication: ( store, communication, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      communication
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setPhone: ( store, phone, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      phone
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setChangeDocumentStatusCategory: ( store, documentStatus, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = { ...service.category[ index ], documentStatus }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setChangeDocumentStatusServices: ( store, documentStatus, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    service.category[ categoryIndex ].services[ index ] = {
      ...service.category[ categoryIndex ].services[ index ],
      documentStatus
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setServiceReviewsFiles: ( store, reviewsFiles, categoryIndex, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    if ( !service.category[ categoryIndex ].services[ index ].reviewsFiles ) {
      service.category[ categoryIndex ].services[ index ].reviewsFiles = []
    }
    
    service.category[ categoryIndex ].services[ index ].reviewsFiles = [
      ...service.category[ categoryIndex ].services[ index ].reviewsFiles,
      ...reviewsFiles
    ]
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setChangeFilesPassport: ( store, files ) => {
    
    const service = JSON.parse(localStorage.getItem("service")) || {}
    
    localStorage.setItem("service", JSON.stringify(service))
    
    service.passport.files = files
    store.setState( { service } )
    
  },
  setCertificatesFiles: ( store, certificatesFiles, index ) => {
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    
    service.category[ index ] = {
      ...service.category[ index ],
      certificatesFiles
    }
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
  },
  setServiceDeleteReviewsFiles: ( store, categoryIndex, index, indexFile ) => {
    
    function removeObjectByIndex( arr, index ) {
      if ( index >= 0 && index < arr.length ) {
        arr.splice( index, 1 )
      }
      return arr
    }
    
    const service = JSON.parse( localStorage.getItem( 'service' ) ) || {}
    
    if ( !service?.category ) {
      service.category = []
    }
    const category = service.category
    if ( !category?.[ categoryIndex ] ) {
      category[ categoryIndex ] = {}
    }
    if ( !category?.[ categoryIndex ]?.services ) {
      category[ categoryIndex ].services = []
    }
    
    let updatedReviewsFiles = removeObjectByIndex(
      service.category[ categoryIndex ].services[ index ].reviewsFiles,
      indexFile
    )
    service.category[ categoryIndex ].services[ index ].reviewsFiles =
      updatedReviewsFiles
    localStorage.setItem( 'service', JSON.stringify( service ) )
    store.setState( { service } )
    
    /*
    
    service.category[categoryIndex].services[index].reviewsFiles = [
      ...service.category[categoryIndex].services[index].reviewsFiles,
      ...reviewsFiles,
    ]
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })*/
    
  }
  
}

export default serviceActions


