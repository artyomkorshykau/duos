'use client'

import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';

const FullName = () => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}>

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
          <Textfield

            className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = {'Дата рождения'}
            type = { 'date' }
            value = { globalState.profile.birthDate }
            onChange = { (e) => globalActions.profile.setBirthDate(e.target.value)}

          />
          <Textfield

            className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = {'Пол'}
            value = { globalState.profile.gender }
            onChange = { (e) => globalActions.profile.setGender(e.target.value)}

          />

        </form>

      </div>

  )

}

export default FullName
