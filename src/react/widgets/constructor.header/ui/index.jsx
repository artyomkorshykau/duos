import s from './constructor.header.module.scss'
import Nav from '@/react/widgets/constructor.header/ui/nav/index.jsx'
import Title from '@/react/widgets/constructor.header/ui/title/index.jsx'
import Controls from '@/react/widgets/constructor.header/ui/controls/index.jsx'
import { useState } from 'react'
import cssIf from '@/scripts/helpers/css.if.js'
import Tabs from '@/react/widgets/section.header/ui/tabs/index.jsx'
import useGlobal from '@/store/index.js'

const ConstructorHeader = ( props ) => {
  
  const {
    
    activeTab,
    setActiveTab
    
  } = props
  
  const [ collapsed, setCollapsed ] = useState( false )
  const [ globalState, globalActions ] = useGlobal()
  
  return (
    
    <div
      
      className={ `${ s.constructorHeader }
      ${ cssIf( collapsed, s.collapsed ) }` }
      onClick={ () => setCollapsed( !collapsed ) }
    
    >
      
      <div
        className={ `${ s.constructorHeader__wrapper } ` }>
        
        <Nav/>
        <Title/>
        <Controls/>
        <Tabs
          
          activeTab={ activeTab }
          setActiveTab={ setActiveTab }
          tabs={ globalState.constructorTabs }
          className = { s.constructorHeader__wrapper__tabs }
          classNameContent = { s.constructorHeader__wrapper__tabs__content }
        
        />
        
        
      
      </div>
    
    </div>
  
  )
  
}

export default ConstructorHeader