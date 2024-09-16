'use client'

import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store'
import Select from '@/react/components/forms/select'
import { genderList } from '@/constants/profile'
import DateField from '@/react/components/date'

const FullName = ( { disabled } ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  return (
    
    <div>
      
      <p className={ `text-20 ${ s.profile__section__title }` }>
        
        Фамилия Имя и Отчество
      
      </p>
      
      <form className={ `${ s.profile__section__filedsWrapper }` }>
        
        <Textfield
          
          className={ `${ s.profile__section__filedsWrapper__filed }` }
          placeholder="Фамилия"
          value={ globalState.profile.lastName || globalState.user.last_name }
          onChange={ ( e ) => globalActions.profile.setLastName( e.target.value ) }
          error={ globalState.profile.errors?.last_name }
          disabled={ disabled }
        
        />
        
        <Textfield
          
          className={ `${ s.profile__section__filedsWrapper__filed }` }
          placeholder="Имя"
          value={ globalState.profile.firstName || globalState.user.first_name }
          onChange={ ( e ) => globalActions.profile.setFirstName( e.target.value ) }
          error={ globalState.profile.errors?.first_name }
          disabled={ disabled }
        
        />
        <Textfield
          
          className={ `${ s.profile__section__filedsWrapper__filed }` }
          placeholder="Отчество"
          value={ globalState.profile.surName || globalState.user.mid_name }
          onChange={ ( e ) => globalActions.profile.setSurName( e.target.value ) }
          error={ globalState.profile.errors?.mid_name }
          disabled={ disabled }
        
        />
        <DateField
          
          placeholder="Дата рождения"
          value={ globalState.profile.birthDate || globalState.user.birthday }
          onChange={ ( value ) => globalActions.profile.setBirthDate( value ) }
          error={ globalState.profile.errors?.birthday }
          disabled={ disabled }
        
        />
        <Select
          
          placeholder="Пол"
          options={ genderList }
          value={ globalState.profile.gender }
          onChange={ value => globalActions.profile.setGender( value ) }
          disabled={ disabled }
        
        />
      
      </form>
    
    </div>
  
  )
  
}

export default FullName
