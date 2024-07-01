import { useState } from "react";
import SignOutIcon from "@/react/components/icons/sign.out.icon";
import MenuPersonIcon from "@/react/components/icons/menu.person.icon";
import s from "./auth.panel.module.scss";

const HeaderAuthPanel = ({

  quizHadCompleted = false,
  userData = {},

}) => {

  //тестовые данные
  const FAKEDATA = {

    userName: "Иван",
    userLastName: "Иванович",
    userAvatar: "/img/test.default.data/avatar.jpeg",

  }

  userData = FAKEDATA;
  //тестовые данные

  const quizStatusText = {

    completed: "Анкета на верификации",
    uncompleted: "Анкета не завершена",

  }

  const [ menuIsOpened, setMenuIsOpened ] = useState( false );
  function toggleAuthMenu() { setMenuIsOpened( !menuIsOpened ) };

  function openQuiz() {}; //TODO: реализация перехода на анкету
  function logOut() {}; //TODO: реализация выхода из системы

  return (

    <div className = {`flex flex-row-reverse items-center ${ s['auth-panel'] } relative`}>

      <img
      
        src = { userData.userAvatar }
        onClick = { () => toggleAuthMenu() }
        className = {`${ s['auth-panel__avatar'] } pointer`}
        
      />
      
      <div>

        <p
        
          className = {`${ s['auth-panel__text__status'] } text-10`}
          
        >

         { quizHadCompleted ? quizStatusText.completed : quizStatusText.uncompleted }

        </p>

        <div className = "flex items-center justify-end">

          <p className = {`${ s['auth-panel__text__userdata'] } text-13`}>{ userData.userLastName }</p>
          <p className = {`${ s['auth-panel__text__userdata'] } text-13`}>{ userData.userName }</p>

        </div>

      </div>

      <AuthMenu

        isOpened = { menuIsOpened }

      />

    </div>

  )

}

export default HeaderAuthPanel;

const AuthMenu = ({

  isOpened = false,

}) => {

  return(

    <div className = {`${ s['auth-panel__menu'] } ${ isOpened && s['auth-panel__menu--opened'] } absolute`}>

      <div
      
        onClick = { () => openQuiz() }
        className = {`flex items-center justify-between pointer ${ s['auth-panel__menu__row'] } ${ s['auth-panel__menu__row__open_quiz'] }`}
        
      >

        <p className = {`${ s['auth-panel__quiz__title'] } text-14`}>Открыть анкету</p>

        <MenuPersonIcon className = {`${ s['sign-panel__in__icon'] } pointer`}/>

      </div>

      <div className = {`${ s['auth-panel__menu__liner'] }`}/>

      <div
      
        onClick = { () => LogOut() }
        className = {`flex items-center justify-between pointer ${ s['auth-panel__menu__row'] } ${ s['auth-panel__menu__row__log_out'] }`}
        
      >

        <p className = {`${ s['auth-panel__quiz__title'] } text-14`}>Выйти из системы</p>
        
        <SignOutIcon className = {`${ s['auth-panel__quiz__icon'] } pointer`}/>

      </div>

    </div>

  )

}