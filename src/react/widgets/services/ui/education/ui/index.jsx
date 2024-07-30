'use client'

import s from '../../services.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';

const Education = ({

  i

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.service__section__title }`}>Образование</p>

      <form className={`${s.service__section__filedsWrapper}`}>
        
        <Textfield
          
          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'Образование по направлению'}
          value = { globalState.service.category?.[i]?.education }
          onChange={(e) => globalActions.service.setEducation(e.target.value, i)}
          
        />

        <Textfield
          
          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'Название организации, проводившей обучение'}
          value = { globalState.service.category?.[i]?.educationOrganizationName }
          onChange={(e) => globalActions.service.setEducationOrganizationName(e.target.value, i)}
          
        />
        
        <Textfield
          
          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'Название курса'}
          value = { globalState.service.category?.[i]?.educationCourseName }
          onChange = { (e) => globalActions.service.setEducationCourseName( e.target.value, i )}

        />

        <Textfield
          
          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'ФИО автора курса'}
          value = { globalState.service.category?.[i]?.educationCourseAuthor }
          onChange={(e) => globalActions.service.setEducationCourseAuthor(e.target.value, i)}
          
        />

        <Textfield
          
          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'Длительность обучения, дней'}
          value = { globalState.service.category?.[i]?.educationDuration }
          onChange={(e) => globalActions.service.setEducationDuration(e.target.value, i)}
          
        />

        <Textfield
          
          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'Дата окончания обучения'}
          type = { 'date' }
          value = { globalState.service.category?.[i]?.educationCompletionDate }
          onChange={(e) => globalActions.service.setEducationCompletionDate(e.target.value, i)}
          
        />

      </form>

      </div>

  )

}

export default Education
