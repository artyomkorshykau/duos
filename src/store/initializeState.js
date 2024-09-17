import getInitialProfileState from '@/store/states/profile.js'
import { useEffect } from 'react'
import useGlobal from '@/store/index.js'
import getInitialServiceState from '@/store/states/service.js'
import getInitialSchoolState from '@/store/states/school.js'
import getInitialPublicationsState from '@/store/states/publications.js'

export const initializeState = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  useEffect( () => {
    
    const initializeState = async() => {
      
      const profileState = await getInitialProfileState()
      globalActions.profile.setProfile( profileState )
      
      const serviceState = await getInitialServiceState()
      globalActions.service.setService( serviceState )
      
      const schoolState = await getInitialSchoolState()
      globalActions.school.setSchool( schoolState )
      
      const publicationsState = await getInitialPublicationsState()
      globalActions.publications.setPublications( publicationsState )
      
    }
    
    initializeState()
    
  }, [] )
  
}