'use client'

import Carcas from '@/react/components/containers/carcas/index.jsx'
import ProfileHeader from '@/react/widgets/section.header/ui/index.jsx'
import { useEffect, useState } from 'react'
import s from './profile.page.module.scss'
import useGlobal from '@/store'
import dynamic from 'next/dynamic'

const ProfileWithoutSSR = dynamic(( ) => import('@/react/widgets/profile/ui/index.jsx'), { ssr: false } )

export default function ProfilePage () {
  
  const [ globalState, globalActions ] = useGlobal();
  
  const { profile } = globalActions
  
  useEffect(() => {
    
    profile.getLocations()
    
  }, [])

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
          
          <ProfileWithoutSSR/>
        
        </div>
      
      </Carcas>
    
    </main>
  
  )
  
}

