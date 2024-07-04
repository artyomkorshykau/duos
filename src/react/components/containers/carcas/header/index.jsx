import { useState } from "react";
import NAVBAR from "./header.navbar";
import Link from "next/link";
import Logo from "../../../icons/logo";
import LogoWord from "../../../icons/logoword";
import HeaderSignPanel from "./header.sign.panel";
import SignInPopup from "@/react/popups/popup/sign.in.popup";
import s from "./header.module.scss";

const Header = ({

  authorized = false,

}) => {

  const [ userNumber, setUserNumber ] = useState( 0 );
  const [ isAuthBackOpened, setIsAuthBackOpened ] = useState( false );

  const [ showSignInPopup, setShowSignInPopup ] = useState( false );
  const closeSignInPopup = () => { setShowSignInPopup( false ) && setIsAuthBackOpened( false ) };

  const [ showSignUpPopup, setShowSignUpPopup ] = useState( false );
  const closeSignUpPopup = () => { setShowSignUpPopup( false ) && setIsAuthBackOpened( false )};


  const [ rememberUser, setRememberUser ] = useState( false );
  const toggleRememberUser = () => { setRememberUser( !rememberUser )};

  function signIn() {

    setShowSignInPopup( true );
    setIsAuthBackOpened( true );

  }

  function signUp() {

    setShowSignUpPopup( true );
    setIsAuthBackOpened( true );

  }

  function logIn() {

    alert('Войти в ИТ');

  }

  return (

    <header className = {`fixed flex items-center justify-between ${ s.header } relative`}>

      <div className = {`${ s['auth-back'] } ${ isAuthBackOpened && s['auth-back--opened'] } ${ s.white_blur } absolute`}/>

      <div className = {`flex items-center justify-center ${ s['auth-back'] } ${ isAuthBackOpened && s['auth-back--opened'] } ${ s.circles_container } ${ isAuthBackOpened ? s['circles_container--appear'] : s['circles_container--disappear'] } absolute`}>
        
        <div className = {`${ s.circles_container__blue_circle } absolute`}/>
        <div className = {`${ s.circles_container__green_circle } absolute`}/>

      </div>
      
      <div
      
        id = "logocircle"
        className = {`${ s['auth-back'] } ${ isAuthBackOpened && s['auth-back--opened'] } ${ s.logocircle } ${ s['logocircle--scaled'] } absolute`}

      >

      </div>

      { isAuthBackOpened
      
        ? 
      
          <LogoWord className = {`${ s.header__logoword } absolute`}/> 
        
        : 
        
          <Logo className = {`${ s.header__logo } absolute`}/>
        
      }

      <div className = {`flex items-center ${ s.header__navbar }`}>

        { NAVBAR.map(( el, key ) => (

          <Link
          
            key = { key }
            href = { el.url }
            className = {`${ s.header__navbar__link }`}
            
          >

            { el.name }

          </Link>

        ))}

      </div>

      <HeaderSignPanel

        authorized = { authorized }
        signIn = { () => signIn() }
        signUp = { () => signUp() }

      />

      <SignInPopup

        isOpened = { true }
        closePopup = { closeSignInPopup }
        logIn = { () => logIn() }
        signUp = { () => signUp() }
        val = { userNumber }
        set = { setUserNumber }
        bodyClassName = { s.auth__popup }
        isRememberUser = { rememberUser }
        setIsRememberUser = { toggleRememberUser }

      >

      </SignInPopup>

    </header>

  )

}

export default Header;