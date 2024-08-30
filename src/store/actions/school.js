const schoolActions = {

  setSchoolName: (store, schoolName) => {
    
    const school = JSON.parse( localStorage.getItem( 'school' ) )
    
    localStorage.setItem( 'school', JSON.stringify( { ...school, schoolName } ) )
    store.setState({ school: { ...store.state.school, schoolName } })

  },

  setComment: (store, comment) => {
    
    const school = JSON.parse( localStorage.getItem( 'school' ) )
    
    localStorage.setItem( 'school', JSON.stringify( { ...school, comment } ) )
    store.setState({ school: { ...store.state.school, comment } })

  },

  setCourseName: (store, index, title) => {
    
    const school = JSON.parse( localStorage.getItem( 'school' ) )
    
    const updatedCourses = store.state.school.courses.map((course, i) =>

      i === index ? { ...course, name: title } : course

    )
    
    localStorage.setItem( 'school', JSON.stringify( { ...school, courses: updatedCourses } ) )
    store.setState({ school: { ...store.state.school, courses: updatedCourses } })

  },

  addNewCourse: ( store ) => {
    
    const school = JSON.parse( localStorage.getItem( 'school' ) )
    const index = store.state.school.courses.length
    
    localStorage.setItem( 'school', JSON.stringify( { ...school, courses: [...store.state.school.courses, { id: index, name: '' } ] } ) )
    store.setState({ school: { ...store.state.school, courses: [...store.state.school.courses, { id: index, name: '' } ] } })

  },

  deleteCourse: ( store, index ) => {
    
    const school = JSON.parse( localStorage.getItem( 'school' ) )
    const updateCourses = store.state.school.courses.filter( ( course, i ) => i !== index )
    
    localStorage.setItem( 'school', JSON.stringify( { ...school, courses: updateCourses } ) )
    store.setState({ school: { ...store.state.school, courses: updateCourses } })

  },

  setSchoolProgress(store, progress) {

    store.setState({ school: { ...store.state.school, progress } })

  },

}

export default schoolActions


