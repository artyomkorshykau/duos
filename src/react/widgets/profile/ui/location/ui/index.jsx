import s from '../../profile.module.scss'
import useGlobal from '@/store';
import Selectfield from '@/react/components/forms/selectfield'
import { cityList, countryList } from '@/constants/profile'

const Location = () => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div className = {`${ s.profile__section }`}>

      <p className = {`text-20 ${ s.profile__section__title }`}>

        Местоположение

      </p>

      <p className = {`text-16 ${ s.profile__section__description }`}>

        В какой стране и городе вы физически находитесь или планируете оказывать услуги очно

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Selectfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Страна'}
          value = { globalState.profile.country }
          onChange = { (e) => globalActions.profile.setCountry(e.target.value)}
          options = { countryList }

        />
        <Selectfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Город'}
          value = { globalState.profile.city }
          onChange = { (e) => globalActions.profile.setCity(e.target.value)}
          options = { cityList }

        />

      </form>

    </div>

  )

}

export default Location
