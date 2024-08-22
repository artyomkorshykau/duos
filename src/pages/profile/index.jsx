import Carcas from '@/react/components/containers/carcas/index.jsx'
import ProfileHeader from '@/react/widgets/section.header/ui/index.jsx'
import Profile from '@/react/widgets/profile/ui/index.jsx'
import { useState } from 'react'
import s from './profile.page.module.scss'

export default function ProfilePage () {

  const [ activeTab , setActiveTab ] = useState('Профиль' )

  return (
    
    <main>
      
      <Carcas
        
        authorized={ true }
      
      >
        
        <div className={ ` ${ s.profile_page }` }>
          
          <ProfileHeader
            
            activeTab={ activeTab }
            setActiveTab={ setActiveTab }
          
          />
          
          <Profile/>
        
        </div>
      
      </Carcas>
    
    </main>
  
  )
  
}

