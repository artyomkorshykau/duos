import s from '../../profile.module.scss'
import useGlobal from '@/store';
import Select from '@/react/components/forms/select'
import { cityList } from '@/constants/profile'

const Location = () => {

  const [ globalState, globalActions ] = useGlobal()

    return (

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
            options={ countries }
            value={ globalState.profile.country }
            onChange={ value => globalActions.profile.setCountry( value ) }

          />
          <Select

            placeholder={ 'Город' }
            options={ cityList }
            value={ globalState.profile.city }
            onChange={ value => globalActions.profile.setCity( value ) }

          />

        </form>

      </div>
    )

}

export default Location
