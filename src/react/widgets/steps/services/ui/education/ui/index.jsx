'use client'

import s from '../../services.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store'
import DateField from '@/react/components/date'

const Education = ( {
                      
                      index
                      
                    } ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  const { errors } = globalState.service
  
  return (
    
    <div>
      
      <p className={ `${ s.service__section__title }` }>Образование</p>
      
      <form className={ `${ s.service__section__filedsWrapper }` }>
        
        <Textfield
          
          className={ `${ s.service__section__filedsWrapper__filed }` }
          placeholder={ 'Образование по направлению' }
          value={ globalState.service.category?.[ index ]?.education }
          onChange={ ( e ) => globalActions.service.setEducation( e.target.value, index ) }
          error = {errors?.["service_category_expert.0.education_grade"]?.[0]}
        
        />
        
        <Textfield
          
          className={ `${ s.service__section__filedsWrapper__filed }` }
          placeholder={ 'Название организации' }
          value={ globalState.service.category?.[ index ]?.educationOrganizationName }
          onChange={ ( e ) => globalActions.service.setEducationOrganizationName( e.target.value, index ) }
          error = {errors?.["service_category_expert.0.education_organization"]?.[0]}
        
        />
        
        <Textfield
          
          className={ `${ s.service__section__filedsWrapper__filed }` }
          placeholder={ 'Название курса' }
          value={ globalState.service.category?.[ index ]?.educationCourseName }
          onChange={ ( e ) => globalActions.service.setEducationCourseName( e.target.value, index ) }
        
        />
        
        <Textfield
          
          className={ `${ s.service__section__filedsWrapper__filed }` }
          placeholder={ 'ФИО автора курса' }
          value={ globalState.service.category?.[ index ]?.educationCourseAuthor }
          onChange={ ( e ) => globalActions.service.setEducationCourseAuthor( e.target.value, index ) }
          error = {errors?.["service_category_expert.0.teacher_name"]?.[0]}
        
        />
        
        <Textfield
          
          className={ `${ s.service__section__filedsWrapper__filed }` }
          placeholder={ 'Длительность обучения, дней' }
          value={ globalState.service.category?.[ index ]?.educationDuration }
          onChange={ ( e ) => globalActions.service.setEducationDuration( e.target.value, index ) }
          type={ 'number' }
        
        />
        
        <DateField
          
          className={ `${ s.service__section__filedsWrapper__filed }` }
          placeholder={ 'Дата окончания обучения' }
          value={ globalState.service.category?.[ index ]?.educationCompletionDate }
          onChange={ ( value ) => globalActions.service.setEducationCompletionDate( value, index ) }
        
        
        />
      
      </form>
    
    </div>
  
  )
  
}

export default Education
