'use client'

import DefaultButton from '@/react/components/buttons/default.button';
import s from '../../profile.module.scss'
import ServicesList from '@/react/widgets/accordion/services.list';
import Plus from '@/react/components/icons/plus';

const Services = ({

  services,
  categoryIndex

}) => {

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}>Услуги в рамках направления</p>

      <div className = {`${ s.profile__section__services }`}>

        {services.map(( el,i ) => (

          <ServicesList key = { i } el = { el } categoryIndex = { categoryIndex } i = { i }/> 
          
        ))}

        <div className="flex items-center justify-center">

          <DefaultButton

            gray
            name = "Добавить услугу"
            className = {`${ s.wrapper__button }`}
            icon = { <Plus fill = { '#18009E' }/> }
            positionIcon = 'right'

          />

        </div>
        
      </div>
      
    </div>

  )

}

export default Services
