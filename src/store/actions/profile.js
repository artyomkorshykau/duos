
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

  },
  setDirection: (store, direction, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = [];
    }

    profile.category[i] = {...profile.category[i], direction}
    localStorage.setItem('profile', JSON.stringify(profile));
    store.setState({ profile })

  },
  setDirectionName: (store, directionName, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }

    profile.category[i] = {...profile.category[i], directionName}
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setDirectionWorkExperience: (store, directionWorkExperience, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }

    profile.category[i] = { ...profile.category[i], directionWorkExperience }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setEducation: (store, education, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }

    profile.category[i] = { ...profile.category[i], education }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setEducationCourseAuthor: (store, educationCourseAuthor, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }

    profile.category[i] = { ...profile.category[i], educationCourseAuthor }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setEducationOrganizationName: (store, educationOrganizationName, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }

    profile.category[i] = { ...profile.category[i], educationOrganizationName }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setEducationDuration: (store, educationDuration, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }

    profile.category[i] = { ...profile.category[i], educationDuration }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setEducationCourseName: (store, educationCourseName, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }

    profile.category[i] = { ...profile.category[i], educationCourseName }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setEducationCompletionDate: (store, educationCompletionDate, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }

    profile.category[i] = { ...profile.category[i], educationCompletionDate }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setServiceName: (store, serviceName, categoryIndex, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }
    const category = profile.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    profile.category[categoryIndex].services[i] = {
      ...profile.category[categoryIndex].services[i],
      serviceName,
    }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setServiceType: (store, serviceType, categoryIndex, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }
    const category = profile.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    profile.category[categoryIndex].services[i] = {
      ...profile.category[categoryIndex].services[i],
      serviceType,
    }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setDeliveryFormat: (store, deliveryFormat, categoryIndex, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }
    const category = profile.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    profile.category[categoryIndex].services[i] = {
      ...profile.category[categoryIndex].services[i],
      deliveryFormat,
    }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setDuration: (store, duration, categoryIndex, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }
    const category = profile.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    profile.category[categoryIndex].services[i] = {
      ...profile.category[categoryIndex].services[i],
      duration,
    }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setMinuteHoursDays: (store, minuteHoursDays, categoryIndex, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }
    const category = profile.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    profile.category[categoryIndex].services[i] = {
      ...profile.category[categoryIndex].services[i],
      minuteHoursDays,
    }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },
  setMeaningService: (store, meaningService, categoryIndex, i) => {

    const profile = JSON.parse(localStorage.getItem("profile")) || {}

    if (!profile?.category) {
      profile.category = []
    }
    const category = profile.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    profile.category[categoryIndex].services[i] = {
      ...profile.category[categoryIndex].services[i],
      meaningService,
    }
    localStorage.setItem("profile", JSON.stringify(profile))
    store.setState({ profile })

  },

}

export default profileActions


