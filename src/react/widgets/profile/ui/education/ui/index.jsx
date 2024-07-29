'use client'

import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';

const Education = ({

  i

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}>Образование</p>

      <form className={`${s.profile__section__filedsWrapper}`}>
        
        <Textfield
          
          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Образование по направлению'}
          value = { globalState.profile.category?.[i]?.education }
          onChange={(e) => globalActions.profile.setEducation(e.target.value, i)}
          
        />

        <Textfield
          
          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Название организации, проводившей обучение'}
          value = { globalState.profile.category?.[i]?.educationOrganizationName }
          onChange={(e) => globalActions.profile.setEducationOrganizationName(e.target.value, i)}
          
        />
        
        <Textfield
          
          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Название курса'}
          value = { globalState.profile.category?.[i]?.educationCourseName }
          onChange = { (e) => globalActions.profile.setEducationCourseName( e.target.value, i )}

        />

        <Textfield
          
          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'ФИО автора курса'}
          value = { globalState.profile.category?.[i]?.educationCourseAuthor }
          onChange={(e) => globalActions.profile.setEducationCourseAuthor(e.target.value, i)}
          
        />

        <Textfield
          
          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Длительность обучения, дней'}
          value = { globalState.profile.category?.[i]?.educationDuration }
          onChange={(e) => globalActions.profile.setEducationDuration(e.target.value, i)}
          
        />

        <Textfield
          
          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Дата окончания обучения'}
          type = { 'date' }
          value = { globalState.profile.category?.[i]?.educationCompletionDate }
          onChange={(e) => globalActions.profile.setEducationCompletionDate(e.target.value, i)}
          
        />

      </form>

      </div>

  )

}

export default Education
