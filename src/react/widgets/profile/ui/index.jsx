import s from './profile.module.scss'
import FullName from '@/react/widgets/profile/ui/full.name/ui';
import Nickname from '@/react/widgets/profile/ui/nickname/ui';
import TaxStatus from '@/react/widgets/profile/ui/tax.status/ui';
import Location from '@/react/widgets/profile/ui/location/ui';
import Contacts from '@/react/widgets/profile/ui/contacts/ui';

const Profile = () => {

  return (

    <div className={`${ s.profile }`}>

      <FullName/>
      <Nickname/>
      <TaxStatus/>
      <Location/>
      <Contacts/>

    </div>

  )

}

export default Profile