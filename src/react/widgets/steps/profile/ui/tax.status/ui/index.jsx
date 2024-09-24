'use client'

import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store'
import { taxStatusesList } from '@/constants/profile'
import Select from '@/react/components/forms/select'
import WarningIcon from '@/react/components/icons/warning'
import s from '../../profile.module.scss'
import TaxInfoPopup from '@/react/popups/tax.info.popup'

const TaxStatus = ( { disabled } ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const { taxStatus, taxName, errors, taxIIN } = globalState
  
  return (
    
    <div>
      
      <p className={ `text-20 ${ s.profile__section__title }` }>
        
        Налоговый статус
      
      </p>
      
      <form className={ `${ s.profile__section__filedsWrapper }` }>
        
        <Select
          
          placeholder="Налоговый статус"
          placeholderIcon={ <WarningIcon/> }
          options={ taxStatusesList }
          value={ taxStatus }
          onChange={ value => globalActions.profile.setTaxStatus( value ) }
          onIconClick={ () => globalActions.tax.showTaxInfoPopup( 'show' ) }
          isFirstIconClick={ !globalState.tax.taxAgree }
          disabled={ disabled }
        
        />
        
        { taxStatus !== 'individual' && taxStatus !== 'self_employed' &&
          
          <Textfield
            
            className={ `${ s.profile__section__filedsWrapper__filed }` }
            placeholder={ 'Полное наименование' }
            value={ taxName }
            onChange={ ( e ) => globalActions.profile.setTaxName( e.target.value ) }
            error={ errors?.tax_name }
            disabled={ disabled }
          
          />
          
        }
        
        { taxStatus !== 'individual' &&
          
          <Textfield
            
            className={ `${ s.profile__section__filedsWrapper__filed }` }
            placeholder={ 'ИНН' }
            value={ taxIIN }
            onChange={ ( e ) => globalActions.profile.setTaxIIN( e.target.value ) }
            error={ errors?.tax_inn }
            disabled={ disabled }
            type = "number"
          
          />
          
        }
      
      </form>
      
      <TaxInfoPopup
        
        isOpened={ globalState.tax.isShowTaxInfoPopup }
        closePopup={ () => globalActions.tax.showTaxInfoPopup( 'close' ) }
        bodyClassName={ `${ s.profile__section__infoPopup }` }
      
      />
    
    </div>
  
  )
  
}

export default TaxStatus
