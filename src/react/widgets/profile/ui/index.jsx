import s from './profile.module.scss'
import Avatar from '@/react/widgets/profile/ui/avatar/index.jsx'
import Notify from '@/react/widgets/profile/ui/notify/index.jsx'
import ProfileInfo from '@/react/widgets/profile/ui/profile.info/index.jsx'

const Profile = () => {

  return (

    <div className = { `${ s.profile }`}>
      
      <div className = { `${ s.profile__left_side }`}>
        
        <Avatar/>
        <Notify/>
        
      </div>
      
      <div className = { `${ s.profile__right_side }` }>
        
        <ProfileInfo/>
      
      </div>
    
    </div>
  
  )
  
}

export default Profile