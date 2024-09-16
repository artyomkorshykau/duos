import localforage from 'localforage'

const profileStateInstance = localforage.createInstance( {
  
  name: 'myProfileState',
  storeName: 'profileState'
  
} )

export { profileStateInstance }