'use client'

import Select from '@/react/components/forms/select'
import s from '../../document.module.scss'
import useGlobal from '@/store'
import Textfield from '@/react/components/forms/textfield'
import { communicationList } from '@/constants/services'
import { useEffect, useState } from 'react'
import { extractNumbers } from '@/scripts/helpers/extract.numbers.js'

const Recommendation = ( {
                           categoryIndex,
                           index
                         } ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  const [ phone, setPhone ] = useState( '' )
  const formatPhone = extractNumbers( phone )
  
  useEffect( () => {
    
      globalActions.service.setPhone( phone, categoryIndex, index )
    
    
  }, [ phone ] )
  
  return (
    
    <div className="w-full">
      
      <p className={ `${ s.document__section__title }` }> Рекомендация к
        услуге </p>
      
      <p className={ `text-16 ${ s.document__section__description }` }>
        
        Контакты человека, который может подтвердить вашу компетентность
      
      </p>
      
      <form className={ `${ s.document__section__filedsGrid5 }` }>
        
        <Textfield
          
          className={ `${ s.document__section__filedsGrid5__filed }` }
          placeholder={ 'ФИО клиента' }
          value={ globalState.service.category?.[ categoryIndex ]?.services?.[ index ]?.clientFullName }
          onChange={ ( e ) => globalActions.service.setClientFullName( e.target.value, categoryIndex, index ) }
        
        />
        <Select
          
          className={ `${ s.document__section__filedsGrid5__filed } ` }
          placeholder={ 'Способ связи' }
          value={ globalState.service.category?.[ categoryIndex ]?.services?.[ index ]?.communication }
          onChange={ value => globalActions.service.setCommunication( value, categoryIndex, index ) }
          options={ communicationList }
        
        />
        <Textfield
          
          className={ `${ s.document__section__filedsGrid5__filed } ` }
          placeholder={ 'Номер' }
          type="phone"
          value={ phone }
          onChange={ ( e ) => setPhone( e.target.value ) }
        
        />
      
      </form>
    
    
    </div>
  
  )
  
}

export default Recommendation
