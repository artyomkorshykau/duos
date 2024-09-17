import { schoolStateInstance } from '../../../localforage.config.js'

const schoolActions = {
  
  setSchoolName: async( store, schoolName ) => {
    try {
      const school = await schoolStateInstance.getItem( 'school' ) || {}
      const updatedSchool = { ...school, schoolName }
      
      await schoolStateInstance.setItem( 'school', updatedSchool )
      store.setState( { school: { ...store.state.school, schoolName } } )
    } catch ( error ) {
      console.error( 'Error setting school name:', error )
    }
  },
  
  setComment: async( store, comment ) => {
    try {
      const school = await schoolStateInstance.getItem( 'school' ) || {}
      const updatedSchool = { ...school, comment }
      
      await schoolStateInstance.setItem( 'school', updatedSchool )
      store.setState( { school: { ...store.state.school, comment } } )
    } catch ( error ) {
      console.error( 'Error setting comment:', error )
    }
  },
  
  setCourseName: async( store, index, title ) => {
    try {
      const school = await schoolStateInstance.getItem( 'school' ) || {}
      const updatedCourses = store.state.school.courses.map( ( course, i ) =>
        i === index ? { ...course, name: title } : course
      )
      
      const updatedSchool = { ...school, courses: updatedCourses }
      await schoolStateInstance.setItem( 'school', updatedSchool )
      
      store.setState( {
        school: {
          ...store.state.school,
          courses: updatedCourses
        }
      } )
    } catch ( error ) {
      console.error( 'Error setting course name:', error )
    }
  },
  
  addNewCourse: async( store ) => {
    try {
      const school = await schoolStateInstance.getItem( 'school' ) || {}
      const index = store.state.school.courses.length
      
      const updatedSchool = {
        ...school,
        courses: [ ...store.state.school.courses, { id: index, name: '' } ]
      }
      
      await schoolStateInstance.setItem( 'school', updatedSchool )
      
      store.setState( {
        school: {
          ...store.state.school,
          courses: [ ...store.state.school.courses, { id: index, name: '' } ]
        }
      } )
    } catch ( error ) {
      console.error( 'Error adding new course:', error )
    }
  },
  
  deleteCourse: async( store, index ) => {
    try {
      const school = await schoolStateInstance.getItem( 'school' ) || {}
      const updatedCourses = store.state.school.courses.filter( ( course, i ) => i !== index )
      
      const updatedSchool = { ...school, courses: updatedCourses }
      await schoolStateInstance.setItem( 'school', updatedSchool )
      
      store.setState( {
        school: {
          ...store.state.school,
          courses: updatedCourses
        }
      } )
    } catch ( error ) {
      console.error( 'Error deleting course:', error )
    }
  },
  
  setSchoolProgress: ( store, progress ) => {
    store.setState( { school: { ...store.state.school, progress } } )
  },
  
  setSchool: async( store, newSchool ) => {
    try {
      const school = await schoolStateInstance.getItem( 'school' ) || {}
      
      const updatedSchool = { ...school, ...newSchool }
      
      await schoolStateInstance.setItem( 'school', updatedSchool )
      
      store.setState( { school: updatedSchool } )
    } catch ( error ) {
      console.error( 'Error setting school:', error )
    }
  }
}

export default schoolActions
