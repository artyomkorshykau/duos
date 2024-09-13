import s from './publication.card.module.scss'
import PlaceholderImage from '@/react/components/icons/img.placeholder'
import DefaultButton from '@/react/components/buttons/default.button'
import Status from '@/react/components/status'
import Cross from '@/react/components/icons/cross'
import useGlobal from '@/store/index.js'
import DeletePopup from '@/react/popups/delete.popup/index.jsx'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const PublicationCard = ( props ) => {
  
  const {
    
    photo,
    status,
    title,
    description,
    addNewPublication,
    articleID
    
  } = props
  
  const [ globalState, globalActions ] = useGlobal()
  const [ isDeletePopUp, setIsDeletePopUp ] = useState( false )
  const { push } = useRouter()
  
  const handleOpenArticle = () => {
    
    const currentArticle = globalState.publications.categories[ 1 ].publicationsCards
      .find( ( card ) => card.id === articleID )
    
    globalActions.constructor.setCurrentArticle( currentArticle )
    push( '/constructor' )
    
  }
  
  if ( title ) {
    
    return (
      
      <div className={ `${ s.card }` }>
        
        { photo
          
          ? <img src={ photo } alt={ '' }/>
          : <div className={ `${ s.card__placeholder }` }>
            
            <PlaceholderImage/>
          
          </div>
          
        }
        
        <div className={ `${ s.card__content }` }>
          
          <div className={ `${ s.card__content__status }` }>
            
            <Status status={ status }/>
            
            <DefaultButton
              
              name="Удалить"
              type="any"
              className={ `${ s.card__content__status__button }` }
              action={ () => setIsDeletePopUp( true ) }
            
            />
          
          </div>
          
          <h4 className={ `text-20 ${ s.card__content__title }` }>
            
            { title }
          
          </h4>
          
          <p className={ `text-13 ${ s.card__content__description }` }>
            
            { description }
          
          </p>
          
          <DefaultButton
            
            name={ 'Открыть' }
            gray
            className={ `${ s.card__content__button }` }
            action={ handleOpenArticle }
          
          />
        
        </div>
        
        <DeletePopup
          
          isOpened={ isDeletePopUp }
          closePopup={ () => setIsDeletePopUp( false ) }
          title={ title }
          type={ 'Статью:' }
          action={ () => globalActions.publications.deletePublication( articleID ) }
        
        />
      
      </div>
    
    )
    
  }
  
  return (
    
    <div className={ `${ s.create_card }` }>
      
      <DefaultButton
        
        gray
        name=""
        className={ `${ s.create_card__add_button }` }
        icon={ <Cross fill={ '#18009E' }/> }
        positionIcon="right"
        action={ addNewPublication }
      
      />
      
      <p className={ `text-13 ${ s.create_card__title }` }>
        
        Нажмите, чтобы создать публикацию
      
      </p>
    
    </div>
  
  )
  
}

export default PublicationCard