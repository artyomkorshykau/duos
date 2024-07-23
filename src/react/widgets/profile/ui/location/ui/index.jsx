import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield';

const Location = () => {

  return (

    <div className = {`${ s.profile__section }`}>

      <p className = {`${ s.profile__section__title }`}>

        Местоположение

      </p>

      <p className = {`text-16 ${ s.profile__section__description }`}>

        В какой стране и городе вы физически находитесь или планируете оказывать услуги очно

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Страна'}

        />
        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Город'}

        />

      </form>

    </div>
  )

}

export default Location
