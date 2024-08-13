'use client'

import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';
import Select from '@/react/components/forms/select';
import { genderList } from '@/constants/profile'
import { useEffect, useState } from 'react';
import DateField from '@/react/components/date';

const FullName = () => {

  const [ globalState, globalActions ] = useGlobal();

  //TODO delete this when api will ready
  const [ isLoaded, setIsLoaded ] = useState( false );

  useEffect( () => {

    setIsLoaded( true );

  }, [] );

  if ( !isLoaded ) {

    return <div>Loading...</div>;

  }

  return (

    <div>

      <p className = {`text-20 ${ s.profile__section__title }`}>

        Фамилия Имя и Отчество

      </p>

        <form className = {`${ s.profile__section__filedsWrapper }`}>

          <Textfield

            className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = {'Фамилия'}
            value = { globalState.profile.lastName }
            onChange = { (e) => globalActions.profile.setLastName(e.target.value)}

          />

          <Textfield

            className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = {'Имя'}
            value = { globalState.profile.firstName }
            onChange = { (e) => globalActions.profile.setFirstName(e.target.value)}

          />
          <Textfield

            className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = {'Отчество'}
            value = { globalState.profile.surName }
            onChange = { (e) => globalActions.profile.setSurName(e.target.value)}

          />
          <DateField

            className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = {'Дата рождения'}
            type = { 'date' }
            value = { globalState.profile.birthDate }
            onChange = { (e) => globalActions.profile.setBirthDate(e.target.value)}

          />
          <Select

            // className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = { 'Пол' }
            options = { genderList }
            value = { globalState.profile.gender }
            onChange = { value => globalActions.profile.setGender( value ) }

          />

        </form>

      </div>

  )

}

export default FullName
