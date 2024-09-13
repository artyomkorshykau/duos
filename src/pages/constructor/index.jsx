'use client'

import Carcas from '@/react/components/containers/carcas'
import Pagination from '@/react/widgets/pagination/ui'
import s from './constructor.module.scss'
import ConstructorHeader from '@/react/widgets/constructor.header/ui'
import SavePopup from '@/react/popups/save.popup/index.jsx'
import { DuosEditor } from '@/react/components/editor/dist/index.js'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import tagsService from '@/service/tags.js'
import useGlobal from '@/store/index.js'

export default function ConstructorPage() {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const [ activeTab, setActiveTab ] = useState( 'Публикации' )
  const [ openSavePopup, setOpenSavePopup ] = useState( false )
  const [ saveVariant, setSaveVariant ] = useState( '' )
  const [ tags, setTags ] = useState( null )
  
  const [ selectDirection, setSelectDirection ] = useState( null )
  const [ image, setImage ] = useState( null )
  const [ selectTags, setSelectTags ] = useState( null )
  const [ content, setContent ] = useState( [] )
  
  const { back } = useRouter()
  
  const contentToString = content
    
    .filter( item => item.type === 'paragraph' )
    .map( item => item.children.map( child => child.text ).join( '' ) )
    .join( ' ' )
  
  const titleToString = content
    
    .filter( item => item.type === 'heading-one' )
    .map( item => item.children.map( child => child.text ).join( '' ) )
    .join( ' ' )
  
  const handleSavePublication = ( variant = saveVariant ) => {
    
    const categoryID = globalState.service.serviceCategories
      
      .find( ( category ) => category.value === selectDirection )
      ?.id
    
    const reader = new FileReader()
    
    reader.onloadend = () => {
      
      data.image_url = reader.result
      
    }
    
    const data = {
      
      article_category_id: categoryID,
      title: titleToString,
      content: contentToString,
      image_url: image,
      is_draft: variant === 'draft',
      in_library: variant === 'profile',
      tags: selectTags
      
    }
    
    if ( image ) {
      
      const reader = new FileReader()
      
      reader.onloadend = () => {
        
        data.image_url = reader.result
        
        globalActions.publications.addNewPublication( data )
        setOpenSavePopup( false )
        
      }
      
      reader.readAsDataURL( image )
      
    } else {
      
      globalActions.publications.addNewPublication( data )
      setOpenSavePopup( false )
      
    }
    
    back()
    
  }
  
  const handleSaveDraft = () => {
    
    handleSavePublication( 'draft' )
    
  }
  
  useEffect( () => {
    
    globalActions.service.getServiceCategories()
    
    tagsService
      
      .getTagList()
      .then( ( res ) => {
        
        setTags( res.tags )
        
      } )
    
  }, [] )
  
  if ( !tags ) {
    
    return null
    
  }
  
  return (
    
    <main>
      
      <Carcas
        
        authorized={ true }
      
      >
        
        <div className={ `${ s.content }` }>
          
          <ConstructorHeader
            
            activeTab={ activeTab }
            setActiveTab={ setActiveTab }
            handleSavePublication={ handleSavePublication }
            setSaveVariant={ setSaveVariant }
          
          />
          
          <DuosEditor
            
            availableTags={  tags }
            onChangeTagInput={ ( tags ) => setSelectTags( tags ) }
            
            image={ image }
            onChangeImage={ setImage }
            
            selectOptions={ globalState.service.serviceCategories }
            onChangeSelectOptions={ ( optionValue ) => setSelectDirection( optionValue ) }
            
            
            removeImage={ () => setImage( null ) }
            uploadFile={ () => {} }
            
            onValueChange={ ( value ) => setContent( value ) }
            
            className={ `${ s.editor }` }
            selectPlaceholder={ globalState.constructor.currentArticle?.category?.name ?? 'Выберите' +
              ' направление' }
          
          />
          
          <Pagination
            
            nextStep={ () => setOpenSavePopup( true ) }
            activeStep={ 'constructor' }
            prevStep={ handleSaveDraft }
            editor
          
          />
        
        </div>
        
        <SavePopup
          
          isOpened={ openSavePopup }
          closePopup={ () => setOpenSavePopup( false ) }
          saveVariant={ saveVariant }
          setSaveVariant={ setSaveVariant }
          save={ handleSavePublication }
        
        />
      
      </Carcas>
    
    </main>
  
  )
  
}
