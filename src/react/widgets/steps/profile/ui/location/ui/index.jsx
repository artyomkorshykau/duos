import s from '../../profile.module.scss'
import useGlobal from '@/store'
import Select from '@/react/components/forms/select'
import { cityList, countryList } from '@/constants/profile'
import { useEffect, useState } from 'react'

const Location = ( { disabled }) => {

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

    <div className = {`${ s.profile__section }`}>

      <p className = {`text-20 ${ s.profile__section__title }`}>

        Местоположение

      </p>

      <p className = {`text-16 ${ s.profile__section__description }`}>

        В какой стране и городе вы физически находитесь или планируете оказывать услуги очно

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Select

          placeholder = 'Страна'
          options = { countryList }
          value = { globalState.profile.country }
          onChange = { value => globalActions.profile.setCountry( value ) }
          disabled = { disabled }

        />
        <Select

          placeholder = {'Город'}
          options = { cityList }
          value = { globalState.profile.city }
          onChange = { value => globalActions.profile.setCity( value ) }
          disabled = { disabled }

        />

      </form>

    </div>

  )

}

export default Location
