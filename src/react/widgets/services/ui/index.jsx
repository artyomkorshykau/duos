import CompletedDirections from '../../completed.directions'
import s from './services.module.scss'
import AddDirection from '../../add.direction'
import useGlobal from '@/store'
import AccordionService from './accordion.service'

const Services = () => {

  const [ globalState, globalActions ] = useGlobal()
  
  const { service } = globalState;

  return (

    <div className = {`${ s.wrapper }`}>
          
      <CompletedDirections />

        {service.category.map(( category, i ) => (

          <AccordionService category = { category } key={ i } index = { i } />
           
        ))}

      <AddDirection />

    </div>

  )

}

export default Services