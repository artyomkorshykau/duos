import Status from '@/react/components/status';
import s from './accordion.module.scss';
import { useState } from 'react';
import DefaultButton from '@/react/components/buttons/default.button';
import Arrow from '@/react/components/icons/arrow';
import cssIf from '@/scripts/helpers/css.if';
import ChoiceDirection from '../profile/ui/choice.direction/ui';
import Education from '../profile/ui/education/ui';
import Services from '../profile/ui/services/ui';

const Accordion = ({
  
  category,
  i

}) => {
  const [open, setOpen] = useState( false );

  return (
    <div className = {`${ s.accordion }`}>

      <div className = {`${ s.accordion__parent }`}>
        
        <div className = {`${ s.accordion__parent__wrapper }`}>
          
          <h3 className = {`${ s.accordion__parent__wrapper__title }`}>{ category.title }</h3>
          
          <p className = {`${ s.accordion__parent__wrapper__description }`}>{ category.description }</p>
          
        </div>

        <div className = {`${ s.accordion__parent__buttons }`}>
          
          <Status status = { category.status } />
          
          {category.isDelete && (

            <DefaultButton
              
              name = "Удалить"
              className = {`${ s.accordion__parent__buttons__delete }`}
              
            /> 

          )}

          <DefaultButton
            
            action = {() => setOpen( !open )}
            name = ''
            className = {`${ s.accordion__parent__buttons__arrow } ${ cssIf( open, s.accordion__parent__buttons__rotated ) }`}
            
          >

            <Arrow direction = { 'left' } fill = { '#9ba1a1' } />
            
          </DefaultButton>

        </div>

      </div> 

      {open && (

        <div className = {`${ s.accordion__children }`}>
          
          <ChoiceDirection i = { i }/>

          <Education i = { i }/>

          <Services services = { category.services } categoryIndex = { i }/>
          
        </div>
        
      )}
      
    </div>

  )

}

export default Accordion