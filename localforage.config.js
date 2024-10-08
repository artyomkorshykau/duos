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

const constructorStateInstance = localforage.createInstance( {
  
  name: 'myConstructorState',
  storeName: 'constructorState'
  
} )

export { profileStateInstance, serviceStateInstance, schoolStateInstance, publicationsStateInstance, constructorStateInstance }