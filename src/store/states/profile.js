const profileState = {

    firstName: '',
    lastName: '',
    surName: '',
    birthDate: '',
    gender: '',
    nickName: '',
    taxStatus: '',
    country: '',
    city: '',
    phoneNumber: '',
    email: '',
    
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