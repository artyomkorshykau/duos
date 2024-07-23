import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield'
import { useFullName } from '@/react/widgets/profile/ui/full.name/model'
import updateLocalStorage from '@/scripts/helpers/update.local.storage.data'

const FullName = () => {

const {

  firstName,
  lastName,
  surName,
  birthDate,
  gender,
  setFirstName,
  setLastName,
  setSurName ,
  setBirthDate,
  setGender,

} = useFullName()

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}>

        Фамилия Имя и Отчество

      </p>

        <form className = {`${ s.profile__section__filedsWrapper }`}>

          <Textfield

            className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = {'Фамилия'}
            value = {lastName}
            onChange = { (e) => {

              setLastName(e.target.value)
              updateLocalStorage('lastName', e.target.value)

            }}

          />

          <Textfield

            className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = {'Имя'}
            value = {firstName}
            onChange = { (e) => {

              setFirstName(e.target.value)
              updateLocalStorage('firstName', e.target.value)

            }}

          />
          <Textfield

            className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = {'Отчество'}
            value = {surName}
            onChange = { (e) => {

              setSurName(e.target.value)
              updateLocalStorage('surName', e.target.value)

            }}

          />
          <Textfield

            className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = {'Дата рождения'}
            value = {birthDate}
            onChange = { (e) => {

              setBirthDate(e.target.value)
              updateLocalStorage('birthDate', e.target.value)

            }}

          />
          <Textfield

            className = {`${ s.profile__section__filedsWrapper__filed }`}
            placeholder = {'Пол'}
            value = {gender}
            onChange = { (e) => {

              setGender(e.target.value)
              updateLocalStorage('gender', e.target.value)

            }}

          />

        </form>

      </div>

  )

}

export default FullName
