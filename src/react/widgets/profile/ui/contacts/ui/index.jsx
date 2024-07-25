import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield';
import useGlobal from '@/store';

const Contacts = () => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}>

        Контакты

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Номер'}
          value = { globalState.profile.phoneNumber }
          onChange = { (e) => globalActions.profile.setPhoneNumber(e.target.value)}

        />

        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'E-mail'}
          value = { globalState.profile.email }
          onChange = { (e) => globalActions.profile.setEmail(e.target.value)}

        />

      </form>

    </div>

  )

}

export default Contacts
