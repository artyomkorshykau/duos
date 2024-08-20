import Carcas from "@/react/components/containers/carcas/index.jsx";
import ProfileHeader from "@/react/widgets/profile.header/ui/index.jsx";
import Profile from "@/react/widgets/profile/index.jsx";
import { useState } from "react";

const ProfilePage = () => {

  const [ activeTab , setActiveTab ] = useState('Профиль' )

  return (

    <main className = {``}>

      <Carcas

        authorized = { true }

      >

        <div>

          <ProfileHeader

            activeTab = { activeTab }
            setActiveTab = { setActiveTab }

          />
          <Profile/>

        </div>

      </Carcas>

    </main>

  )

}

export default ProfilePage