import Textarea from '@/react/components/forms/textarea/index.jsx'
import s from '../../profile.module.scss'

export const AboutYourself = () => {
  
  return (
    
    <div className = { `${ s.profile__right_side__profile_info__about_yourself }`}>
      
      <h4 className = { `text-20 ${ s.profile__right_side__profile_info__about_yourself__title }` }>Расскажите о себе</h4>
      <p className = { `text-16 ${ s.profile__right_side__profile_info__about_yourself__description }` }>
        
        Напишите 3-7 предложений о себе, что бы вы хотели сообщить своим будущим клиентам (информация публичная)
        
      </p>
      
      
      <Textarea
        
        placeholder = { 'О себе' }
        value = { '' }
        onChange = { ( e ) => {} }
      
      />
    
    </div>
  
  )
  
}

export default AboutYourself