'use client'

import Carcas from '@/react/components/containers/carcas'
import Pagination from '@/react/widgets/pagination/ui'
import s from './constructor.module.scss'
import ConstructorHeader from '@/react/widgets/constructor.header/ui'
import { useState } from 'react'
import SavePopup from '@/react/popups/save.popup/index.jsx'
import { DuosEditor } from '@/react/components/editor/dist/index.js'
import { useRouter } from 'next/navigation'

export default function ConstructorPage() {
  
  const [ activeTab, setActiveTab ] = useState( 'Публикации' )
  const [ openSavePopup, setOpenSavePopup ] = useState( false )
  const [ saveVariant, setSaveVariant ] = useState( '' )
  const { back } = useRouter()
  
  return (
    
    <main>
      
      <Carcas
        
        authorized={ true }
      
      >
        
        <div className={ `${ s.content }` }>
          
          <ConstructorHeader
            
            activeTab={ activeTab }
            setActiveTab={ setActiveTab }
          
          />
          
          <DuosEditor
            
            availableTags={ [ { id: 1, tag: 'Инквизиция' } ] }
            onChangeTagInput={ ( tags ) => {console.log( 'selected tags ', tags )} }
            image={ '' }
            onChangeImage={ () => {} }
            selectOptions={ [ { id: 1, value: 'Мистика', label: 'Мистика' } ] }
            onChangeSelectOptions={ ( optionValue ) => {console.log( optionValue )} }
            removeImage={ () => {} }
            uploadFile={ () => {} }
            onValueChange={ ( value ) => {console.log( JSON.stringify( value ) )} }
            className={ `${s.editor}` }
          
          />
          
          <Pagination
            
            nextStep={ () => setOpenSavePopup( true ) }
            activeStep={ 'constructor' }
            prevStep={ () => back() }
            editor
          
          />
        
        </div>
        
        <SavePopup
          
          isOpened={ openSavePopup }
          closePopup={ () => setOpenSavePopup( false ) }
          saveVariant={ saveVariant }
          setSaveVariant={ setSaveVariant }
        
        />
      
      </Carcas>
    
    </main>
  
  )
  
}
