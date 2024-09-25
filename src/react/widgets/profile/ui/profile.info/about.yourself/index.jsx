import Textarea from '@/react/components/forms/textarea/index.jsx'
import s from '../../profile.module.scss'
import useGlobal from '@/store/index.js'
import Save from '@/react/components/icons/save.jsx'
import { useState } from 'react'

export const AboutYourself = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  const { text } = globalState?.publications?.categories?.[0].profileInfo[1] || {}
  const { setAboutYourselfInfo } = globalActions.publications
  const [ edit, setEdit ] = useState(false)
  
  const handleOnChange = (e) => {
    
    const newValue = e.target.value
    
    if ( newValue !== text ) {
      
      setEdit(true)
      
    } else {
      
      setEdit(false)
      
    }
    
    setAboutYourselfInfo(1, newValue)
    
  }
  
  const handleOnSave = (e) => {
    
    e.preventDefault();
    e.stopPropagation();
    alert('Отправка на сервер')
    setEdit(false)
    
  }
  
  return (
    
    <div className = { `${ s.profile__right_side__profile_info__about_yourself }`}>
      
      <h4 className = { `text-20 ${ s.profile__right_side__profile_info__about_yourself__title }` }>Расскажите о себе</h4>
      <p className = { `text-16 ${ s.profile__right_side__profile_info__about_yourself__description }` }>
        
        Напишите 3-7 предложений о себе, что бы вы хотели сообщить своим будущим клиентам (информация публичная)
        
      </p>
      
      
      <Textarea
        
        placeholder = { 'О себе' }
        value = { text }
        onChange = {  handleOnChange }
        icon = { edit &&
          
          <Save fill = { 'white' }/>
      
      }
        withSaveIcon
        onSave = { handleOnSave }
      
      />
    
    </div>
  
  )
  
}

export default AboutYourself