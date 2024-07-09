import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import NAVBAR from "./header.navbar";
import Link from "next/link";
import LogoWord from "../../../icons/logoword";
import HeaderSignPanel from "./header.sign.panel";
import SignInPopup from "@/react/popups/sign.in.popup";
import SignUpPopup from "@/react/popups/sign.up.popup";
import s from "./header.module.scss";

const Header = ({

  authorized = false,

}) => {

  const router = useRouter();

  const [ userNumber, setUserNumber ] = useState( 0 );
  const [ isAuthBackOpened, setIsAuthBackOpened ] = useState( false );
  const [ showSignInPopup, setShowSignInPopup ] = useState( false );
  const [ showSignUpPopup, setShowSignUpPopup ] = useState( false );
  const [ codeModeOpened, setCodeModeOpened ] = useState( false );

  const [ policyAgree, setPolicyAgree ] = useState( false );
  const [ rememberUser, setRememberUser ] = useState( false );

  const toggleRememberUser = () => { setRememberUser( !rememberUser )};
  const togglePolicyAgree = () => { setPolicyAgree( !policyAgree )};

  function signIn( fast = false ) {

    setShowSignUpPopup( false );
    setIsAuthBackOpened( true );
    
    if ( fast !== true ) {

      setTimeout(() => {
        
        setShowSignInPopup( true );
        
      }, 1100);

    } else {

      setShowSignInPopup( true );

    }

  }

  function signUp( fast = false ) {

    setShowSignInPopup( false );
    setIsAuthBackOpened( true );

    if ( fast !== true ) {

      setTimeout(() => {
        
        setShowSignUpPopup( true );
        
      }, 1100);

    } else {

      setShowSignUpPopup( true );

    }

  }

  function closePopups() {

    setShowSignInPopup( false );
    setShowSignUpPopup( false );
    setIsAuthBackOpened( false );

  }

  function logIn() {
    
    alert( 'Войти в ИТ' );

    if ( authorized === false ) {

      router.push('/');
      setShowSignInPopup( false );
      setIsAuthBackOpened( false );

    }
  
  }

  function getCode() {
    
    if ( userNumber.length === 11 && policyAgree === true ) {
      setCodeModeOpened( true );
    }
  
  }

  return (

    <header className = {`fixed flex items-center justify-between ${ s.header } relative`}>

      <div className = {`${ s['auth-back'] } ${ isAuthBackOpened && s['auth-back--opened'] } ${ s.white_blur } absolute`}/>

      <div className = {`flex items-center justify-center ${ s['auth-back'] } ${ isAuthBackOpened && s['auth-back--opened'] } ${ s.circles_container } ${ isAuthBackOpened ? s['circles_container--appear'] : s['circles_container--disappear'] } absolute`}>

        <div className = {`${ s.blue_circle } absolute`}/>
        <div className = {`${ s.green_circle } absolute`}/>

      </div>

      <div className = {`${ s['auth-back'] } ${ isAuthBackOpened && s['auth-back--opened'] } ${ s.logocircle } absolute`}/>

      { isAuthBackOpened
      
        ? 
      
          <LogoWord className = {`${ s.header__logoword } absolute`}/>
        
        :

          <Fragment>

            <div className = {`${ s.logocircle } ${ !isAuthBackOpened && s['logocircle--closed'] } absolute`}/>
            <LogoWord className = {`${ s.header__logoword } absolute`}/>
          
          </Fragment>

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

        isOpened = { showSignInPopup }
        closePopup = { () => closePopups() }
        logIn = { () => logIn() }
        signUp = { () => signUp( true ) }
        val = { userNumber }
        set = { setUserNumber }
        bodyClassName = { s.auth__popup }
        isRememberUser = { rememberUser }
        setIsRememberUser = { toggleRememberUser }

      />

      <SignUpPopup

        isOpened = { showSignUpPopup }
        closePopup = { () => closePopups() }
        closePopups = { () => closePopups() }
        signIn = { () => signIn( true ) }
        getCode = { () => getCode() }
        codeModeOpened = { codeModeOpened }
        val = { userNumber }
        set = { setUserNumber }
        bodyClassName = { s.auth__popup }
        policyAgree = { policyAgree }
        setPolicyAgree = { togglePolicyAgree }

      />

    </header>

  )

}

export default Header;