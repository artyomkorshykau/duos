import SignOutIcon from "@/react/components/icons/sign.out.icon";
import MenuPersonIcon from "@/react/components/icons/menu.person.icon";
import s from "../auth.panel.module.scss";

const AuthMenu = ({

  isOpened = false,
  onMouseOut = () => {},
  onMouseOver = () => {},
  pointPosition = "center"

}) => {

  function openQuiz() { alert('TODO: реализация перехода на анкету') };
  function logOut() { alert('TODO: реализация выхода из системы') };

  return(

    <div
    
      onMouseOut = { onMouseOut }
      onMouseOver = { onMouseOver }
      className = {`${ s['auth-panel__menu'] } ${ isOpened && s['auth-panel__menu--opened'] } absolute pointer`}
      
    >

      <div className={`relative ${ s['auth-panel__menu__point__container'] }`}>
      
        <div className = {`absolute ${ s['auth-panel__menu__point'] } ${ s['auth-panel__menu__point--'+pointPosition ] }`}/>

      </div>

      <div
      
        onClick = { () => openQuiz() }
        className = {`flex items-center justify-between ${ s['auth-panel__menu__row'] } ${ s['auth-panel__menu__row__open_quiz'] }`}
        
      >

        <p className = {`${ s['auth-panel__menu__row__open_quiz'] } text-14`}>Открыть анкету</p>

        <MenuPersonIcon className = {`${ s['auth-panel__menu__row__open_quiz__icon'] }`}/>

      </div>

      <div className = {`${ s['auth-panel__menu__liner'] }`}/>

      <div
      
        onClick = { () => logOut() }
        className = {`flex items-center justify-between ${ s['auth-panel__menu__row'] } ${ s['auth-panel__menu__row__log_out'] }`}
        
      >

        <p className = {`${ s['auth-panel__menu__row__logout'] } text-14`}>Выйти из системы</p>
        
        <SignOutIcon className = {`${ s['auth-panel__menu__row__logout__icon'] }`}/>

      </div>

    </div>

  )

}

export default AuthMenu;