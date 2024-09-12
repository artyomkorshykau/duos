import SignOutIcon from '@/react/components/icons/sign.out.icon'
import s from '../auth.panel.module.scss'
import { useRouter } from 'next/navigation'
import auth from '@/service/auth.js'
import useGlobal from '@/store/index.js'
import Promotion from '@/react/components/icons/promotion.jsx'
import MenuPersonIcon from '@/react/components/icons/menu.person.icon.jsx'
import Services from '@/react/components/icons/services.jsx'
import Publications from '@/react/components/icons/publications.jsx'

const AuthMenu = ( {
                     
                     isOpened = false,
                     onMouseOut = () => {},
                     onMouseOver = () => {},
                     pointPosition = 'center'
                     
                   } ) => {
  
  const { push, refresh } = useRouter()
  const [ globalState, globalActions ] = useGlobal()
  
  function openQuiz() {
    
    push( '/questionnaire' )
  
  }
  
  function logOut() {
    
    auth.logout()
    refresh()
  }
  
  const authMenu = () => {
    
    //waiting
    if ( globalState.user.verify_status === 'waiting' ) {
      
      return (
        
        <>
          
          <div
            
            onClick={ () => push( '/questionnaire' ) }
            className={ `flex items-center justify-between ${ s[ 'auth-panel__menu__row' ] } ${ s[ 'auth-panel__menu__row__open_quiz' ] }` }
          
          >
            
            <p
              className={ `${ s[ 'auth-panel__menu__row__open_quiz' ] } text-14` }>Статус
              анкеты</p>
            
            <MenuPersonIcon
              className={ `${ s[ 'auth-panel__menu__row__open_quiz__icon' ] }` }/>
          
          </div>
        
        </>
      
      )
      
    }
    
    //create
    if ( !globalState.user.verify_status ) {
      
      return (
        
        <>
          
          <div
            
            onClick={ () => openQuiz() }
            className={ `flex items-center justify-between ${ s[ 'auth-panel__menu__row' ] } ${ s[ 'auth-panel__menu__row__open_quiz' ] }` }
          
          >
            
            <p
              className={ `${ s[ 'auth-panel__menu__row__open_quiz' ] } text-14` }>Открыть
              анкету</p>
            
            <MenuPersonIcon
              className={ `${ s[ 'auth-panel__menu__row__open_quiz__icon' ] }` }/>
          
          </div>
        
        </>
      
      )
      
    }
    
    //verified
    if ( globalState.user.verify_status === 'verified' ) {
      
      return (
        
        <>
          
          <div
            
            onClick={ () => push( '/profile' ) }
            className={ `flex items-center justify-between ${ s[ 'auth-panel__menu__row' ] } ${ s[ 'auth-panel__menu__row__open_quiz' ] }` }
          
          >
            
            <p
              className={ `${ s[ 'auth-panel__menu__row__open_quiz' ] } text-14` }>Мой
              кабинет</p>
            
            <MenuPersonIcon
              className={ `${ s[ 'auth-panel__menu__row__open_quiz__icon' ] }` }/>
          
          </div>
          
          <div className={ `${ s[ 'auth-panel__menu__liner' ] }` }/>
          
          <div
            
            className={ `flex items-center justify-between ${ s[ 'auth-panel__menu__row' ] } ${ s[ 'auth-panel__menu__row__open_quiz' ] }` }
          
          >
            
            <p
              className={ `${ s[ 'auth-panel__menu__row__open_quiz' ] } text-14` }>
              Мои публикации
            </p>
            
            <Publications
              className={ `${ s[ 'auth-panel__menu__row__open_quiz__icon' ] }` }/>
          
          </div>
          
          <div
            
            className={ `flex items-center justify-between ${ s[ 'auth-panel__menu__row' ] } ${ s[ 'auth-panel__menu__row__open_quiz' ] }` }
          
          >
            
            <p
              className={ `${ s[ 'auth-panel__menu__row__open_quiz' ] } text-14` }>
              Мои услуги
            </p>
            
            <Services
              className={ `${ s[ 'auth-panel__menu__row__open_quiz__icon' ] }` }/>
          
          </div>
          
          <div
            
            className={ `flex items-center justify-between ${ s[ 'auth-panel__menu__row' ] } ${ s[ 'auth-panel__menu__row__open_quiz' ] }` }
          
          >
            
            <p
              className={ `${ s[ 'auth-panel__menu__row__open_quiz' ] } text-14` }>
            
            Продвижение
            
            </p>
            
            <Promotion
              className={ `${ s[ 'auth-panel__menu__row__open_quiz__icon' ] }` }/>
          
          </div>
        
        </>
      
      )
      
    }
    
  }
  
  
  return (
    
    <div
      
      onMouseOut={ onMouseOut }
      onMouseOver={ onMouseOver }
      className={ `${ s[ 'auth-panel__menu' ] } ${ isOpened && s[ 'auth-panel__menu--opened' ] } absolute pointer` }
    
    >
      
      <div
        className={ `relative ${ s[ 'auth-panel__menu__point__container' ] }` }>
        
        <div
          className={ `absolute ${ s[ 'auth-panel__menu__point' ] } ${ s[ 'auth-panel__menu__point--' + pointPosition ] }` }/>
      
      </div>
      
      { authMenu() }
      
      <div className={ `${ s[ 'auth-panel__menu__liner' ] }` }/>
      
      <div
        
        onClick={ () => logOut() }
        className={ `flex items-center justify-between ${ s[ 'auth-panel__menu__row' ] } ${ s[ 'auth-panel__menu__row__log_out' ] }` }
      
      >
        
        <p
          className={ `${ s[ 'auth-panel__menu__row__logout' ] } text-14` }>Выйти
          из системы</p>
        
        <SignOutIcon
          className={ `${ s[ 'auth-panel__menu__row__logout__icon' ] }` }/>
      
      </div>
    
    </div>
  
  )
  
}

export default AuthMenu