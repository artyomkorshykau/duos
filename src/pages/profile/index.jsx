'use client'

import Carcas from '@/react/components/containers/carcas/index.jsx'
import ProfileHeader from '@/react/widgets/section.header/ui/index.jsx'
import { useEffect, useState } from 'react'
import s from './profile.page.module.scss'
import useGlobal from '@/store'
import Profile from '@/react/widgets/profile/ui/index.jsx'


export default function ProfilePage() {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const { profile, service } = globalActions
  
  useEffect( () => {
    
    profile.getLocations()
    service.getServiceCategories()
    
  }, [] )
  
  const [ activeTab, setActiveTab ] = useState( 'Профиль' )
  
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

