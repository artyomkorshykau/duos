import s from "@/react/widgets/profile.header/ui/profile.header.module.scss";
import DefaultButton from "@/react/components/buttons/default.button/index.jsx";

const Tabs = ( { collapsed } ) => {

  return (

    <div className={ `${ s.header__tabs }` }>

      <DefaultButton

        name = { 'Профиль' }
        className = {`text-14 ${ s.header__tabs__button }`}
        action = { (e) => { e.stopPropagation() }}

      >

        { collapsed &&

          <div className = {`${ s.header__tabs__button__content }`}>12</div>

        }

      </DefaultButton>

      <DefaultButton

        name = { 'Достижения' }
        className = {`${ s.header__tabs__button }`}
        action = { (e) => { e.stopPropagation() }}
        gray

      >

        { collapsed &&

          <div className = {`${ s.header__tabs__button__content }`}>12</div>

        }

      </DefaultButton>

      <DefaultButton

        name = { 'Направления' }
        className = {`${ s.header__tabs__button }`}
        action = { (e) => { e.stopPropagation() }}
        gray

      >

        { collapsed &&

          <div className = {`${ s.header__tabs__button__content }`}>12</div>

        }

      </DefaultButton>

    </div>

  )

}

export default Tabs