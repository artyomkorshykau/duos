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

const getInitialProfileState = () => {
  
  if (typeof window !== "undefined") {
    
    const storedProfileState = JSON.parse(localStorage.getItem("profile"))
    
    if (storedProfileState) {
      
      return storedProfileState
      
    } else {
      
      localStorage.setItem("profile", JSON.stringify(profileState))
      
      return profileState
      
    }
    
  }
  
  return profileState
}

export default getInitialProfileState

