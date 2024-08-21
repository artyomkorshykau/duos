import React from 'react'
import s from '@/react/widgets/profile/ui/profile.module.scss'
import Nickname from '@/react/widgets/steps/profile/ui/nickname/ui/index.jsx'
import Contacts from '@/react/widgets/steps/profile/ui/contacts/ui/index.jsx'
import AboutYourself
  from '@/react/widgets/profile/ui/profile.info/about.yourself/index.jsx'
import FullName from '@/react/widgets/steps/profile/ui/full.name/ui/index.jsx'
import TaxStatus from '@/react/widgets/steps/profile/ui/tax.status/ui/index.jsx'
import Location from '@/react/widgets/steps/profile/ui/location/ui/index.jsx'

const ProfileInfo = () => {
  
  return (
    
    <div className={ `${ s.profile__right_side__profile_info }` }>
      
      <Nickname disabled editable/>
      <Contacts disabled editable/>
      <AboutYourself disabled editable/>
      
      <div className = { `${ s.profile__right_side__profile_info__separator }`}></div>
      
      <FullName disabled />
      <TaxStatus disabled />
      <Location disabled />
    
    </div>
  
  )
  
}

export default ProfileInfo