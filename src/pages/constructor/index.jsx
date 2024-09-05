'use client'

import Carcas from '@/react/components/containers/carcas'
import Pagination from '@/react/widgets/pagination/ui'
import s from './constructor.module.scss'
import ConstructorHeader from '@/react/widgets/constructor.header/ui'

export default function ConstructorPage() {
  
  return (
    
    <main>
      
      <Carcas
        
        authorized={ true }
      
      >
        
        <div className = { `${ s.content }` }>
              
          <ConstructorHeader />
              
          <div style = {{ height: "2000px", minHeight: "2000px" }}>content</div>
              
          <Pagination
                
            nextStep = { () => {console.log("next")} }
            activeStep = { "constructor" }
            prevStep = { () => {console.log("prev")} }
              
          />
            
        </div>
      
      </Carcas>
    
    </main>
  
  )
  
}
