import { useState } from 'react';
import s from './accordion.children.module.scss';
import cssIf from '@/scripts/helpers/css.if';
import Status from '@/react/components/status';
import DefaultButton from '@/react/components/buttons/default.button';
import Arrow from '@/react/components/icons/arrow';
import DeletePopup from '@/react/popups/delete.popup';

const AccordionChildren = ({
  
  el,
  categoryIndex,
  i,
  isDelete,
  deletePopupAction,
  title,
  content,
  changeStatus,
  status

}) => {
  const [ open, setOpen ] = useState( true );
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
        className = {`${ s.services__parent } ${ cssIf( status === 'Filled', s.services__parent__green ) }`}
        onClick={() => {
          changeStatus && changeStatus(categoryIndex, i)
          setOpen(!open)
        }}
      >

        <div className = {`${ s.services__parent__wrapper }`}>
          
          <h3 className = {`${ s.services__parent__wrapper__title }`}>{ title }</h3>
          
          <p className = {`${ s.services__parent__wrapper__description }`}>{ el.description }</p>

        </div>

        <div className = {`${ s.services__parent__buttons }`}>

          <Status status = { status } />
          
          {isDelete && (

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

        content( i, categoryIndex, setOpen )
        
      )}

      <DeletePopup

        isOpened = { showSignInPopup }
        closePopup = { () => closePopups() }
        logIn = { () => logIn() }
        signUp = { () => signUp( true ) }
        title = { el.title }
        type = "Услугу"
        action = {() => {
          closePopups()
          deletePopupAction(categoryIndex, i)
        }}

      />

    </div>

  )

}

export default AccordionChildren