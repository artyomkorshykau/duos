import s from "@/react/widgets/profile.header/ui/profile.header.module.scss";
import DefaultButton from "@/react/components/buttons/default.button/index.jsx";
import { useState } from "react";
import cssIf from "@/scripts/helpers/css.if.js";

const Tabs = ( props ) => {

  const {

    activeTab,
    setActiveTab

  } = props

  return (

    <div className={ `${ s.header__tabs }` }>

      <DefaultButton

        name = { 'Профиль' }
        className = {`text-14 
        ${ s.header__tabs__button } 
        ${cssIf(activeTab === 'Профиль', s.header__tabs__button__active)}`}
        action = { (e) => {

          e.stopPropagation()
          setActiveTab('Профиль')

        }}

      >

          <div className = {`${ s.header__tabs__button__content }`}>12</div>

      </DefaultButton>

      <DefaultButton

        name = { 'Достижения' }
        className = {`text-14
        ${ s.header__tabs__button } 
        ${ cssIf(activeTab === 'Достижения', s.header__tabs__button__active)}` }
        action = { (e) => {

          e.stopPropagation()
          setActiveTab('Достижения')

        }}

      >

          <div className = {`${ s.header__tabs__button__content }`}>12</div>

      </DefaultButton>

      <DefaultButton

        name = { 'Направления' }
        className = {`text-14
        ${ s.header__tabs__button } 
        ${ cssIf( activeTab === 'Направления', s.header__tabs__button__active ) }`}
        action = { (e) => {

          e.stopPropagation()
          setActiveTab('Направления')

        }}

      >

          <div className = {`${ s.header__tabs__button__content }`}>12</div>

      </DefaultButton>

    </div>

  )

}

export default Tabs