import s from './profile.module.scss'
import FullName from "@/react/widgets/steps/profile/ui/full.name/ui/index.jsx";
import Nickname from "@/react/widgets/steps/profile/ui/nickname/ui/index.jsx";
import TaxStatus
  from "@/react/widgets/steps/profile/ui/tax.status/ui/index.jsx";
import Contacts from "@/react/widgets/steps/profile/ui/contacts/ui/index.jsx";

const Profile = () => {

  return (

    <div className = {`${ s.profile }`}>

      <FullName/>
      <Nickname/>
      <TaxStatus/>
      <Location/>
      <Contacts/>

    </div>

  )

}

export default Profile