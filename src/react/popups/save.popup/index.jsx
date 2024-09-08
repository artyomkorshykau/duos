import Popup from '../popup'
import s from './save.module.scss'
import DefaultButton from '@/react/components/buttons/default.button/index.jsx'
import Checkbox from '@/react/components/forms/checkbox/index.jsx'
import NotiseInfo from '@/react/components/icons/notise.info.jsx'

const SavePopup = ( {
                      
                      isOpened = false,
                      closePopup = () => {},
                      inQuiz = false,
                      inProfile = true,
                      saveVariant,
                      setSaveVariant
                      
                    } ) => {
  
  
  const handleClosePopup = () => {
    
    closePopup()
    
  }
  
  return (
    
    <Popup
      
      titleLeft="Варианты сохранения"
      isOpened={ isOpened }
      closePopup={ handleClosePopup }
      bodyClassName={ `${ s.save }` }
      background
      closeBackground
    
    >
      <div className={ `${ s.save__content }` }>
        
        <div className={ `${ s.save__content__variant }` }>
          
          <Checkbox
            
            type={ 'secondary' }
            isChecked={ saveVariant === 'draft' }
            setIsChecked={ () => setSaveVariant( 'draft' ) }
          
          
          />
          
          <div className={ `text-15 ${ s.save__content__variant__text }` }>
            
            Сохранить как черновик
          
          </div>
        
        
        </div>
        
        <div className={ `${ s.save__content__variant }` }>
          
          <Checkbox
            
            type={ 'secondary' }
            isChecked={ saveVariant === 'completed' }
            setIsChecked={ () => setSaveVariant( 'completed' ) }
          
          />
          
          <div className={ `text-15 ${ s.save__content__variant__text }` }>
            
            Сохранить как завершенную
          
          </div>
        
        </div>
        
        { inProfile &&
          
          <div className={ `${ s.save__content__variant }` }>
            
            <Checkbox
              
              type={ 'secondary' }
              isChecked={ saveVariant === 'profile' }
              setIsChecked={ () => setSaveVariant( 'profile' ) }
            
            />
            
            <div className={ `text-15 ${ s.save__content__variant__text }` }>
              
              Опубликовать в профиле и <br/>
              отправить запрос в Библиотеку
            
            </div>
          
          </div>
          
        }
        
        <div className={ `${ s.save__content__notise }` }>
          
          <NotiseInfo fill={ '#18009E' }/>
          
          <div className={ `text-13 ${ s.save__content__notise__text }` }>
            
            Окончательное решение о публикации принимает администратор
          
          </div>
        
        </div>
        
        <div className={ `${ s.save__content__controls }` }>
          
          <DefaultButton
            
            name="Отменить"
            action={ handleClosePopup }
            gray
          
          />
          
          <DefaultButton
            
            name="Сохранить"
            type="default"
            action={ () => {} }
          
          />
        
        </div>
      
      </div>
    
    </Popup>
  
  )
  
}

export default SavePopup