import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield';

const TaxStatus = () => {

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}>

        Налоговый статус

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Налоговый статус'}
          // value = {lastName}
          // onChange = { (e) => {
          //
          //   setLastName(e.target.value)
          //   updateLocalStorage('lastName', e.target.value)
          //
          // }}

        />
        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Полное наименование'}
          // value = {lastName}
          // onChange = { (e) => {
          //
          //   setLastName(e.target.value)
          //   updateLocalStorage('lastName', e.target.value)
          //
          // }}

        />
        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'ИНН'}
          // value = {lastName}
          // onChange = { (e) => {
          //
          //   setLastName(e.target.value)
          //   updateLocalStorage('lastName', e.target.value)
          //
          // }}

        />

      </form>

    </div>

  )

}

export default TaxStatus
