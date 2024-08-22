import { useRef } from 'react'

export const useAvatar = () => {
  
  const fileInputRef = useRef(null)
  
  const handleEditClick = () => {
    
    fileInputRef.current.click()
    
  }
  
  const handleFileChange = ( e ) => {
    
    const file = e.target.files[0]
    
    if ( file ) {
      
      console.log( file )
      
    }
  }
  
  return {
    
    handleEditClick,
    handleFileChange,
    fileInputRef
  
  }
  
}