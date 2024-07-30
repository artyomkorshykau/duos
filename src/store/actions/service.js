
const serviceActions = {

  setEmail: (store, email) => {

    const service = JSON.parse(localStorage.getItem('service'))

    localStorage.setItem('service', JSON.stringify({ ...service, email }))
    store.setState({ service: { ...store.state.service, email } })

  },
  setDirection: (store, direction, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = [];
    }

    service.category[i] = {...service.category[i], direction}
    localStorage.setItem('service', JSON.stringify(service));
    store.setState({ service })

  },
  setDirectionName: (store, directionName, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }

    service.category[i] = {...service.category[i], directionName}
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setDirectionWorkExperience: (store, directionWorkExperience, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }

    service.category[i] = { ...service.category[i], directionWorkExperience }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setEducation: (store, education, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }

    service.category[i] = { ...service.category[i], education }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setEducationCourseAuthor: (store, educationCourseAuthor, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }

    service.category[i] = { ...service.category[i], educationCourseAuthor }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setEducationOrganizationName: (store, educationOrganizationName, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }

    service.category[i] = { ...service.category[i], educationOrganizationName }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setEducationDuration: (store, educationDuration, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }

    service.category[i] = { ...service.category[i], educationDuration }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setEducationCourseName: (store, educationCourseName, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }

    service.category[i] = { ...service.category[i], educationCourseName }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setEducationCompletionDate: (store, educationCompletionDate, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }

    service.category[i] = { ...service.category[i], educationCompletionDate }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setServiceName: (store, serviceName, categoryIndex, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }
    const category = service.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    service.category[categoryIndex].services[i] = {
      ...service.category[categoryIndex].services[i],
      serviceName,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setServiceType: (store, serviceType, categoryIndex, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }
    const category = service.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    service.category[categoryIndex].services[i] = {
      ...service.category[categoryIndex].services[i],
      serviceType,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setDeliveryFormat: (store, deliveryFormat, categoryIndex, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }
    const category = service.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    service.category[categoryIndex].services[i] = {
      ...service.category[categoryIndex].services[i],
      deliveryFormat,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setDuration: (store, duration, categoryIndex, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }
    const category = service.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    service.category[categoryIndex].services[i] = {
      ...service.category[categoryIndex].services[i],
      duration,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setMinuteHoursDays: (store, minuteHoursDays, categoryIndex, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }
    const category = service.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    service.category[categoryIndex].services[i] = {
      ...service.category[categoryIndex].services[i],
      minuteHoursDays,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setMeaningService: (store, meaningService, categoryIndex, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }
    const category = service.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    service.category[categoryIndex].services[i] = {
      ...service.category[categoryIndex].services[i],
      meaningService,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setServiceFiles: (store, files, categoryIndex, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }
    const category = service.category
    if (!category?.[categoryIndex]) {
      category[categoryIndex] = {}
    }
    if (!category?.[categoryIndex]?.services) {
      category[categoryIndex].services = []
    }

    service.category[categoryIndex].services[i] = {
      ...service.category[categoryIndex].services[i],
      files,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },

}

export default serviceActions


