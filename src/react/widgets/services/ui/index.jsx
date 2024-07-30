import { service_category } from '@/constants/services'
import CompletedDirections from '../../completed.directions'
import s from './services.module.scss'
import Accordion from '../../accordion'
import AddDirection from '../../add.direction'

const Services = () => {

  return (

    <div className = {`${ s.wrapper }`}>
          
      <CompletedDirections />

        {service_category.map(( category, i ) => (

          <Accordion
            
            key = { i }
            category = { category }
            i = { i }
            
          />
            
        ))}

      <AddDirection />

    </div>

  )

}

export default Services