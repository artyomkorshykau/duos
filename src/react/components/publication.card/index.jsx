import s from './publication.card.module.scss'
import PlaceholderImage from '@/react/components/icons/img.placeholder'
import DefaultButton from '@/react/components/buttons/default.button'
import Status from '@/react/components/status'
import Cross from '@/react/components/icons/cross'
import useGlobal from '@/store/index.js'
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
  const { push } = useRouter()
  
  let content
  
  const handleOpenArticle = () => {
    
    const currentArticle = globalState.articles
      .find( ( card ) => card.id === articleID )
    
    globalActions.constructor.setCurrentArticle( currentArticle )
    push( '/constructor' )
    
  }
  try {
    if ( description ) {
      content = JSON.parse( description )
    }
  } catch ( error ) {
    console.error( 'Failed to parse JSON content:', error )
  }
  
  const nonHeadings = content?.filter( item =>
    item.type !== 'heading-one' &&
    item.type !== 'heading-two' &&
    item.type !== 'heading-three'
  )

// Выводим текст из поля children для каждого подходящего элемента
  nonHeadings?.forEach( item => {
    content = item.children.map( child => child.text ).join( '' )
  } )
  
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
              action={ () => {
                
                globalActions.popup.openDeletePublicationsPopup( articleID )
                
              } }
            
            />
          
          </div>
          
          <h4 className={ `text-20 ${ s.card__content__title }` }>
            
            { title }
          
          </h4>
          
          <p className={ `text-13 ${ s.card__content__description }` }>
            
            { content }
          
          </p>
          
          <DefaultButton
            
            name={ 'Открыть' }
            gray
            className={ `${ s.card__content__button }` }
            action={ handleOpenArticle }
          
          />
        
        </div>
      
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