'use client'

import Carcas from '@/react/components/containers/carcas'
import Pagination from '@/react/widgets/pagination/ui'
import s from './constructor.module.scss'
import ConstructorHeader from '@/react/widgets/constructor.header/ui'
import { useState } from 'react'
import SavePopup from '@/react/popups/save.popup/index.jsx'

export default function ConstructorPage() {
  
  const [ activeTab, setActiveTab ] = useState( 'Профиль' )
  const [ openSavePopup, setOpenSavePopup ] = useState( false )
  
  return (
    
    <main>
      
      <Carcas
        
        authorized={ true }
      
      >
        
        <div className={ `${ s.content }` }>
          
          <ConstructorHeader
            
            activeTab={ activeTab }
            setActiveTab={ setActiveTab }
          
          />
          
          <Pagination
            
            nextStep={ () => setOpenSavePopup( true ) }
            activeStep={ 'constructor' }
            prevStep={ () => {console.log( 'prev' )} }
          
          />
        
        </div>
        
        <SavePopup
          
          isOpened={ openSavePopup }
          closePopup={ () => setOpenSavePopup( false ) }
        
        />
      
      </Carcas>
    
    </main>
  
  )
  
}
