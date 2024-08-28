import Carcas from '@/react/components/containers/carcas'
import { useEffect } from 'react'
import useGlobal from '@/store/index.js'

export default function Home() {
  
  const [ globalState, globalActions ] = useGlobal()
  const { profile } = globalActions
  
  useEffect(() => {
    
    profile.getLocations()
    
  }, [])
  
  return (

    <main className={ `flex justify-center items-center h-dvh` }>

      <Carcas

      >

      </Carcas>


    </main>

  );

}
