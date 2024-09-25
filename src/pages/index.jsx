import Carcas from '@/react/components/containers/carcas'
import { useEffect, useState } from 'react'
import useGlobal from '@/store/index.js'

export default function Home() {
  
  const [ globalState, globalActions ] = useGlobal()
  const { profile } = globalActions
  const [ domLoaded, setDomLoaded ] = useState( false )
  
  useEffect( () => {
    
    profile.getLocations()
    setDomLoaded( true )
    
  }, [] )
  
  if ( !domLoaded ) {
    
    return null
    
  }
  
  return (
    
    <main className={ `flex justify-center items-center h-dvh` }>
      
      <Carcas
      
      >
      
      </Carcas>
    
    
    </main>
  
  )
  
}
