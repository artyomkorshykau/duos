import { schoolStateInstance } from '../../../localforage.config.js'

const schoolState = {
  
  schoolName: '',
  courses: [ { id: 0, name: '' } ],
  comment: ''
  
}

const getInitialSchoolState = async() => {
  
  try {
    
    const storedSchoolState = await schoolStateInstance.getItem( 'school' )
    
    if ( storedSchoolState ) {
      
      return storedSchoolState
      
    } else {
      
      await schoolStateInstance.setItem( 'school', schoolState )
      return schoolState
      
    }
    
  } catch ( error ) {
    
    console.error( 'Error accessing school state:', error )
    return schoolState
    
  }
  
}

export default getInitialSchoolState
