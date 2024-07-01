import Link from "next/link";
import Logo from "../../../icons/logo";
import LogoWord from "../../../icons/logoword";
import LogoCircle from "@/react/components/icons/logocircle";
import HeaderSignPanel from "./header.sign.panel";
import s from "./header.module.scss";

const Header = ({

  authorized = false,
  isClient = false,
  userData = {},

}) => {

  //навигационная панель - назания и ссылки
  const NAVBAR = [

    {

      url: "/#about",
      name: "Главная"

    },

    {

      url: "/#about",
      name: "О проекте"

    },

    {

      url: "/#leads",
      name: "Направления"

    },

    {

      url: "/#services",
      name: "Услуги"

    },

    {

      url: "/#library",
      name: "Библиотека"

    },

    {

      url: "/#help",
      name: "Помощь"

    }

  ]

  return (

    <header className = {`fixed flex items-center justify-between ${ s.header }`}>

      { !authorized && <div className = {`${ s.white_blur } absolute`}/> }
      
      { !authorized && <LogoCircle className = {`${ s.header__logocircle } absolute`}/> }

      { !authorized
      
        ? 
      
          <LogoWord className = {`${ s.header__logoword } absolute`}/> 
        
        : 
        
          <Logo className = {`${ s.header__logo } absolute`}/>
        
      }

      <div className = {`flex items-center ${ s.header__navbar }`}>

        { NAVBAR.map(( el, key) => (

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
        userData = { userData }

      />

    </header>

  )

}

export default Header;