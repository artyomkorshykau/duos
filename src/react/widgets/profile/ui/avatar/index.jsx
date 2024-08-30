import React from 'react'
import s from '@/react/widgets/profile/ui/profile.module.scss'
import Pencil from '@/react/components/icons/pencil.jsx'
import Crown from '@/react/components/icons/crown.jsx'
import { useAvatar } from '@/react/widgets/profile/ui/avatar/model.js'

const Avatar = () => {
  
  const {
    
    handleEditClick,
    handleFileChange,
    fileInputRef,
    avatar
  
  } = useAvatar()
  
  return (
    
    <div className = { `${ s.profile__left_side__avatar }` }>
      
      <div className = { `${ s.profile__left_side__avatar__photo_wrapper }` }>
        
        <div
          className = { `${ s.profile__left_side__avatar__photo_wrapper__photo }` }>
          
          <img src = { avatar } alt="avatar"/>
        
        </div>
      
      </div>
      
      <div
        
        className = { `${ s.profile__left_side__avatar__edit }` }
        onClick = { handleEditClick }
      
      >
        
        <Pencil/>
      
      </div>
      
      <div className = { `${ s.profile__left_side__avatar__tags }` }>
        
        <Crown/>
      
      </div>
      
      <input
        
        type = "file"
        ref = { fileInputRef }
        style = { { display: 'none' } }
        onChange = { handleFileChange }
        
      />
    
    </div>
  
  )
  
}

export default Avatar