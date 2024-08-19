import Carcas from "@/react/components/containers/carcas/index.jsx";
import ProfileHeader from "@/react/widgets/profile.header/ui/index.jsx";
import Profile from "@/react/widgets/profile/index.jsx";

const ProfilePage = () => {

  return (

    <main className = {``}>

      <Carcas

        authorized = { true }

      >

        <div>

          <ProfileHeader/>
          <Profile/>

        </div>

      </Carcas>

    </main>

  )

}

export default ProfilePage