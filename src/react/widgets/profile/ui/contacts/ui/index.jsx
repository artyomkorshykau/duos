import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield';

const Contacts = () => {

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}>

        Контакты

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Номер'}

        />

        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'E-mail'}

        />

      </form>

    </div>

  )

}

export default Contacts
