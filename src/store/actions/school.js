
const schoolActions = {

  setSchoolName: (store, schoolName) => {

    const school = JSON.parse(localStorage.getItem('school'))

    localStorage.setItem('school', JSON.stringify({ ...school, schoolName }))
    store.setState({ school: { ...store.state.school, schoolName } })

  },

  setComment: (store, comment) => {

    const school = JSON.parse(localStorage.getItem('school'))

    localStorage.setItem('school', JSON.stringify({ ...school, comment }))
    store.setState({ school: { ...store.state.school, comment } })

  },
  setCourseName: (store, index, title) => {

    const school = JSON.parse(localStorage.getItem('school'))

    const updatedCourses = school.courses.map((course, i) =>

      i === index ? { ...course, title } : course

    )

    localStorage.setItem('school', JSON.stringify({ ...school, courses: updatedCourses }))

    store.setState({ school: { ...store.state.school, courses: updatedCourses } })

  },
  addNewCourse: ( store ) => {

    const school = JSON.parse(localStorage.getItem('school'))

    localStorage.setItem('school', JSON.stringify({ ...school, courses: [...school.courses, { title: '' } ] }))
    store.setState({ school: { ...store.state.school, courses: [...school.courses, { title: '' } ] } })

  },
  deleteCourse: ( store, index ) => {

    const school = JSON.parse(localStorage.getItem('school'))

    const updateCourses = school.courses.filter( ( course, i ) => i !== index )

    localStorage.setItem('school', JSON.stringify({ ...school, courses: updateCourses }))
    store.setState({ school: { ...store.state.school, courses: updateCourses } })

  },
  setSchoolProgress(store, progress) {

    const school = JSON.parse(localStorage.getItem('school'))

    localStorage.setItem('school', JSON.stringify({ ...school, progress }))
    store.setState({ school: { ...store.state.school, progress } })

  }

}

export default schoolActions


