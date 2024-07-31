import Status from '@/react/components/status';
import s from './accordion.parent.module.scss';
import { useState } from 'react';
import DefaultButton from '@/react/components/buttons/default.button';
import Arrow from '@/react/components/icons/arrow';
import cssIf from '@/scripts/helpers/css.if';
import DeletePopup from '@/react/popups/delete.popup';
import Plus from '@/react/components/icons/plus';

const AccordionParent = ({
  
  category,
  i,
  isDelete,
  content,
  title,
  type,
  deletePopupAction,
  children,
  addService

}) => {
  const [ showSignInPopup, setShowSignInPopup ] = useState( false );
  const [open, setOpen] = useState(true);
  
  const closePopups = () => {

    setShowSignInPopup(false)
    
  }

  return (
    <div className = {`${ s.accordion }`}>

      <div className = {`${ s.accordion__parent }`}>
        
        <div className = {`${ s.accordion__parent__wrapper }`}>
          
          <h3 className = {`${ s.accordion__parent__wrapper__title }`}>{ title }</h3>
          
          <p className = {`${ s.accordion__parent__wrapper__description }`}>{ category.description }</p>
          
        </div>

        <div className = {`${ s.accordion__parent__buttons }`}>
          
          <Status status = { category.status } />
          
          {isDelete && (

            <DefaultButton
              
              name = "Удалить"
              className = {`${ s.accordion__parent__buttons__delete }`}
              type = 'any'
              action = {() => setShowSignInPopup( true )}
              
            /> 

          )}

          <DefaultButton
            
            action = {() => setOpen( !open )}
            name = ''
            className = {`${ s.accordion__parent__buttons__arrow } ${ cssIf( open, s.accordion__parent__buttons__rotated ) }`}
            icon = { <Arrow direction = { 'left' } fill = { '#9ba1a1' } /> }
            type = 'any'
            
          />

        </div>

      </div> 

      {open && (

        <div className = {`${ s.accordion__children }`}>
          
          { content( i ) }
          
          <div>

            <p className = {`${ s.accordion__children__title }`}>Услуги в рамках направления</p>

            <div className = {`${ s.accordion__children__services }`}>

              { children }

              <div className="flex items-center justify-center">

                <DefaultButton

                  gray
                  name = "Добавить услугу"
                  className = {`${ s.accordion__children__services__button }`}
                  icon = { <Plus fill = { '#18009E' }/> }
                  positionIcon = 'right'
                  action = {() => addService( i ) }

                />

              </div>
              
            </div>
            
          </div>
          
        </div>
        
      )}

      <DeletePopup

        isOpened = { showSignInPopup }
        closePopup = { () => closePopups() }
        logIn = { () => logIn() }
        signUp = { () => signUp( true ) }
        title = { category.title }
        type = { type }
        action = {() => {
          
          closePopups()
          deletePopupAction( i )

        }}
        
      />
      
    </div>

  )

}

export default AccordionParent