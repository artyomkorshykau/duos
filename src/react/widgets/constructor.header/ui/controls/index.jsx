import s
  from '@/react/widgets/constructor.header/ui/constructor.header.module.scss'
import DefaultButton from '@/react/components/buttons/default.button/index.jsx'
import Promote from '@/react/components/icons/promote.jsx'
import { useRouter } from 'next/navigation'

const Controls = ( { handleSavePublication, setSaveVariant } ) => {
  
  const { back } = useRouter()
  
  return (
    
    <div className={ `${ s.constructorHeader__wrapper__buttons }` }>
      
      <DefaultButton
        
        name={ 'Продвигать' }
        className={ `${ s.constructorHeader__wrapper__buttons__promote }` }
        action={ ( e ) => {
          
          e.stopPropagation()
          console.log( 'Promote' )
          
        } }
        icon={ <Promote direction={ 'right' } fill={ '#fff' }/> }
        positionIcon="right"
      
      />
      
      <DefaultButton
        
        gray
        name={ 'Сохранить в черновики' }
        action={ ( e ) => {
          
          e.stopPropagation()
          setSaveVariant( 'draft' )
          handleSavePublication()
          
        } }
      
      />
      
      <DefaultButton
        
        name={ 'Отменить' }
        className={ `${ s.constructorHeader__wrapper__buttons__cancel }` }
        action={ ( e ) => {
          
          e.stopPropagation()
          back()
          
        } }
      
      />
    
    </div>
  
  )
  
}

export default Controls