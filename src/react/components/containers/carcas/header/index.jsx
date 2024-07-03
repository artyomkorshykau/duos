import { useState } from "react";
import Link from "next/link";
import Logo from "../../../icons/logo";
import LogoWord from "../../../icons/logoword";
import HeaderSignPanel from "./header.sign.panel";
import NAVBAR from "./header.navbar";
import s from "./header.module.scss";

const Header = ({

  authorized = false,
  isClient = false

}) => {

  const [ isAuthStarted, setAuthStarted ] = useState( false );

  function signIn() {

    setAuthStarted( true );

  }

  function signUp() {

    setAuthStarted( true );

  }

  return (

    <header className = {`fixed flex items-center justify-between ${ s.header } relative`}>

      <div className = {`${ s['auth-back'] } ${ isAuthStarted && s['auth-back--opened'] }  ${ s.white_blur } absolute`}/>

      <div className = {`flex items-center justify-center ${ s['auth-back'] } ${ isAuthStarted && s['auth-back--opened'] } ${ s.circles_container } ${ isAuthStarted ? s['circles_container--appear'] : s['circles_container--disappear'] } absolute`}>
        
        <div className = {`${ s.circles_container__blue_circle } absolute`}/>
        <div className = {`${ s.circles_container__green_circle } absolute`}/>

      </div>
      
      <div
      
        id = "logocircle"
        className = {`${ s['auth-back'] } ${ isAuthStarted && s['auth-back--opened'] } ${ s.logocircle } ${ s['logocircle--scaled'] } absolute`}

      >

      </div>

      { isAuthStarted
      
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
        isClient = { isClient }
        signIn = { () => signIn() }
        signUp = { () => signUp() }

      />

    </header>

  )

}

export default Header;