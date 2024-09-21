import Select from '@/react/components/forms/select'
import useGlobal from '@/store'
import s from '../../profile.module.scss'

const Location = ( { disabled } ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const { countries, cities, city, country } = globalState
  
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
          
          placeholder="Страна"
          options={ countries }
          value={ country?.value }
          onChange={ value => globalActions.profile.setCountry( countries.find( ( item ) => item.value === value ) ) }
          disabled={ disabled }
        
        />
        <Select
          
          placeholder={ 'Город' }
          options={ cities }
          value={ city?.value }
          onChange={ value => globalActions.profile.setCity( cities.find( ( item ) => item.value === value ) ) }
          disabled={ disabled }
        
        />
      
      </form>
    
    </div>
  
  )
  
}

export default Location
