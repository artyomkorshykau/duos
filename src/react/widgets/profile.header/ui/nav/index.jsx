import s from "@/react/widgets/profile.header/ui/profile.header.module.scss";
import Arrow from "@/react/components/icons/arrow.jsx";
import NotiseInfo from "@/react/components/icons/notise.info.jsx";

const Nav = () => {

  return (

    <div className={ `${ s.header__nav }` }>

      <div className = {`${ s.header__nav__back }`}>

        <Arrow direction = { 'left' } fill = { '#7C92A7' }/>
        <p className = {`text-14 ${ s.header__nav__back__title }`}>Назад</p>

      </div>

      <div className = {`text-13 ${ s.header__nav__breadcrumbs }`}>

        Кабинет эксперта • Профиль

      </div>

      <div className = {`${ s.header__nav__notise }`}>

        <NotiseInfo fill = { '#A7CAFF' }/>

      </div>

    </div>

  )

}

export default Nav