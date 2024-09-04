import { useRef, useState } from 'react'
import useGlobal from '@/store/index.js'
import { useMutation } from '@tanstack/react-query'
import profile from '@/service/profile.js'

export const useAvatar = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  const avatar = globalState.user.photo_url
  const fileInputRef = useRef( null )
  const [ photo, setPhoto ] = useState( null )
  
  const { mutate: mutateUserPhoto } = useMutation( {
    
    mutationKey: [ 'change-user-photo' ],
    mutationFn: ( base64String ) => profile.editAvatar( base64String ),
    onSuccess: () => {
      
      globalActions.user.setUser()
      
    },
    onError: () => {
      
      alert( 'Произошла ошибка при загрузке файла.' )
      
    }
    
  } )
  
  const handleEditClick = () => {
    
    fileInputRef.current.click()
    
  }
  
  const handleFileChange = ( e ) => {
    
    const file = e.target.files[ 0 ]
    
    if ( file ) {
      
      const maxFileSize = 20 * 1024 * 1024 // 20MB
      const allowedFileTypes = [ 'image/png', 'image/tiff', 'image/jpeg' ]
      
      if ( !allowedFileTypes.includes( file.type ) ) {
        
        alert( 'Файл должен быть в формате PNG, TIFF или JPEG.' )
        return
        
      }
      
      if ( file.size > maxFileSize ) {
        
        alert( 'Размер файла не должен превышать 20MB.' )
        return
        
      }
      
      const reader = new FileReader()
      
      reader.onloadend = () => {
        
        const base64String = reader.result
        mutateUserPhoto( base64String, {
          onSuccess: () => {
            setPhoto( reader.result ) // Обновляем фото в состоянии
          }
        } )
        
      }
      
      reader.readAsDataURL( file )
      
    }
    
  }
  
  return {
    
    handleEditClick,
    handleFileChange,
    fileInputRef,
    avatar
    
  }
  
}