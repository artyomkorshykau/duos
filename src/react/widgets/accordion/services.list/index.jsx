import Status from '@/react/components/status';
import s from './services.list.module.scss';
import { useState } from 'react';
import DefaultButton from '@/react/components/buttons/default.button';
import Arrow from '@/react/components/icons/arrow';
import cssIf from '@/scripts/helpers/css.if';
import Attachment from '@/react/components/attachment';
import useGlobal from '@/store';
import DeletePopup from '@/react/popups/delete.popup';
import General from '../../services/ui/general/ui';
import WorkClients from '../../services/ui/work.clients/ui';
import ServiceDescription from '../../services/ui/service.description/ui';

const ServicesList = ({
  
  el,
  categoryIndex,
  i

}) => {

  const [ globalState, globalActions ] = useGlobal()
  const [ open, setOpen ] = useState( false );
  const [ showSignInPopup, setShowSignInPopup ] = useState( false );
  
  const closePopups = () => {

    setShowSignInPopup( false );

  }

  const deleteServices = ( e ) => {

    e.stopPropagation()
    setShowSignInPopup(true)

  }

  return (
    <div className = {`${ s.services }`}>

      <div 
        className = {`${ s.services__parent } ${ cssIf( el.status === 'Filled', s.services__parent__green ) }`}
        onClick = {() => setOpen( !open )}
      >

        <div className = {`${ s.services__parent__wrapper }`}>
          
          <h3 className = {`${ s.services__parent__wrapper__title }`}>{ el.title }</h3>
          
          <p className = {`${ s.services__parent__wrapper__description }`}>{ el.description }</p>

        </div>

        <div className = {`${ s.services__parent__buttons }`}>

          <Status status = { el.status } />
          
          {el.isDelete && (

            <DefaultButton

              action = { deleteServices }
              name = "Удалить"
              className = {`${ s.services__parent__buttons__delete }`}
              type = 'any'

            /> 

          )}

          <DefaultButton

            name = ''
            className = {`${ s.services__parent__buttons__arrow } ${ cssIf( open, s.services__parent__buttons__rotated ) }`}
            icon = { <Arrow direction = { 'left' } fill = { '#9ba1a1' } /> }
            type = 'any'

          />

        </div>

      </div>

      {open && (

        <div className = {`${ s.services__children }`}>
        
          <div className = {`${ s.services__children__left }`}>
            
            <Attachment
              accept = ".png, .jpg, .tiff"
              files = { globalState.service.category?.[categoryIndex]?.services?.[i]?.files }
              onChange = { (files) => globalActions.service.setServiceFiles(files, categoryIndex, i) }
              
            />

          </div>

          <div className = {`${ s.services__children__right }`}>

            <General categoryIndex = { categoryIndex } i = { i }/>
            <WorkClients categoryIndex = { categoryIndex } i = { i }/>
            <ServiceDescription categoryIndex = { categoryIndex } i = { i }/>

          </div>
        
        </div>
        
      )}

      <DeletePopup

        isOpened = { showSignInPopup }
        closePopup = { () => closePopups() }
        logIn = { () => logIn() }
        signUp = { () => signUp( true ) }
        title = { el.title }
        type = "Услугу"

      />

    </div>

  )

}

export default ServicesList