import Popup from '@/react/popups/popup'
import { useMemo } from 'react'
import Textfield from '@/react/components/forms/textfield/index.jsx'
import DefaultButton from '@/react/components/buttons/default.button/index.jsx'
import s from './phone.change.module.scss'
import { usePhoneChange } from '@/react/popups/phone.change.popup/model.js'

const PhoneChangePopup = ( props ) => {
  const {
    isOpened,
    bodyClassName,
    closePopup,
    email = false,
    phone = false,
    popupRef
  } = props
  
  const {
    handleButtonAction,
    handleCancelButton,
    codeMode,
    setUserCode,
    userCode,
    error,
    newPhoneNumber,
    setNewPhoneNumber,
    newEmail,
    setNewEmail,
    codeRef
  } = usePhoneChange( closePopup, email, phone )
  
  const title = () => {
    if ( phone ) {
      if ( codeMode ) {
        return 'Введите код из SMS'
      } else {
        return 'Изменить номер'
      }
    }
    
    if ( email ) {
      if ( codeMode ) {
        return 'Введите код из SMS'
      } else {
        return 'Изменить почту'
      }
    }
  }
  
  const subTitle = () => {
    if ( phone ) {
      if ( codeMode ) {
        return `Отправили код на номер ${ newPhoneNumber }`
      } else {
        return 'Введите новый номер телефона'
      }
    }
    
    if ( email ) {
      if ( codeMode ) {
        return `Отправили код на почту ${ newEmail }`
      } else {
        return 'Введите новую почту'
      }
    }
  }
  
  const content = useMemo( () => {
    if ( phone ) {
      if ( codeMode ) {
        return (
          <div>
            <Textfield
              placeholder="Код"
              password
              ref={ codeRef }
              value={ userCode }
              maxLength={ 5 }
              error={ error?.errors?.code?.[ 0 ] }
              onChange={ ( e ) => setUserCode( e.target.value ) }
            />
            
            <DefaultButton
              name="Отмена"
              action={ handleCancelButton }
              width="full"
              gray
              className={ `${ s.phone_change_popup__cancelButton }` }
            />
          </div>
        )
      } else {
        return (
          <div>
            <Textfield
              value={ newPhoneNumber }
              placeholder={ 'Телефон' }
              onChange={ ( e ) => setNewPhoneNumber( e.target.value ) }
              type="phone"
              error={ error?.errors?.phone ? error?.errors?.phone?.[ 0 ] : error?.errors?.[ 0 ] }
            />
            
            <DefaultButton
              name="Получить код"
              action={ handleButtonAction }
              width="full"
              className={ ` ${ s.phone_change_popup__submitButton }` }
            />
          </div>
        )
      }
    }
    if ( email ) {
      if ( codeMode ) {
        return (
          <div>
            <Textfield
              placeholder="Код"
              password
              ref={ codeRef }
              value={ userCode }
              maxLength={ 5 }
              error={ error?.errors?.code?.[ 0 ] }
              onChange={ ( e ) => setUserCode( e.target.value ) }
            />
            
            <DefaultButton
              name="Отмена"
              action={ handleCancelButton }
              width="full"
              gray
              className={ `${ s.phone_change_popup__cancelButton }` }
            />
          </div>
        )
      } else {
        return (
          <div>
            <Textfield
              value={ newEmail }
              placeholder={ 'Email' }
              onChange={ ( e ) => setNewEmail( e.target.value ) }
              error={ error?.errors?.email ? error?.errors?.email?.[ 0 ] : error?.errors?.[ 0 ] }
            />
            
            <DefaultButton
              name="Получить код"
              action={ handleButtonAction }
              width="full"
              className={ ` ${ s.phone_change_popup__submitButton }` }
            />
          </div>
        )
      }
    }
  }, [ phone, email, codeMode, userCode, newPhoneNumber, newEmail, error ] )
  
  return (
    <Popup
      isOpened={ isOpened }
      closePopup={ closePopup }
      bodyClassName={ bodyClassName }
      background
      subtitleMargin
      closeBackground
      title={ title() }
      subtitle={ subTitle() }
      boxRef={ popupRef }
    >
      { content }
    </Popup>
  )
}

export default PhoneChangePopup
