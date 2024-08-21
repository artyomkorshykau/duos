import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield';
import useGlobal from '@/store';
import Phonefield from '@/react/components/forms/phonefield'

const Contacts = () => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`text-20 ${ s.profile__section__title }`}>

        Контакты

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Номер'}
          value = { globalState.profile.phoneNumber }
          onChange = { (e) => globalActions.profile.setPhoneNumber(e.target.value) }
          type = 'phone'
          error = { globalState.profile.errors?.phone }

        />

        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'E-mail'}
          value = { globalState.profile.email }
          onChange = { (e) => globalActions.profile.setEmail(e.target.value)}
          error = { globalState.profile.errors?.email }

        />

      </form>

    </div>

  )

}

export default Contacts
