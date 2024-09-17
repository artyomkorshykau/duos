import localforage from 'localforage'

const profileStateInstance = localforage.createInstance( {
  
  name: 'myProfileState',
  storeName: 'profileState'
  
} )

const serviceStateInstance = localforage.createInstance( {
  
  name: 'myServiceState',
  storeName: 'serviceState'
  
} )

const schoolStateInstance = localforage.createInstance( {
  
  name: 'mySchoolState',
  storeName: 'schoolState'
  
} )

const publicationsStateInstance = localforage.createInstance( {
  
  name: 'myPublicationsState',
  storeName: 'publicationsState'
  
} )

export { profileStateInstance, serviceStateInstance, schoolStateInstance, publicationsStateInstance }