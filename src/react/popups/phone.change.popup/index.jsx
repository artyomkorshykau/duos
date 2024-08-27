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
    codeRef
    
  } = usePhoneChange(closePopup, isOpened)
  
  const content = useMemo( () => {
    
    if ( codeMode ) {
      
      return (
        
        <div>
          
          <Textfield
            
            placeholder = "Код"
            password
            ref = { codeRef }
            value = { userCode }
            maxLength = { 5 }
            error = { error }
            onChange = { ( e ) => setUserCode( e.target.value ) }
          
          />
          
          <DefaultButton
            
            name = "Отмена"
            action = { handleCancelButton }
            width = "full"
            gray
            className = { `${ s.phone_change_popup__cancelButton }` }
          
          />
        
        </div>
      
      )
      
    } else {
      
      return (
        
        <div>
          
          <Textfield
            
            value = { newPhoneNumber }
            placeholder = { 'Телефон' }
            onChange = { ( e ) => setNewPhoneNumber( e.target.value ) }
            type = "phone"
          
          />
          
          <DefaultButton
            
            name = "Получить код"
            action = { handleButtonAction }
            width = "full"
            className = { ` ${ s.phone_change_popup__submitButton }` }
          
          />
        
        </div>
      
      )
      
    }
    
  }, [ codeMode, userCode, newPhoneNumber ] )
  
  return (
    
    <Popup
      
      isOpened = { isOpened }
      closePopup = { closePopup }
      bodyClassName = { `${ bodyClassName }` }
      background
      subtitleMargin
      closeBackground
      title = { codeMode ? 'Введите код из SMS' : 'Изменить номер' }
      subtitle = { codeMode
        
        ? `Отправили код на номер ${ newPhoneNumber }`
        : 'Введите новый номер телефона' }
    
    >
      
      { content }
    
    </Popup>
  
  )
  
}

export default PhoneChangePopup