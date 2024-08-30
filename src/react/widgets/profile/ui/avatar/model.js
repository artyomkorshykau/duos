import { useRef } from 'react'
import useGlobal from '@/store/index.js'

export const useAvatar = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  const avatar = globalState.user.photo_url
  const fileInputRef = useRef(null)
  
  const handleEditClick = () => {
    
    fileInputRef.current.click()
    
  }
  
  const handleFileChange = ( e ) => {
    
    const file = e.target.files[0]
    
    if (file) {
      
      const maxFileSize = 20 * 1024 * 1024 // 20MB
      const allowedFileTypes = ['image/png', 'image/tiff', 'image/jpeg']
      
      if (!allowedFileTypes.includes(file.type)) {
        
        alert('Файл должен быть в формате PNG, TIFF или JPEG.')
        return
        
      }
      
      if (file.size > maxFileSize) {
        
        alert('Размер файла не должен превышать 20MB.')
        return
        
      }
      
      alert('Файл успешно загружен!')
      
    }
    
  }
  
  return {
    
    handleEditClick,
    handleFileChange,
    fileInputRef,
    avatar
  
  }
  
}