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
import { initializeState } from '@/store/initializeState.js'

export default function ConstructorPage() {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const [ content, setContent ] = useState( [] )
  const [ title, setTitle ] = useState( '' )
  
  const [ activeTab, setActiveTab ] = useState( 'Публикации' )
  const [ openSavePopup, setOpenSavePopup ] = useState( false )
  const [ saveVariant, setSaveVariant ] = useState( '' )
  const [ tags, setTags ] = useState( null )
  const [ selectDirection, setSelectDirection ] = useState( null )
  const [ image, setImage ] = useState( null )
  const [ selectTags, setSelectTags ] = useState( [] )
  const [ errors, setErrors ] = useState( null )
  
  initializeState()
  
  const { back } = useRouter()
  
  useEffect( () => {
    globalActions.service.getServiceCategories()
    
    tagsService
      .getTagList()
      .then( ( res ) => {
        setTags( res.tags )
      } )
  }, [] )
  
  useEffect( () => {
    if ( globalState.constructor.currentArticle ) {
      let parsedContent = []
      try {
        const content = globalState.constructor.currentArticle.content
        if ( content ) {
          parsedContent = JSON.parse( content )
        }
      } catch ( error ) {
        console.error( 'Failed to parse JSON content:', error )
      }
      
      setContent( parsedContent.length > 0 ? parsedContent : getDefaultContent() )
      setImage( globalState.constructor.currentArticle.image_url || null )
      setSelectDirection( globalState.constructor.currentArticle.category || null )
      setSelectTags( globalState.constructor.currentArticle.tags || [] )
      
      const headings = parsedContent.filter( item =>
        item.type === 'heading-one' || item.type === 'heading-two' || item.type === 'heading-three'
      )
      const articleTitle = headings.map( heading => heading.children.map( child => child.text ).join( '' ) ).join( ' ' )
      setTitle( articleTitle )
    } else {
      setContent( getDefaultContent() )
      setImage( null )
      setSelectDirection( null )
      setSelectTags( [] )
      setTitle( 'Заголовок H1' )
    }
  }, [ globalState.constructor.currentArticle ] )
  
  const getDefaultContent = () => [
    {
      'type': 'heading-one',
      'children': [ { 'text': 'Заголовок H1' } ]
    },
    {
      'type': 'paragraph',
      'children': [ { 'text': 'Начните вводить текст' } ]
    }
  ]
  
  const { mutate: mutateAddNewPublication } = useMutation( {
    mutationKey: [ 'add-new-article' ],
    mutationFn: ( newArticle ) => expert.createArticle( newArticle ),
    onSuccess: () => {
      back()
      globalActions.constructor.removeCurrentArticle()
    },
    onError: ( error ) => {
      const parsedError = JSON.parse( error.message )
      setErrors( parsedError?.errors )
    }
  } )
  
  const { mutate: mutateEditPublication } = useMutation( {
    mutationKey: [ 'edit-article' ],
    mutationFn: ( {
                    id,
                    newArticle
                  } ) => expert.editArticleById( id, newArticle ),
    onSuccess: () => {
      back()
      globalActions.constructor.removeCurrentArticle()
    },
    onError: ( error ) => {
      const parsedError = JSON.parse( error.message )
      alert( `Ошибка при создании статьи: ${ JSON.stringify( parsedError.errors ) }` )
    }
  } )
  
  const handleSavePublication = async( variant = null ) => {
    const actualSaveVariant = variant || saveVariant
    
    const categoryID = globalState.service.serviceCategories
      .find( ( category ) => category.value === selectDirection )
      ?.id
    
    const newArticle = {
      article_category_id: globalState.constructor.currentArticle?.category?.id || categoryID || null,
      title: title,
      content: JSON.stringify( content ),
      image_url: image ? await readFileAsDataURL( image ) : image,
      is_draft: actualSaveVariant === 'draft',
      in_library: actualSaveVariant === 'profile',
      tags: selectTags
    }
    
    if ( globalState.constructor.currentArticle ) {
      mutateEditPublication( {
        id: globalState.constructor.currentArticle.id,
        newArticle
      } )
    } else {
      mutateAddNewPublication( newArticle )
    }
    
    setOpenSavePopup( false )
  }
  
  const readFileAsDataURL = ( file ) => {
    return new Promise( ( resolve, reject ) => {
      if ( typeof file === 'string' ) {
        resolve( file )
        return
      }
      
      const reader = new FileReader()
      reader.onloadend = () => resolve( reader.result )
      reader.onerror = reject
      reader.readAsDataURL( file )
    } )
  }
  
  const handleSaveDraft = () => {
    handleSavePublication( 'draft' )
  }
  
  if ( !tags ) {
    return null
  }
  
  return (
    <main>
      <Carcas authorized={ true }>
        <div className={ `${ s.content }` }>
          <ConstructorHeader
            activeTab={ activeTab }
            setActiveTab={ setActiveTab }
            handleSavePublication={ handleSaveDraft }
            setSaveVariant={ setSaveVariant }
          />
          
          <DuosEditor
            availableTags={ tags }
            defaultTagInputValues={ selectTags }
            onChangeTagInput={ setSelectTags }
            image={ image }
            onChangeImage={ setImage }
            imageError={ errors?.image_url?.[ 0 ] }
            selectOptions={ globalState.service.serviceCategories }
            onChangeSelectOptions={ setSelectDirection }
            selectError={ errors?.article_category_id?.[ 0 ] }
            removeImage={ () => setImage( null ) }
            uploadFile={ () => {} }
            onValueChange={ setContent }
            initialValue={ content }
            className={ `${ s.editor }` }
            selectPlaceholder={ selectDirection?.name ?? 'Выберите направление' }
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
