import React from 'react'
import s from '@/react/widgets/profile/ui/profile.module.scss'
import Pencil from '@/react/components/icons/pencil.jsx'
import Crown from '@/react/components/icons/crown.jsx'
import { useAvatar } from '@/react/widgets/profile/ui/avatar/model.js'
import cssIf from '@/scripts/helpers/css.if.js'

const Avatar = () => {
  
  const {
    
    handleEditClick,
    handleFileChange,
    fileInputRef,
    avatar,
    error,
    isPending
    
  } = useAvatar()
  
  return (
    
    <>
      
      <div className={ `${ s.profile__left_side__avatar }` }>
        
        <div
          className={ `${ s.profile__left_side__avatar__photo_wrapper } ${ cssIf( error, s.profile__left_side__avatar__photo_wrapper__error ) }` }>
          
          <div
            className={ `${ s.profile__left_side__avatar__photo_wrapper__photo }` }>
            
            <img src={ avatar || 'img/test.default.data/avatar.webp' }
                 alt="avatar"/>
          
          </div>
        
        </div>
        
        <div
          
          className={ `${ s.profile__left_side__avatar__edit }` }
          onClick={ handleEditClick }
        
        >
          
          <Pencil/>
        
        </div>
        
        <div className={ `${ s.profile__left_side__avatar__tags }` }>
          
          <Crown/>
        
        </div>
        
        <input
          
          type="file"
          ref={ fileInputRef }
          style={ { display: 'none' } }
          onChange={ handleFileChange }
        
        />
      
      </div>
      
      { error &&
        
        <div className={ `text-13 ${ s.profile__left_side__avatar__error }` }>
          
          { error }
        
        </div>
        
      }
      
      { isPending &&
        
        <div className={ `text-13 ${ s.profile__left_side__avatar__loading }` }> Загрузка...</div>
        
      }
    
    </>
  
  
  )
  
}

export default Avatar