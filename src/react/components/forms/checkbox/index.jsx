import cssIf from '@/scripts/helpers/css.if'
import CheckMarkIcon from '../../icons/check.mark.icon'
import s from './checkbox.module.scss'

const Checkbox = ( props ) => {
  
  const {
    
    isChecked = false,
    setIsChecked = () => {},
    title = '',
    type = 'default',
    className
    
  } = props
  
  
  if ( type === 'secondary' ) {
    
    return (
      
      <label
        
        onClick={ () => setIsChecked( !isChecked ) }
        onKeyPress={ ( e ) => {
          
          if ( e.key === ' ' ) {
            
            setIsChecked( !isChecked )
            e.preventDefault()
            
          }
          
        }
        
        }
        
        className={ `flex items-center relative
        ${ cssIf( isChecked, s.checked ) }
        ${ className }
        ${ cssIf( type === 'secondary', s.secondary ) }` }
        tabIndex={ 0 }
      
      >
        
        <div
          
          className={ `flex items-center justify-center
          ${ cssIf( type === 'secondary', s.secondary ) }
          ${ cssIf( isChecked && type === 'secondary', s[ 'secondary--checked' ] ) } pointer` }>
          
          { isChecked && type === 'secondary' &&
            <div className={ s[ 'secondary__inner-circle' ] }></div> }
        
        </div>
        
        <p
          className={ `flex items-center font-semibold text-13 ${ s.checkbox__title }` }>{ title }</p>
      
      </label>
    
    )
    
  }
  
  return (
    
    <label
      
      onClick={ () => setIsChecked( !isChecked ) }
      onKeyPress={ ( e ) => {
        if ( e.key === ' ' ) {
          
          setIsChecked( !isChecked )
          e.preventDefault()
          
        }
      } }
      className={ `flex items-center relative ${ s.checkbox } ${ cssIf( isChecked, s.checked ) } ${ className }` }
      tabIndex={ 0 }
    
    >
      
      <div
        className={ `flex items-center justify-center ${ s.checkmark } ${ cssIf( isChecked, s[ 'checkmark--checked' ] ) } pointer` }>
        
        <CheckMarkIcon className={ s.checkmark__icon }/>
      
      </div>
      
      <p
        className={ `flex items-center font-semibold text-13 ${ s.checkbox__title }` }>{ title }</p>
    
    </label>
  
  )
  
}


export default Checkbox
