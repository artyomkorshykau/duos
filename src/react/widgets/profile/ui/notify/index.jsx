import React from 'react'
import s from '@/react/widgets/profile/ui/profile.module.scss'
import Switch from '@/react/components/switch/index.jsx'
import { useNotify } from '@/react/widgets/profile/ui/notify/model.js'


const Notify = () => {
  
  const { socials, handleToggle } = useNotify()
  
  return (
    
    <div className = { `${ s.profile__left_side__notify_wrapper }` }>
      
      <h4 className = { `text-20 ${ s.profile__left_side__notify_wrapper__title }`}>Получать уведомления</h4>
      
      <div className = { `${ s.profile__left_side__notify_wrapper__notifies }` }>
        
        { socials.map( ( social ) => {
          
          return (
            
            <div
              
              className = { `${ s.profile__left_side__notify_wrapper__notifies__notify }` }
              key = { social.id }
            
            >
              
              <p className = { `text-13 ${ s.profile__left_side__notify_wrapper__notifies__notify__title }`}>{ social.label }</p>
              <Switch
               
               toggle = { social.isToggle }
               setToggle = { () => handleToggle(social.id) }
               
              />
            
            </div>
          
          )
          
        } ) }
      
      </div>
    
    </div>
  
  )
  
}

export default Notify