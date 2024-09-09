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
  
  const handleSavePublication = () => {
    
    const categoryID = globalState.service.serviceCategories
      
      .find( ( category ) => category.value === selectDirection )
      .id
    
    const body = {
      
      article_category_id: categoryID,
      title: titleToString,
      content: contentToString,
      image_url: image,
      is_draft: saveVariant === 'draft',
      in_library: saveVariant === 'profile',
      tags: selectTags
      
    }
    
    console.log( body )
    
    setOpenSavePopup( false )
    
  }
  
  useEffect( () => {
    
    globalActions.service.getServiceCategories()
    tagsService.getTagList().then( ( res ) => {
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
          
          />
          
          <DuosEditor
            
            availableTags={ tags }
            onChangeTagInput={ ( tags ) => setSelectTags( tags ) }
            
            image={ image }
            onChangeImage={ setImage }
            
            selectOptions={ globalState.service.serviceCategories }
            onChangeSelectOptions={ ( optionValue ) => setSelectDirection( optionValue ) }
            
            
            removeImage={ () => setImage( null ) }
            uploadFile={ () => {} }
            onValueChange={ ( value ) => setContent( value ) }
            
            className={ `${ s.editor }` }
          
          />
          
          <Pagination
            
            nextStep={ () => setOpenSavePopup( true ) }
            activeStep={ 'constructor' }
            prevStep={ () => back() }
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
