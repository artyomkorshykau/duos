import s
  from '@/react/widgets/constructor.header/ui/constructor.header.module.scss'
import DefaultButton from '@/react/components/buttons/default.button/index.jsx'
import Promote from '@/react/components/icons/promote.jsx'
import { useRouter } from 'next/navigation'

const Controls = () => {
  
  const { back } = useRouter()
  
  return (
    
    <div className={ `${ s.constructorHeader__wrapper__buttons }` }>
      
      <DefaultButton
        
        name={ 'Продвигать' }
        className={ `${ s.constructorHeader__wrapper__buttons__promote }` }
        action={ () => {console.log( 'Promote' )} }
        icon={ <Promote direction={ 'right' } fill={ '#fff' }/> }
        positionIcon="right"
      
      />
      
      <DefaultButton
        
        gray
        name={ 'Сохранить в черновики' }
        action={ () => { console.log( 'save' ) } }
      
      />
      
      <DefaultButton
        
        name={ 'Отменить' }
        className={ `${ s.constructorHeader__wrapper__buttons__cancel }` }
        action={ () => back() }
      
      />
    
    </div>
  
  )
  
}

export default Controls