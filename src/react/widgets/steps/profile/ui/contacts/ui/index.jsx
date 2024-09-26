import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store'

const Contacts = ( ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const { errors } = globalState
  
  return (
    
    <div>
      
      <p className={ `text-20 ${ s.profile__section__title }` }>
        
        Контакты
      
      </p>
      
      <form className={ `${ s.profile__section__filedsWrapper }` }>
        
        <Textfield
          
          className={ `${ s.profile__section__filedsWrapper__filed }` }
          placeholder={ 'Номер' }
          value={ globalState.user.phone }
          onChange={ ( e ) => globalActions.profile.setPhoneNumber( e.target.value ) }
          type="phone"
          error={ errors?.phone }
          disabled
        
        />
        
        <Textfield
          
          className={ `${ s.profile__section__filedsWrapper__filed }` }
          placeholder={ 'E-mail' }
          value={ globalState.user.email }
          onChange={ ( e ) => globalActions.profile.setEmail( e.target.value ) }
          error={ errors?.email }
          disabled
        
        />
      
      </form>
    
    </div>
  
  )
  
}

export default Contacts
