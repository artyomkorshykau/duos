import s from '../progress.bar.module.scss'
import useGlobal from '@/store'
import NotiseSuccess from '@/react/components/icons/notise.success'
import { QuizSteps, steps } from '@/constants/quiz.steps'
import cssIf from '@/scripts/helpers/css.if'
import Progress from '../progress'
import { useEffect, useState } from 'react'

export function calculateSchoolProgress( schoolState ) {
  
  let fieldsCount = 2
  let filledFields = 0
  
  if ( schoolState.schoolName !== '' ) filledFields++
  if ( schoolState.comment !== '' ) filledFields++
  
  fieldsCount += schoolState.courses.length
  
  for( const course of schoolState.courses ) {
    
    if ( course.name !== '' ) filledFields++
    
  }
  
  return filledFields / fieldsCount
  
}

const calculateProgress = ( statuses ) => {
  
  if ( statuses.length === 0 ) return 0
  
  const statusValues = {
    'Filled': 1,
    'NotFinished': 0.1,
    'New': 0,
    'NotFilled': 0
  }
  
  const totalWeight = statuses.length
  const weightedSum = statuses.reduce( ( sum, status ) => sum + statusValues[ status ], 0 )
  
  return ( weightedSum / totalWeight )
}

const Categories = ( props ) => {
  
  const {
    
    activeStep
    
  } = props
  
  const [ globalState, globalActions ] = useGlobal()
  const { profile, service, school, publications } = globalState
  const { category, passport } = service
  const [ activeId, setActiveId ] = useState()
  const [ progress, setProgress ] = useState( 0 )
  
  useEffect( () => {
    
    const active = QuizSteps.find( ( el ) => el.title === activeStep )
    
    setActiveId( active.id )
    
  }, [ activeStep ] )
  
  useEffect( () => {
    
    if ( activeStep === steps.profile ) {
      
      const requiredFields = [
        'lastName',
        'firstName',
        'surName',
        'birthDate',
        'gender',
        'taxStatus',
        'city',
        'country'
      ]
      
      const filledRequiredFields = requiredFields.filter( field => {
        const value = profile[ field ]
        return value !== '' && value !== null && value !== undefined
      } ).length
      
      const progress = 1 + ( filledRequiredFields / requiredFields.length ) * 15.9
      setProgress( Math.min( progress, 16 ) )
      
    } else if ( activeStep === steps.service ) {
      
      category.map( item => item.status === 'Filled'
        ? setProgress( 37 )
        : setProgress( 15 ) )
      
    } else if ( activeStep === steps.school ) {
      
      const progress = 37 + ( calculateSchoolProgress( school ) * 20 )
      
      progress >= 43.6
        
        ? setProgress( progress )
        : setProgress( 37 )
      
    } else if ( activeStep === steps.documents ) {
      
      const passportStatus = passport.status
      category.map( item => item.documentStatus === 'Filled' && passportStatus === 'Filled'
        
        ? setProgress( 77 )
        : setProgress( 57 ) )
      
    } else if ( activeStep === steps.publications ) {
      
      publications.categories.map( item => item.documentStatus === 'Filled'
        
        ? setProgress( 93.5 )
        : setProgress( 77 ) )
      
    }
    
  }, [ profile, service, school, publications ] )
  
  useEffect( () => {
    
    if ( activeStep === steps.profile ) globalActions.profile.setProfileProgress( progress >= 16 ? 1 : 0 )
    if ( activeStep === steps.service ) globalActions.service.setChangeProgress( progress >= 37 ? 1 : 0 )
    if ( activeStep === steps.school ) globalActions.school.setSchoolProgress( progress >= 57 ? 1 : 0 )
    if ( activeStep === steps.documents ) globalActions.service.setChangeProgress( progress >= 77 ? 1 : 0 )
    if ( activeStep === steps.publications ) globalActions.publications.setPublicationsProgress( progress >= 93.5 ? 1 : 0 )
    
  }, [ progress ] )
  
  console.log(progress)
  
  return (
    
    <div className={ `${ s.progressBar__steps }` }>
      
      { QuizSteps.map( ( category ) => {
        
        const serviceActive = ( activeStep === 'Услуги' || activeStep === 'Документы' ) && service.progress === 1
        let fill = ( activeStep === category.title && serviceActive ) || ( category.id < activeId ) ? '#18009E' : activeStep === category.title ? '#E1EBF9' : '#FFFFFF'
        let stroke = ( activeStep === category.title && serviceActive ) || ( category.id < activeId ) ? '#FFFFFF' : activeStep === category.title ? '#18009E' : '#FFFFFF'
        return (
          
          <div className={ `relative ${ s.progressBar__steps__item }` }
               key={ category.id }>
            
            <p
              className={ `text-16 ${ s.progressBar__steps__item__title } ${ cssIf( activeStep === category.title, s.progressBar__steps__item__title__active ) }` }>
              
              { category.title }
            
            </p>
            
            <div className={ `${ s.progressBar__steps__item__icon }` }>
              
              <NotiseSuccess
                
                fill={ fill }
                stroke={ stroke }
              
              />
            
            </div>
          
          </div>
        
        )
        
      } ) }
      
      <Progress progress={ progress }/>
    
    </div>
  )
  
}

export default Categories