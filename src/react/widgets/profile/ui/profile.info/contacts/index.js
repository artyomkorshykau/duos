import s from '@/react/widgets/profile/ui/profile.module.scss'
import Cross from '@/react/components/icons/cross.jsx'
import Save from '@/react/components/icons/save.jsx'
import useGlobal from '@/store/index.js'
import { useEffect, useRef, useState } from 'react'
import Pencil from '@/react/components/icons/pencil.jsx'
import cssIf from '@/scripts/helpers/css.if.js'
import PhoneChangePopup from '@/react/popups/phone.change.popup/index.jsx'

const Contacts = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  const { phoneNumber, email } = globalState.profile
  const { setPhoneNumber, setEmail } = globalActions.profile
  const [ editNumber, setEditNumber ] = useState(false)
  const [ editEmail, setEditEmail ] = useState(false)
  const numberRef = useRef(null)
  const emailRef = useRef(null)
  const controlsRef = useRef(null)
  
  const handleEditNumber = () => {
    
    setEditNumber(true)
    numberRef.current.focus()
    
  }
  
  const handleEditEmail = () => {
    
    setEditEmail(true)
    emailRef.current.focus()
    
  }
  
  const handleClearNumber = () => {
    
    setPhoneNumber('')
    numberRef.current.focus()
    
  }
  
  const handleClearEmail = () => {
    
    setEmail('')
    emailRef.current.focus()
    
  }
  
  const handleSaveClick = () => {
    
    alert('Отправка на сервер')
    setEditNumber(false)
    setEditEmail(false)
    numberRef.current.blur()
    emailRef.current.blur()
    
  }
  
  const handleClickOutside = (e) => {
    
      if ( ( numberRef.current || emailRef.current )
        && ( !numberRef.current.contains(e.target) || !emailRef.current.contains(e.target) ) &&
        controlsRef.current && !controlsRef.current.contains(e.target)
      
      ) {
        
        setEditEmail(false)
        numberRef.current.blur()
        emailRef.current.blur()
        
      }
      
    
  }
  
  const handleKeyDown = (e) => {
    
    if (e.key === 'Escape') {
      
      setEditNumber(false)
      setEditEmail(false)
      numberRef.current.blur()
      emailRef.current.blur()
      
    } else if (e.key === 'Enter') {
      
      handleSaveClick()
      
    }
    
  }
  
  useEffect(() => {
    
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      
    }
    
  }, [])
  
  return (
    
    <div className = {` ${ s.profile__right_side__profile_info__contacts}`}>
      
      <div className = { `${ s.profile__right_side__profile_info__nickname }` }>
        
        <p className = { `text-20 ${ s.profile__right_side__profile_info__nickname__title }` }>Контакты</p>
        
        <div className = { `
        ${ s.profile__right_side__profile_info__nickname__textfield }
        ${cssIf(editNumber, s.profile__right_side__profile_info__nickname__textfield__active )}
        ` }>
          
          <input
            
            value = { phoneNumber }
            placeholder = { 'Телефон' }
            onChange = { (e) => setPhoneNumber( e.target.value ) }
            ref = { numberRef }
            onClick = { handleEditNumber }
          
          />
          
          { editNumber && phoneNumber.length > 0 &&
            
            <div
              
              className={ `${ s.profile__right_side__profile_info__nickname__textfield__controls }` }
              ref = { controlsRef }
            
            >
            
            <Cross
              
              stroke={ '#7C92A7' }
              onClick={ handleClearNumber }
              className={ `${ s.profile__right_side__profile_info__nickname__textfield__controls__cross }` }
            
            />
            
            <div
              
              className={ `${ s.profile__right_side__profile_info__nickname__textfield__controls__save }` }
              onClick={ handleSaveClick }
            
            >
              
              <Save fill={ '#fff' }/>
            
            </div>
          
          </div>
          
          }
          
          { !editNumber &&
            
            <Pencil className={ `${ s.profile__right_side__profile_info__nickname__textfield__pencil }` }/>
          
          }
        
        </div>
      
      </div>
      
      <div className = { `
      ${ s.profile__right_side__profile_info__nickname }
      ${cssIf(editEmail, s.profile__right_side__profile_info__nickname__textfield__active )}
      
      ` }>
        
        <div className = { `${ s.profile__right_side__profile_info__nickname__textfield }` }>
          
          <input
            
            value = { email }
            placeholder = { 'Email' }
            onChange = { (e) => setEmail( e.target.value ) }
            ref = { emailRef }
            onClick = { handleEditEmail }
          
          />
          
          { editEmail && email.length > 0 &&
            
            <div
              
              className={ `${ s.profile__right_side__profile_info__nickname__textfield__controls }` }
              ref = { controlsRef }
            
            >
            
            <Cross
              
              stroke={ '#7C92A7' }
              onClick={ handleClearEmail }
              className={ `${ s.profile__right_side__profile_info__nickname__textfield__controls__cross }` }
            
            />
            
            <div
              
              className={ `${ s.profile__right_side__profile_info__nickname__textfield__controls__save }` }
              onClick={ handleSaveClick }
            
            >
              
              <Save fill={ '#fff' }/>
            
            </div>
          
          </div>
          
          }
          
          { !editEmail &&
            
            <Pencil className={ `${ s.profile__right_side__profile_info__nickname__textfield__pencil }` }/>
          
          }
          
        </div>
      
      </div>
      
      <PhoneChangePopup
      
      isOpened = { editNumber }
      bodyClassName = { `${ s.profile__right_side__phone_change_popup }` }
      closePopup = { () => setEditNumber( false )}
      
      />
      
    
    </div>
  
  )
  
}

export default Contacts