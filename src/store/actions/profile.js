import locations from '@/service/locations.js'
import { profileStateInstance } from '../../../localforage.config.js'


export const setFirstName = async( store, firstName ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile,
    firstName
  } )
  
  store.setState( { ...store.state, firstName } )
}

export const setLastName = async( store, lastName ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile,
    lastName
  } )
  
  store.setState( { ...store.state, lastName } )
}

export const setSurName = async( store, surName ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile, surName
  } )
  
  store.setState( { ...store.state, surName } )
}

export const setBirthDate = async( store, birthDate ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile,
    birthDate
  } )
  
  store.setState( { ...store.state, birthDate } )
}

export const setGender = async( store, gender ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile, gender
  } )
  store.setState( { ...store.state, gender } )
}

export const setNickName = async( store, nickName ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile,
    nickName
  } )
  store.setState( { ...store.state, nickName } )
}

export const setTaxStatus = async( store, taxStatus ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile,
    taxStatus
  } )
  store.setState( { ...store.state, taxStatus } )
}

export const setTaxName = async( store, taxName ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile, taxName
  } )
  store.setState( { ...store.state, taxName } )
}

export const setTaxIIN = async( store, taxIIN ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile, taxIIN
  } )
  store.setState( { ...store.state, taxIIN } )
}

export const setCountry = async( store, country ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile, country
  } )
  store.setState( { ...store.state, country } )
}

export const setCity = async( store, city ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile, city
  } )
  store.setState( { ...store.state, city } )
}

export const setPhoneNumber = async( store, phoneNumber ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile,
    phoneNumber
  } )
  store.setState( { ...store.state, phoneNumber } )
}

export const setEmail = async( store, email ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile, email
  } )
  store.setState( { ...store.state, email } )
}

export const setProfileProgress = async( store, progress ) => {
  const profile = await profileStateInstance.getItem( 'profile' )
  
  await profileStateInstance.setItem( 'profile', {
    ...profile,
    progress
  } )
  store.setState( { ...store.state, progress } )
}

export const setProfileErrors = ( store, errors ) => {
  store.setState( { ...store.state, errors } )
}

export const getLocations = async( store ) => {
  try {
    const dataCountries = await locations.getCountries( null, null )
    const dataCity = await locations.getCities( 1, null, null )
    
    let countries = []
    let cities = []
    
    if ( dataCountries && dataCountries.success ) {
      countries = dataCountries.countries.map( ( country ) => ( {
        id: country.id,
        value: country.name,
        label: country.name
      } ) )
    } else {
      console.error( 'Ошибка загрузки стран' )
    }
    
    if ( dataCity && dataCity.success ) {
      cities = dataCity.cities.map( ( city ) => ( {
        id: city.id,
        value: city.name,
        label: city.name
      } ) )
    } else {
      console.error( 'Ошибка загрузки городов' )
    }
    
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile,
      countries,
      cities
    } )
    
    store.setState( {
      profile: {
        ...store.state.profile,
        countries,
        cities
      }
    } )
    
  } catch ( error ) {
    console.error( 'Ошибка сети или сервера:', error )
  }
}

export const setProfile = async( store, newProfile ) => {
  try {
    
    const profile = await profileStateInstance.getItem( 'profile' )
    
    const updatedProfile = {
      
      ...profile,
      ...newProfile
      
    }
    
    await profileStateInstance.setItem( 'profile', updatedProfile )
    
    store.setState( {
      
      ...updatedProfile
      
    } )
    
  } catch ( error ) {
    
    console.error( 'Error setting profile:', error )
    
  }
  
}

