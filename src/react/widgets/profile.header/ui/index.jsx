import s from './profile.header.module.scss'
import { useState } from "react";
import cssIf from "@/scripts/helpers/css.if.js";
import Nav from "@/react/widgets/profile.header/ui/nav/index.jsx";
import Subtitle from "@/react/widgets/profile.header/ui/subtitle/index.jsx";
import Statistics from "@/react/widgets/profile.header/ui/statistics/index.jsx";
import Tabs from "@/react/widgets/profile.header/ui/tabs/index.jsx";
import Title from "@/react/widgets/profile.header/ui/title/index.jsx";

const ProfileHeader = () => {

  const [ collapsed, setCollapsed ] = useState(false )

  return (

    <div

      className = {`${ s.header } ${cssIf( collapsed, s.collapsed )}`}
      onClick = { () => setCollapsed(!collapsed )}

    >

      { !collapsed && <Nav/> }
       <Title/>
      { !collapsed && <Subtitle/> }
      { !collapsed && <Statistics/> }
      <Tabs collapsed = { collapsed }/>

    </div>

  )

}

export default ProfileHeader