
const serviceActions = {

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
  setTitle: (store, title, categoryIndex, i) => {

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
      title,
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
  setPaymentFormat: (store, paymentFormat, categoryIndex, i) => {

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
      paymentFormat,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setPrice: (store, price, categoryIndex, i) => {

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
      price,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setFrom: (store, from, categoryIndex, i) => {

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
      from,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setBefore: (store, before, categoryIndex, i) => {

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
      before,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setDayWeekMonthYearList: (store, dayWeekMonthYearList, categoryIndex, i) => {

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
      dayWeekMonthYearList,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setNewServices: (store, categoryIndex) => {

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

    const length = category[categoryIndex].services.length

    service.category[categoryIndex].services[length] = {
      title: `Услуга №${length + 1}`,
      status: "New",
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setNewDirection: (store) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }

    const length = service.category.length

    service.category[length] = {
      title: `Направление №${length + 1}`,
      description:
        "Выберите направление ниже или предложите свое, затем заполните услуги в рамках конкретно этого направления",
      services: [{ title: `Услуга №1`, status: "New" }],
      status: "New",
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setDeleteServices: (store, categoryIndex, i) => {

    function removeObjectByIndex(arr, index) {
      if (index >= 0 && index < arr.length) {
        arr.splice(index, 1)
      }
      return arr
    }

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

    let updatedService = removeObjectByIndex(
      service.category[categoryIndex].services,
      i
    )
    service.category[categoryIndex].services = updatedService
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setDeleteCategory: (store, i) => {

    function removeObjectByIndex(arr, index) {
      if (index >= 0 && index < arr.length) {
        arr.splice(index, 1)
      }
      return arr
    }

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }

    let updatedCategory = removeObjectByIndex(service.category, i)
    service.category = updatedCategory
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setChangeStatusCategory: (store, status, i) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    if (!service?.category) {
      service.category = []
    }

    service.category[i] = { ...service.category[i], status }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setChangeStatusServices: (store, status, categoryIndex, i) => {

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
      status,
    }
    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },
  setChangeProgress: (store, progress) => {

    const service = JSON.parse(localStorage.getItem("service")) || {}

    service.progress = progress

    localStorage.setItem("service", JSON.stringify(service))
    store.setState({ service })

  },

}

export default serviceActions


