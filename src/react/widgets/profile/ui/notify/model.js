import { useState } from 'react'

const initialSocials = [
  
  { id: 0, label: 'E-mail', isToggle: false },
  { id: 1, label: 'SMS', isToggle: false },
  { id: 2, label: 'WhatsApp', isToggle: false },
  { id: 3, label: 'Telegram', isToggle: false }

]

export const useNotify = () => {
  
  const [socials, setSocials] = useState(initialSocials)
  
  const handleToggle = ( id ) => {
    
    setSocials((prevSocials) =>
      
      prevSocials.map((social) =>
        
        social.id === id
          
          ? { ...social, isToggle: !social.isToggle }
          : social
      
      )
    
    )
    
  }
  
  return { socials, handleToggle}
  
}