
const profileActions = {

  setFirstName: (store, firstName) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, firstName }))
    store.setState({ profile: { ...store.state.profile, firstName } })

  },
  setLastName: (store, lastName) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, lastName }))
    store.setState({ profile: { ...store.state.profile, lastName } })

  },
  setSurName: (store, surName) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, surName }))
    store.setState({ profile: { ...store.state.profile, surName } })

  },
  setBirthDate: (store, birthDate) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, birthDate }))
    store.setState({ profile: { ...store.state.profile, birthDate } })

  },
  setGender: (store, gender) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, gender }))
    store.setState({ profile: { ...store.state.profile, gender } })

  },
  setNickName: (store, nickName) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, nickName }))
    store.setState({ profile: { ...store.state.profile, nickName } })

  },
  setTaxStatus: (store, taxStatus) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, taxStatus }))
    store.setState({ profile: { ...store.state.profile, taxStatus } })

  },
  setTaxName: (store, taxName) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, taxName }))
    store.setState({ profile: { ...store.state.profile, taxName } })

  },
  setTaxIIN: (store, taxIIN) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, taxIIN }))
    store.setState({ profile: { ...store.state.profile, taxIIN } })

  },
  setCountry: (store, country) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, country }))
    store.setState({ profile: { ...store.state.profile, country } })

  },
  setCity: (store, city) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, city }))
    store.setState({ profile: { ...store.state.profile, city } })

  },
  setPhoneNumber: (store, phoneNumber) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, phoneNumber }))
    store.setState({ profile: { ...store.state.profile, phoneNumber } })

  },
  setEmail: (store, email) => {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, email }))
    store.setState({ profile: { ...store.state.profile, email } })

  }

}

export default profileActions


