import useGlobal from '@/store'
import AccordionParent from '@/react/widgets/accordion.parent'
import ChoiceDirection from '../choice.direction/ui'
import Education from '../education/ui'
import { useEffect, useState } from 'react'
import AccordionServiceChildren from '../accordion.service.children'

const AccordionService = ( {
                             
                             category,
                             index
                             
                           } ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const { service } = globalState
  
  const [ title, setTitle ] = useState( category.title )
  
  const [ filled, setFilled ] = useState( false )
  
  const {
    directionWorkExperience,
    direction,
    directionName,
    education,
    educationOrganizationName,
    educationCourseName,
    educationCourseAuthor,
    educationDuration,
    educationCompletionDate,
    services
  } = globalState.service.category?.[ index ]
  
  const changeStatus = ( index ) => {
    if ( category.status === 'New' ) {
      globalActions.service.setChangeStatusCategory( 'NotFinished', index )
    }
  }
  
  useEffect( () => {
    const direction = service.category?.[ index ]?.direction
    
    if ( direction === 'Other' ) {
      setTitle(
        service.category?.[ index ]?.directionName || category.title
      )
    } else {
      setTitle( direction || category.title )
    }
  }, [ service.category ] )
  
  useEffect( () => {
    if ( category.status === 'New' ) {
      if ( service.category[ index ]?.direction ) {
        globalActions.service.setChangeStatusCategory( 'NotFinished', index )
      }
      
    }
  }, [ category ] )
  
  useEffect( () => {
    if (
      ( direction === 'Other' ? directionName : direction ) &&
      directionWorkExperience &&
      education &&
      educationOrganizationName &&
      educationCourseName &&
      educationCourseAuthor &&
      educationDuration &&
      educationCompletionDate &&
      services.every( ( item ) => item.status === 'Filled' ) &&
      category.status !== 'New'
    ) {
      
      setFilled( true )
      
    } else if ( category.status !== 'New' ) {
      
      setFilled( false )
      
    }
  }, [
    directionWorkExperience,
    direction,
    directionName,
    education,
    educationOrganizationName,
    educationCourseName,
    educationCourseAuthor,
    educationDuration,
    educationCompletionDate,
    services
  ] )
  
  useEffect( () => {
    
    if ( category.status !== 'New' ) {
      
      if ( filled ) {
        globalActions.service.setChangeStatusCategory( 'Filled', index )
      } else {
        globalActions.service.setChangeStatusCategory( 'NotFinished', index )
      }
      
    }
    
  }, [ filled ] )
  
  const content = ( index ) => {
    
    return (
      
      <>
        <ChoiceDirection index={ index }/>
        
        <Education index={ index }/>
      
      </>
    
    )
    
  }
  
  return (
    <AccordionParent
      category={ category }
      index={ index }
      isDelete={ service.category.length > 1 }
      content={ () => content( index ) }
      title={ title }
      description="Выберите направление ниже или предложите свое, затем заполните услуги в рамках конкретно этого направления"
      type="Направление"
      deletePopupAction={ () => globalActions.service.setDeleteCategory( index ) }
      addService={ ( categoryIndex ) =>
        globalActions.service.setNewServices( categoryIndex )
      }
      changeStatus={ ( index ) => changeStatus( index ) }
      titleChildren="Услуги в рамках направления"
      status={ category.status }
    >
      { category?.services?.map( ( el, indexServices ) => (
        <AccordionServiceChildren
          key={ el.id }
          el={ el }
          categoryIndex={ index }
          index={ indexServices }
          isDelete={ category.services.length > 1 }
        />
      ) ) }
    </AccordionParent>
  )
  
}

export default AccordionService