import locations from '@/service/locations.js'
import { profileStateInstance } from '../../../localforage.config.js'

const profileActions = {
  setFirstName: async( store, firstName ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile,
      firstName
    } )
    
    store.setState( { profile: { ...store.state.profile, firstName } } )
  },
  
  setLastName: async( store, lastName ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile,
      lastName
    } )
    
    store.setState( { profile: { ...store.state.profile, lastName } } )
  },
  
  setSurName: async( store, surName ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile, surName
    } )
    
    store.setState( { profile: { ...store.state.profile, surName } } )
  },
  
  setBirthDate: async( store, birthDate ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile,
      birthDate
    } )
    
    store.setState( { profile: { ...store.state.profile, birthDate } } )
  },
  
  setGender: async( store, gender ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile, gender
    } )
    
    store.setState( { profile: { ...store.state.profile, gender } } )
  },
  
  setNickName: async( store, nickName ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile,
      nickName
    } )
    
    store.setState( { profile: { ...store.state.profile, nickName } } )
  },
  
  setTaxStatus: async( store, taxStatus ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile,
      taxStatus
    } )
    
    store.setState( { profile: { ...store.state.profile, taxStatus } } )
  },
  
  setTaxName: async( store, taxName ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile, taxName
    } )
    
    store.setState( { profile: { ...store.state.profile, taxName } } )
  },
  
  setTaxIIN: async( store, taxIIN ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile, taxIIN
    } )
    
    store.setState( { profile: { ...store.state.profile, taxIIN } } )
  },
  
  setCountry: async( store, country ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile, country
    } )
    
    store.setState( { profile: { ...store.state.profile, country } } )
  },
  
  setCity: async( store, city ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile, city
    } )
    
    store.setState( { profile: { ...store.state.profile, city } } )
  },
  
  setPhoneNumber: async( store, phoneNumber ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile,
      phoneNumber
    } )
    
    store.setState( { profile: { ...store.state.profile, phoneNumber } } )
  },
  
  setEmail: async( store, email ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile, email
    } )
    
    store.setState( { profile: { ...store.state.profile, email } } )
  },
  
  setProfileProgress: async( store, progress ) => {
    const profile = await profileStateInstance.getItem( 'profile' )
    
    await profileStateInstance.setItem( 'profile', {
      ...profile,
      progress
    } )
    
    store.setState( { profile: { ...store.state.profile, progress } } )
  },
  
  setProfileErrors: ( store, errors ) => {
    store.setState( { profile: { ...store.state.profile, errors } } )
  },
  
  getLocations: async( store ) => {
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
}

export default profileActions
