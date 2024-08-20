import s from "@/react/widgets/section.header/ui/section.header.module.scss";
import Eye from "@/react/components/icons/eye.icon.jsx";
import Bookmark from "@/react/components/icons/bookmark.jsx";
import Resends from "@/react/components/icons/resends.jsx";

const Statistics = () => {

  return (

    <div className={ `${ s.header__statistics }` }>

      <div className = {`text-13 ${ s.header__statistics__block }`}>

        <Eye stroke = {'#7C92A7'}/>
        <p>14 678</p>

      </div>

      <div className = {`${ s.header__statistics__block }`}>

        <Bookmark fill = {'#7C92A7'}/>
        <p>567</p>

      </div>

      <div className = {`${ s.header__statistics__block }`}>

        <Resends stroke = {'#7C92A7'}/>
        <p>15</p>

      </div>

    </div>

  )

}

export default Statistics