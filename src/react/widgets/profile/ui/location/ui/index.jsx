import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield';
import useGlobal from '@/store';

const Location = () => {

  const [ globalState, globalActions ] = useGlobal()

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
          value = { globalState.profile.country }
          onChange = { (e) => globalActions.profile.setCountry(e.target.value)}

        />
        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Город'}
          value = { globalState.profile.city }
          onChange = { (e) => globalActions.profile.setCity(e.target.value)}

        />

      </form>

    </div>

  )

}

export default Location
