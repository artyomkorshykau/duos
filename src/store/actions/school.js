import expert from "@/service/expert.js";

const schoolActions = {

  setSchoolName: (store, schoolName) => {

    store.setState({ school: { ...store.state.school, schoolName } })

  },

  setComment: (store, comment) => {

    store.setState({ school: { ...store.state.school, comment } })

  },

  setCourseName: (store, index, title) => {

    const updatedCourses = store.state.school.courses.map((course, i) =>

      i === index ? { ...course, name: title } : course

    )

    store.setState({ school: { ...store.state.school, courses: updatedCourses } })

  },

  addNewCourse: ( store ) => {

    const index = store.state.school.courses.length

    store.setState({ school: { ...store.state.school, courses: [...store.state.school.courses, { id: index, title: '', comment: '' } ] } })

  },

  deleteCourse: ( store, index ) => {

    const updateCourses = store.state.school.courses.filter( ( course, i ) => i !== index )

    store.setState({ school: { ...store.state.school, courses: updateCourses } })

  },

  setSchoolProgress(store, progress) {

    store.setState({ school: { ...store.state.school, progress } })

  },

  async sendProfile(store) {

    await expert.sendExpertDataStep3(store.state.school).then((res) => {

      store.setState({ school: { ...store.state.school, errors: res.errors } })

    })

  },

}

export default schoolActions


