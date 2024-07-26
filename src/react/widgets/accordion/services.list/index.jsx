import Status from '@/react/components/status';
import s from './services.list.module.scss';
import { useState } from 'react';
import DefaultButton from '@/react/components/buttons/default.button';
import Arrow from '@/react/components/icons/arrow';
import cssIf from '@/scripts/helpers/css.if';
import WorkClients from '../../profile/ui/work.clients/ui';
import General from '../../profile/ui/general/ui';
import ServiceDescription from '../../profile/ui/service.description/ui';

const ServicesList = ({
  
  el,
  categoryIndex,
  i

}) => {

  const [open, setOpen] = useState( false );

  return (
    <div className = {`${ s.services }`}>

      <div 
        className = {`${ s.services__parent } ${ cssIf( el.status === 'Filled', s.services__parent__green ) }`}
        onClick = {() => setOpen(!open)}
      >

        <div className = {`${ s.services__parent__wrapper }`}>
          
          <h3 className = {`${ s.services__parent__wrapper__title }`}>{ el.title }</h3>
          
          <p className = {`${ s.services__parent__wrapper__description }`}>{ el.description }</p>

        </div>

        <div className = {`${ s.services__parent__buttons }`}>

          <Status status = { el.status } />
          
          {el.isDelete && (

            <DefaultButton

              action = {(e) => e.stopPropagation()}
              name = "Удалить"
              className = {`${ s.services__parent__buttons__delete }`}

            /> 

          )}

          <DefaultButton

            name = ''
            className = {`${ s.services__parent__buttons__arrow } ${ cssIf( open, s.services__parent__buttons__rotated ) }`}

          >
            <Arrow direction = { 'left' } fill={ '#9ba1a1' } />
            
          </DefaultButton>

        </div>

      </div>

      {open && (

        <div className = {`${ s.services__children }`}>
        
          <div className = {`${ s.services__children__left }`}>
            
            <div className = {`${ s.services__children__left__block }`}></div>
            
            <p  className = {`${ s.services__children__left__text }`}>Загрузите картинку к услуге, она будет отображаться в качестве обложки услуги</p>

          </div>

          <div className = {`${ s.services__children__right }`}>

            <General categoryIndex = { categoryIndex } i = { i }/>
            <WorkClients categoryIndex = { categoryIndex } i = { i }/>
            <ServiceDescription categoryIndex = { categoryIndex } i = { i }/>

          </div>
        
        </div>
        
      )}

    </div>

  )

}

export default ServicesList