import useGlobal from '@/store'
import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import expert from '@/service/expert.js'

export const usePublications = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  const { publications } = globalState
  const [ filed, setFiled ] = useState( false )
  const { photos } = publications.categories[ 0 ]
  
  const { mutate: mutateArticleList, data: articleList } = useMutation( {
    
    mutationKey: [ 'article-list' ],
    mutationFn: () => expert.articleList()
    
  } )
  
  useEffect( () => {
    
    const allFieldsFilled = publications.categories[ 0 ].profileInfo.slice( 1 ).every( profile => profile.text.length >= 320 )
    
    if ( !!photos && photos.length > 0 && allFieldsFilled ) {
      
      setFiled( true )
      
    } else {
      
      setFiled( false )
      
    }
  }, [ photos, publications ] )
  
  useEffect( () => {
    
    if ( filed ) {
      
      globalActions.publications.toggleDocumentStatus( 0, 'Filled' )
      
    } else {
      
      globalActions.publications.toggleDocumentStatus( 0, 'NotFilled' )
    }
    
  }, [ filed ] )
  
  useEffect( () => {
    
    mutateArticleList()
    
  }, [] )
  
  return { globalState, articleList }
  
}