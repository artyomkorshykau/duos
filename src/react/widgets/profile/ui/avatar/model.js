import { useEffect, useRef, useState } from 'react'
import useGlobal from '@/store/index.js'
import { useMutation } from '@tanstack/react-query'
import profile from '@/service/profile.js'

export const useAvatar = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  const avatar = globalState.user.photo_url
  const fileInputRef = useRef( null )
  const [ photo, setPhoto ] = useState( null )
  const [ error, setError ] = useState( '' )
  const [ errorTimeout, setErrorTimeout ] = useState( null )
  
  const { mutate: mutateUserPhoto, isPending } = useMutation( {
    
    mutationKey: [ 'change-user-photo' ],
    mutationFn: ( base64String ) => profile.editAvatar( base64String ),
    onSuccess: () => {
      
      globalActions.user.setUser()
      
    },
    onError: () => {
      
      setError( 'Произошла ошибка при загрузке файла.' )
      startErrorTimeout()
      
    }
    
  } )
  
  const handleEditClick = () => {
    
    fileInputRef.current.click()
    setError( '' )
    clearTimeout( errorTimeout )
    
  }
  
  const handleFileChange = ( e ) => {
    
    const file = e.target.files[ 0 ]
    
    if ( file ) {
      
      const maxFileSize = 20 * 1024 * 1024 // 20MB
      const allowedFileTypes = [ 'image/png', 'image/tiff', 'image/jpeg' ]
      
      if ( !allowedFileTypes.includes( file.type ) ) {
        
        setError( 'Файл должен быть в формате PNG, TIFF или JPEG.' )
        startErrorTimeout()
        return
        
      }
      
      if ( file.size > maxFileSize ) {
        
        setError( 'Размер файла не должен превышать 20MB.' )
        startErrorTimeout()
        return
        
      }
      
      const reader = new FileReader()
      
      reader.onloadend = () => {
        
        const base64String = reader.result
        mutateUserPhoto( base64String, {
          onSuccess: () => {
            setPhoto( reader.result )
          }
        } )
        
      }
      
      reader.readAsDataURL( file )
      
    }
    
  }
  
  const startErrorTimeout = () => {
    
    clearTimeout( errorTimeout )
    
    const timeoutId = setTimeout( () => {
      
      setError( '' )
      
    }, 5000 )
    
    setErrorTimeout( timeoutId )
    
  }
  
  useEffect( () => {
    
    return () => {
      
      clearTimeout( errorTimeout )
      
    }
  }, [ errorTimeout ] )
  
  return {
    
    handleEditClick,
    handleFileChange,
    fileInputRef,
    avatar,
    error,
    isPending
    
  }
  
}