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
    closePopup
    
  } = props
  
  const {
    
    phoneNumber,
    setPhoneNumber,
    handleButtonAction,
    handleCancelButton,
    codeMode,
    setUserCode,
    userCode,
    error
    
  } = usePhoneChange(closePopup)
  
  const content = useMemo( () => {
    
    if ( codeMode ) {
      
      return (
        
        <div>
          
          <Textfield
            
            placeholder = "Код"
            password
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
            
            value = { phoneNumber }
            placeholder = { 'Телефон' }
            onChange = { ( e ) => setPhoneNumber( e.target.value ) }
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
    
  }, [ codeMode, userCode ] )
  
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
        
        ? `Отправили код на номер ${ phoneNumber }`
        : 'Введите новый номер телефона' }
    
    >
      
      { content }
    
    </Popup>
  
  )
  
}

export default PhoneChangePopup