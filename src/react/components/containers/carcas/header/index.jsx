import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NAVBAR from './header.navbar'
import Link from 'next/link'
import LogoWord from '../../../icons/logoword'
import HeaderSignPanel from './header.sign.panel'
import SignInPopup from '@/react/popups/sign.in.popup'
import SignUpPopup from '@/react/popups/sign.up.popup'
import s from './header.module.scss'
import useGlobal from '@/store/index.js'

const Header = ({

  status

}) => {

  const router = useRouter();

  const [ isAuthBackOpened, setIsAuthBackOpened ] = useState( false );
  const [ isAuthBackReversed, setIsAuthBackReversed ] = useState( true );
  const [ showSignInPopup, setShowSignInPopup ] = useState( false );
  const [ showSignUpPopup, setShowSignUpPopup ] = useState( false );
  const [ codeModeClosed, setCodeModeClosed ] = useState( false );
  const [ globalState, globalActions ] = useGlobal()
  
  const [ logged , setLogged ] = useState(false)
  const [ loading, setLoading ] = useState(true)
  
  useEffect(() => {
    
    const fetchUser = async () => {
      
      await globalActions.user.setUser()
      
      setLoading(false)
      
    }
    
    fetchUser()
    
  }, [ globalActions ])
  
  useEffect(() => {
    
    if (globalState.user && globalState.user.role_id) {
      
      setLogged(true)
      
    } else {
      
      setLogged(false)
    }
    
  }, [ globalState.user ])
  
  if ( loading ) {
    
    return null
    
  }

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

  const closePopups = () => {

    setShowSignInPopup( false );
    setShowSignUpPopup( false );
    setIsAuthBackOpened( false );
    setIsAuthBackReversed( false );
    setCodeModeClosed( true );

  }

  function logIn() {

    alert( 'Войти в ИТ' );

    if ( authorized === false ) {

      router.push('/');
      setShowSignInPopup( false );
      setIsAuthBackOpened( false );

    }

  }

  return (

    <header className = {`fixed flex items-center justify-between ${ s.header } relative`}>

      <div className = {`${ s['auth-back'] } ${ isAuthBackOpened && s['auth-back--opened'] } ${ s.white_blur } absolute`}/>

      <div className = {`${ s['auth-back'] } ${ isAuthBackOpened && s['auth-back--opened'] } ${ s.logocircle } absolute`} >  

        <div className = {`${ s.green_circle } absolute`}/>

      </div>

      { isAuthBackOpened
      
        ? 
      
          <LogoWord className = {`${ s.header__logoword } absolute`}/>
        
        :

          <Fragment>

            <div className = {`${ s.logocircle } ${ !isAuthBackOpened && s['logocircle--closed'] } ${ setIsAuthBackReversed && s['logocircle--unanimate'] } absolute`}/>
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

        signIn = { () => signIn() }
        signUp = { () => signUp() }
        status = { status }
        logged = { logged }

      />

      <SignInPopup

        isOpened = { showSignInPopup }
        closePopup = { () => closePopups() }
        logIn = { () => logIn() }
        signUp = { () => signUp( true ) }
        bodyClassName = {`${ s.auth__popup } ${ s.auth__popup__in }`}

      />

      <SignUpPopup

        isOpened = { showSignUpPopup }
        closePopup = { () => closePopups() }
        closePopups = { () => closePopups }
        logIn = { () => signIn( true ) }
        signIn = { () => signIn( true ) }
        codeModeClosed = { codeModeClosed }
        bodyClassName = {`${ s.auth__popup } ${ s.auth__popup__up }`}

      />



    </header>

  )

}

export default Header;