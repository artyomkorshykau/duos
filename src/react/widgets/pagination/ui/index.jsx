import { steps } from '@/constants/quiz.steps'
import DefaultButton from '@/react/components/buttons/default.button'
import Arrow from '@/react/components/icons/arrow'
import useGlobal from '@/store'
import { useEffect, useState } from 'react'
import s from './pagination.module.scss'
import Save from '@/react/components/icons/save'

const Pagination = ( {
                       
                       nextStep,
                       activeStep,
                       prevStep,
                       editor = false
                       
                     } ) => {
  
  
  const [ globalState ] = useGlobal()
  
  const [ disabled, setDisabled ] = useState( false )
  
  const { service, progress, school, publications } = globalState
  
  const publicationsProgress = publications?.categories?.[0].documentStatus === 'Filled' && globalState.articles?.length >= 3
  
  useEffect( () => {
    
    if ( activeStep === 'Услуги' && service.progress !== 1 ) {
      
      setDisabled( true )
      
    } else if ( activeStep === 'Документы' && service.progress !== 1 ) {
      
      setDisabled( true )
      
    } else if ( activeStep === 'Профиль' && progress !== 1 ) {
      
      setDisabled( true )
      
    } else if ( activeStep === 'Публикации' && !publicationsProgress ) {
      
      setDisabled( true )
      
    } else {
      
      setDisabled( false )
      
    }
    
  }, [ activeStep, service.progress, progress, school, publications ] )
  
  return (
    
    <div className={ `${ s.pagination }` }>
      
      { !editor && <DefaultButton
        
        gray
        name={ '' }
        action={ prevStep }
        className={ `${ s.pagination__button_back }` }
        icon={ <Arrow direction={ 'left' } fill={ '#9ba1a1' }/> }
        disabled={ activeStep === steps.profile }
      
      /> }
      
      { editor && <DefaultButton
        
        gray
        name={ 'Сохранить в черновики' }
        className={ `${ s.pagination__draft_save }` }
        action={ prevStep }
      
      /> }
      
      <DefaultButton
        
        name={ activeStep === 'Публикации' ? 'Отправить анкету' : activeStep === 'constructor' ? 'Сохранить' : 'Далее' }
        className={ `${ s.pagination__button_next }` }
        action={ nextStep }
        icon={ activeStep === 'constructor' ?
          <Save direction={ 'right' } fill={ '#fff' }/> :
          <Arrow direction={ 'right' } fill={ '#fff' }/> }
        positionIcon="right"
        disabled={ disabled }
      
      />
    
    </div>
  
  )
  
}

export default Pagination