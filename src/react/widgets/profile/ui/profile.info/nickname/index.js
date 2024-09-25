import Cross from '@/react/components/icons/cross.jsx'
import Save from '@/react/components/icons/save.jsx'
import s from '../../profile.module.scss'
import useGlobal from '@/store/index.js'
import { useEffect, useRef, useState } from 'react'
import Pencil from '@/react/components/icons/pencil.jsx'
import cssIf from '@/scripts/helpers/css.if.js'
import { useMutation } from '@tanstack/react-query'
import profile from '@/service/profile.js'

const Nickname = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  const { pseudonym } = globalState.user
  const [ nickName, setNickName ] = useState( pseudonym )
  const [ edit, setEdit ] = useState( false )
  const inputRef = useRef( null )
  const controlsRef = useRef( null )
  
  const { mutate: mutatePseudonym } = useMutation( {
    
    mutationKey: [ 'edit-pseudonym' ],
    mutationFn: ( pseudonym ) => profile.editPseudonym( pseudonym )
    
  } )
  
  const handleEditClick = () => {
    
    setEdit( true )
    inputRef.current.focus()
    
  }
  
  const handleSaveClick = () => {
    
    setEdit( false )
    inputRef.current.blur()
    mutatePseudonym( nickName )
    
  }
  
  const handleClearClick = () => {
    
    setNickName( '' )
    inputRef.current.focus()
    
  }
  
  const handleClickOutside = ( e ) => {
    
    if (
      
      inputRef.current && !inputRef.current.contains( e.target ) &&
      controlsRef.current && !controlsRef.current.contains( e.target )
    
    ) {
      
      setEdit( false )
      inputRef.current.blur()
      
    }
    
  }
  
  const handleKeyDown = ( e ) => {
    
    if ( e.key === 'Escape' ) {
      
      setEdit( false )
      inputRef.current.blur()
      
    } else if ( e.key === 'Enter' ) {
      
      handleSaveClick()
      
    }
    
  }
  
  useEffect( () => {
    
    document.addEventListener( 'mousedown', handleClickOutside )
    document.addEventListener( 'keydown', handleKeyDown )
    
    return () => {
      
      document.removeEventListener( 'mousedown', handleClickOutside )
      document.removeEventListener( 'keydown', handleKeyDown )
      
    }
    
  }, [] )
  
  useEffect( () => {
    
    setNickName( pseudonym )
    
  }, [ pseudonym ] )
  
  return (
    
    <div className={ `${ s.profile__right_side__profile_info__nickname }` }>
      
      <p
        className={ `text-20 ${ s.profile__right_side__profile_info__nickname__title }` }>Псевдоним</p>
      
      <div className={ `
      ${ s.profile__right_side__profile_info__nickname__textfield }
      ${ cssIf( edit, s.profile__right_side__profile_info__nickname__textfield__active ) }
      ` }
      
      >
        
        <input
          
          value={ nickName }
          ref={ inputRef }
          placeholder={ 'Псевдоним' }
          onChange={ ( e ) => setNickName( e.target.value ) }
          onClick={ handleEditClick }
        
        />
        
        { edit && nickName?.length > 0 &&
          
          <div
            
            className={ `${ s.profile__right_side__profile_info__nickname__textfield__controls }` }
            ref={ controlsRef }
          
          >
            
            <Cross
              
              stroke={ '#7C92A7' }
              onClick={ handleClearClick }
              className={ `${ s.profile__right_side__profile_info__nickname__textfield__controls__cross }` }
            
            />
            
            <div
              
              className={ `${ s.profile__right_side__profile_info__nickname__textfield__controls__save }` }
              onClick={ handleSaveClick }
            
            >
              
              <Save fill={ '#fff' }/>
            
            </div>
          
          </div>
          
        }
        
        { !edit &&
          
          <Pencil
            className={ `${ s.profile__right_side__profile_info__nickname__textfield__pencil }` }/>
          
        }
      
      </div>
    
    </div>
  
  )
  
}

export default Nickname