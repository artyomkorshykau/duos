import { useEffect, useState } from "react";
import Select from '@/react/components/forms/select'
import useGlobal from '@/store';
import s from '../../profile.module.scss'

const Location = () => {

  const [ globalState, globalActions ] = useGlobal()

  const [ isLoaded, setIsLoaded ] = useState( false );

  useEffect( () => {

    setIsLoaded( true );

  }, [] );

  if ( !isLoaded ) {

    return <div>Loading...</div>;

  }

    return ( 
    
    <>
      { globalState.profile.isLoading === true &&

      <div className={ `${ s.profile__section }` }>

        <p className={ `text-20 ${ s.profile__section__title }` }>

          Местоположение

        </p>

        <p className={ `text-16 ${ s.profile__section__description }` }>

          В какой стране и городе вы физически находитесь или планируете
          оказывать услуги очно

        </p>

        <form className={ `${ s.profile__section__filedsWrapper }` }>

          <Select

            placeholder='Страна'
            options={ globalState.profile.countries }
            value={ globalState.profile.country?.value }
            onChange={ value => globalActions.profile.setCountry( globalState.profile.countries.find((item) => item.value === value) ) }

          />
          <Select

            placeholder={ 'Город' }
            options={ globalState.profile.cities }
            value={ globalState.profile.city?.value }
            onChange={ value => globalActions.profile.setCity( globalState.profile.cities.find((item) => item.value === value) ) }

          />

        </form>

      </div>
      }
      </>
    )

}

export default Location
