'use client'

import Textfield from '@/react/components/forms/textfield';
import useGlobal from '@/store';
import { taxStatusesList } from '@/constants/profile';
import Select from '@/react/components/forms/select';
import WarningIcon from '@/react/components/icons/warning';
import s from '../../profile.module.scss';
import { useEffect, useState } from "react";
import TaxInfoPopup from "@/react/popups/tax.info.popup";
import DeletePopup from "@/react/popups/delete.popup";

const TaxStatus = () => {

  const [ globalState, globalActions ] = useGlobal();

  //TODO delete this when api will ready
  const [ isLoaded, setIsLoaded ] = useState( false );

  useEffect( () => {

    setIsLoaded( true );

  }, [] );

  if ( !isLoaded ) {

    return <div>Loading...</div>;

  }

  return (

    <div>

      <p className = {`text-20 ${ s.profile__section__title }`}>

        Налоговый статус

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Select

          placeholder = 'Налоговый статус'
          placeholderIcon = { <WarningIcon /> }
          options = { taxStatusesList }
          value = { globalState.profile.taxStatus }
          onChange = { value => globalActions.profile.setTaxStatus( value ) }
          onIconClick = { () => globalActions.tax.showTaxInfoPopup('show') }
          isFirstIconClick = { !globalState.tax.taxAgree }

        />

        { globalState.profile.taxStatus !== 'individual' && globalState.profile.taxStatus !== 'self_employed' &&

          <Textfield

            className={ `${ s.profile__section__filedsWrapper__filed }` }
            placeholder={ 'Полное наименование' }
            value = { globalState.profile.taxName }
            onChange = { ( e ) => globalActions.profile.setTaxName( e.target.value ) }

          />

        }

        { globalState.profile.taxStatus !== 'individual' &&

        <Textfield

          className = { `${ s.profile__section__filedsWrapper__filed }` }
          placeholder = { 'ИНН' }
          value = { globalState.profile.taxIIN }
          onChange = { ( e ) => globalActions.profile.setTaxIIN( e.target.value ) }

        />

        }

      </form>

      <TaxInfoPopup

        isOpened = { globalState.tax.isShowTaxInfoPopup }
        closePopup = { () => globalActions.tax.showTaxInfoPopup('close')}
        bodyClassName = { `${ s.profile__section__infoPopup }`}

      />

    </div>

  )

}

export default TaxStatus
