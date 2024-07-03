import { useState } from "react";
import useGlobal from "@/store";
import AuthMenu from "./auth.menu";
import s from "./auth.panel.module.scss";

import FAKEDATA from "./FAKEDATA";

const HeaderAuthPanel = ({

  quizHadCompleted = false

}) => {

  const [ globalState, globalActions ] = useGlobal();

  const quizStatusText = {

    completed: "Анкета на верификации",
    uncompleted: "Анкета не завершена",

  }

  
  const [ menuIsOpened, setMenuIsOpened ] = useState( false );

  const handleMouseOver = () => {
    setMenuIsOpened( true );
  };

  const handleMouseOut = () => {
    setMenuIsOpened( false );
  };

  return (

    <div className = {`flex flex-row-reverse items-center ${ s['auth-panel'] } relative`}>

      <div

        onMouseOut = { handleMouseOut }
        onMouseOver = { handleMouseOver }
        className = {`flex items-center justify-center ${ s['auth-panel__avatar'] } pointer`}
        
      >

        <img
        
          src = { globalState.userData.userAvatar }
          className = {`${ s['auth-panel__avatar__img'] } pointer`}
          
        />

      </div>
      
      <div>

        <p
        
          className = {`${ s['auth-panel__text__status'] } text-10`}
          
        >

         { quizHadCompleted ? quizStatusText.completed : quizStatusText.uncompleted }

        </p>

        <div className = "flex items-center justify-end">

          <p className = {`${ s['auth-panel__text__userdata'] } text-13`}>{ globalState.userData.userLastName }</p>
          <p className = {`${ s['auth-panel__text__userdata'] } text-13`}>{ globalState.userData.userName }</p>

        </div>

      </div>

      <AuthMenu

        isOpened = { menuIsOpened }
        onMouseOut = { handleMouseOut }
        onMouseOver = { handleMouseOver }
        pointPosition = "right"

      />

    </div>

  )

}

export default HeaderAuthPanel;