import s from "@/react/widgets/section.header/ui/section.header.module.scss";
import Arrow from "@/react/components/icons/arrow.jsx";
import NotiseInfo from "@/react/components/icons/notise.info.jsx";
import Link from "next/link";

const Nav = () => {

  return (

    <div className={ `${ s.header__nav }` }>

      <Link className = {`${ s.header__nav__back }`} href = {'/'}>

        <Arrow direction = { 'left' } fill = { '#7C92A7' }/>
        <p className = {`text-14 ${ s.header__nav__back__title }`}>Назад</p>

      </Link>

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