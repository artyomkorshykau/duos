import s from './services.module.scss'
import useGlobal from '@/store'
import AccordionService from './accordion.service'
import CompletedDirections from '@/react/widgets/completed.directions/index.jsx'
import AddDirection from '@/react/widgets/add.direction/index.jsx'

const Services = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const { service } = globalState
  
  return (
    
    <div className={ `${ s.wrapper }` }>
      
      <CompletedDirections/>
      
      { service.category.map( ( category, index ) => (
        
        <AccordionService category={ category } key={ category.id }
                          index={ index }/>
      
      ) ) }
      
      <AddDirection/>
    
    </div>
  
  )
  
}

export default Services