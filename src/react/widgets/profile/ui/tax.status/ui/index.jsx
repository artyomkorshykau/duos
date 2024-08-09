'use client'

import Textfield from '@/react/components/forms/textfield';
import useGlobal from '@/store';
import { taxStatusesList } from '@/constants/profile';
import Selectfield from '@/react/components/forms/selectfield';
import WarningIcon from '@/react/components/icons/warning';
import s from '../../profile.module.scss';
import { useEffect, useState } from "react";

const TaxStatus = () => {

  const [ globalState, globalActions ] = useGlobal();

  //TODO delete this when api will ready
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (

    <div>

      <p className = {`text-20 ${ s.profile__section__title }`}>

        Налоговый статус

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Selectfield

          // className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = 'Налоговый статус'
          placeholderIcon = { <WarningIcon /> }
          options = { taxStatusesList }
          value = { globalState.profile.taxStatus }
          onChange = { value => globalActions.profile.setTaxStatus( value ) }

        />

        { globalState.profile.taxName !== 'Individual' && globalState.profile.taxName !== 'self-employed' &&

          <Textfield

            className={ `${ s.profile__section__filedsWrapper__filed }` }
            placeholder={ 'Полное наименование' }
            value = { globalState.profile.taxName }
            onChange={ ( value ) => globalActions.profile.setTaxName( value ) }

          />

        }

        { globalState.profile.taxName !== 'Individual' &&

        <Textfield

          className={ `${ s.profile__section__filedsWrapper__filed }` }
          placeholder={ 'ИНН' }
          value={ globalState.profile.taxIIN }
          onChange={ ( e ) => globalActions.profile.setTaxIIN( e.target.value ) }

        />

        }

      </form>

    </div>

  )

}

export default TaxStatus
