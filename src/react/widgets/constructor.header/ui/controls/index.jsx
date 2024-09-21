import s
  from '@/react/widgets/constructor.header/ui/constructor.header.module.scss'
import DefaultButton from '@/react/components/buttons/default.button/index.jsx'
import { useRouter } from 'next/navigation'
import useGlobal from '@/store/index.js'

const Controls = ( { handleSavePublication, setSaveVariant } ) => {
  
  const { back } = useRouter()
  const [ globalState, globalActions ] = useGlobal()
  
  return (
    
    <div className={ `${ s.constructorHeader__wrapper__buttons }` }>
      
      {/*<DefaultButton*/}
      {/*  */}
      {/*  name={ 'Продвигать' }*/}
      {/*  className={ `${ s.constructorHeader__wrapper__buttons__promote }` }*/}
      {/*  action={ ( e ) => {*/}
      {/*    */}
      {/*    e.stopPropagation()*/}
      {/*    console.log( 'Promote' )*/}
      {/*    */}
      {/*  } }*/}
      {/*  icon={ <Promote direction={ 'right' } fill={ '#fff' }/> }*/}
      {/*  positionIcon="right"*/}
      
      {/*/>*/}
      
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
          globalActions.constructor.removeCurrentArticle()
          
        } }
      
      />
    
    </div>
  
  )
  
}

export default Controls