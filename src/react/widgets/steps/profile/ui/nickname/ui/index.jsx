import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store'

const Nickname = ( { disabled, editable } ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const { errors, nickName } = globalState
  
  return (
    
    <div className={ `${ s.profile__section }` }>
      
      <p className={ `text-20 ${ s.profile__section__title }` }>
        
        Псевдоним
      
      </p>
      
      <p className={ `text-16 ${ s.profile__section__description }` }>
        
        Если вы работаете под псевдонимом, укажите его здесь, тогда он будет
        отображаться на платформе вместо ваших ФИО
      
      </p>
      
      <form className={ `${ s.profile__section__filedsWrapper }` }>
        
        <Textfield
          
          className={ `${ s.profile__section__filedsWrapper__filed }` }
          placeholder={ 'Псевдоним' }
          value={ nickName }
          onChange={ ( e ) => globalActions.profile.setNickName( e.target.value ) }
          error={ errors?.pseudonym }
          disabled={ disabled }
          editable={ editable }
        
        />
      
      </form>
    
    </div>
  
  )
  
}

export default Nickname
