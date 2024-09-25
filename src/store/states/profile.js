import { profileStateInstance } from '../../../localforage.config.js'

const profileState = {
  
  firstName: '',
  lastName: '',
  surName: '',
  birthDate: '',
  gender: '',
  nickName: '',
  taxStatus: '',
  taxName: '',
  country: '',
  city: '',
  phoneNumber: '',
  email: '',
  taxIIN: '',
  countries: null,
  cities: null,
  isLoading: false,
  errors: null
}

const getInitialProfileState = async() => {
  
  try {
    
    const storedProfileState = await profileStateInstance.getItem( 'profile' )
    
    if ( storedProfileState ) {
      
      return storedProfileState
      
    } else {
      
      await profileStateInstance.setItem( 'profile', profileState )
      return profileState
      
    }
    
  } catch ( error ) {
    
    console.error( 'Error accessing profile state:', error )
    return profileState
    
  }
  
}

export default getInitialProfileState 

