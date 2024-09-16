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
import { useMutation } from '@tanstack/react-query'
import expert from '@/service/expert.js'

export default function ConstructorPage() {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const [ activeTab, setActiveTab ] = useState( 'Публикации' )
  const [ openSavePopup, setOpenSavePopup ] = useState( false )
  const [ saveVariant, setSaveVariant ] = useState( '' )
  const [ tags, setTags ] = useState( null )
  
  const [ selectDirection, setSelectDirection ] = useState( globalState.constructor.currentArticle?.category || null )
  const [ image, setImage ] = useState( null )
  const [ selectTags, setSelectTags ] = useState( [] )
  const [ content, setContent ] = useState( [
    {
      'type': 'heading-one',
      'children': [
        {
          'text': globalState.constructor.currentArticle?.title || 'Заголовок'
        }
      ]
    },
    {
      'type': 'paragraph',
      'children': [
        {
          'text': globalState.constructor.currentArticle?.content || 'Начните' +
            ' вводить текст'
        }
      ]
    }
  ] )
  
  const { back } = useRouter()
  
  const { mutate: mutateAddNewPublication } = useMutation( {
    
    mutationKey: [ 'add-new-article' ],
    mutationFn: ( newArticle ) => expert.createArticle( newArticle ),
    onSuccess: () => {
      
      back()
      globalActions.constructor.removeCurrentArticle()
     
      
    },
    onError: ( error ) => {
      
        const parsedError = JSON.parse( error.message )
        alert( `Ошибка при создании статьи: ${JSON.stringify(parsedError.errors )}`, )
      
    }
    
  } )
  
  const { mutate: mutateEditPublication } = useMutation( {
    
    mutationKey: [ 'edit-article' ],
    mutationFn: ( { id, newArticle } ) => expert.editArticleById( id,newArticle ),
    onSuccess: () => {
      
      back()
      globalActions.constructor.removeCurrentArticle()
     
      
    },
    onError: ( error ) => {
      
      const parsedError = JSON.parse( error.message )
      alert( `Ошибка при создании статьи: ${JSON.stringify(parsedError.errors )}`, )
      
    }
    
  } )
  
  const contentToString = content
    
    .filter( item => item.type === 'paragraph' )
    .map( item => item.children.map( child => child.text ).join( '' ) )
    .join( ' ' )
  
  const titleToString = content
    
    .filter( item => item.type === 'heading-one' )
    .map( item => item.children.map( child => child.text ).join( '' ) )
    .join( ' ' )
  
  const handleSavePublication = async( variant ) => {
    
    const categoryID = globalState.service.serviceCategories
      .find( ( category ) => category.value === selectDirection )
      ?.id
    
    const newArticle = {
      
      article_category_id: globalState.constructor.currentArticle?.category?.id || categoryID,
      title: titleToString,
      content: contentToString,
      image_url: image ? await readFileAsDataURL( image ) : image,
      is_draft: variant ? variant === 'draft' : saveVariant === 'draft',
      in_library: saveVariant === 'profile',
      tags: selectTags
      
    }
    debugger
    
    if ( globalState.constructor.currentArticle ) {
      
      mutateEditPublication( {
        
        id: globalState.constructor.currentArticle.id,
        newArticle
        
      })
      
    } else {
      
      mutateAddNewPublication( newArticle )
      
    }
    
    setOpenSavePopup( false )
    
  }
  
  const readFileAsDataURL = ( file ) => {
    
    return new Promise( ( resolve, reject ) => {
      
      const reader = new FileReader()
      reader.onloadend = () => resolve( reader.result )
      reader.onerror = reject
      reader.readAsDataURL( file )
      
    } )
    
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
            
            availableTags={ tags }
            defaultTagInputValues={ globalState.constructor.currentArticle?.tags || [] }
            onChangeTagInput={ ( tags ) => setSelectTags( tags ) }
            
            image={ image }
            onChangeImage={ setImage }
            
            selectOptions={ globalState.service.serviceCategories }
            onChangeSelectOptions={ ( optionValue ) => setSelectDirection( optionValue ) }
            
            
            removeImage={ () => setImage( null ) }
            uploadFile={ () => {} }
            
            onValueChange={ ( value ) => setContent( value ) }
            initialValue={ content }
            
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
