const profileState = {

    firstName: '',
    lastName: '',
    surName: '',
    birthDate: '',
    gender: '',
    nickName: '',
    taxStatus: '',
    taxName: '',
    taxIIN: '',
    country: '',
    city: '',
    phoneNumber: '',
    email: '',
    
}

const getInitialProfileState = () => {

  if (typeof window !== 'undefined') {

    const storedProfileState = JSON.parse(localStorage.getItem('profile'))

    return storedProfileState || profileState

  }

  return profileState

}

export default getInitialProfileState