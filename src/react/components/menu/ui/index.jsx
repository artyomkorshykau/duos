import s from './menu.module.scss'
import Cabinet from "@/react/components/icons/menu.cabinet";
import Promotion from "@/react/components/icons/menu.promotion";
import Chat from "@/react/components/icons/menu.chat";
import Services from "@/react/components/icons/menu.services";
import Articles from "@/react/components/icons/menu.articles";
import {useState} from "react";
import cssIf from "@/scripts/helpers/css.if";

const menuItems = [

  { id: 1, title: 'Кабинет', icon: <Cabinet/> },
  { id: 2, title: 'Продвижение', icon: <Promotion/> },
  { id: 3, title: 'Чат', icon: <Chat/> },
  { id: 4, title: 'Услуги', icon: <Services/> },
  { id: 5, title: 'Статьи', icon: <Articles/> }

]

const Menu = () => {

  const [ activeItem, setActiveItem ] = useState(null)

  return (

    <div className = {`${ s.menu }`}>

      { menuItems.map( item => {

        return (

          <div

            className = {`${ s.menu__item } ${cssIf(activeItem === item.id, s.active)}`}
            key = { item.id }
            onClick = { () => setActiveItem(  item.id )}

          >

            <div>{ item.icon }</div>
            <p className = {`text-13 ${ s.menu__title }`}>{ item.title }</p>

          </div>

        )

      })

      }

    </div>

  )

}

export default Menu