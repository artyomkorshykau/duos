'use client'

import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield';
import useGlobal from '@/store';
import Selectfield from '@/react/components/forms/selectfield'
import { taxStatuesList } from '@/constants/profile'
import { useState } from 'react'

const TaxStatus = () => {

  const [ globalState, globalActions ] = useGlobal()

  const [ taxStatus, setTaxStat ] = useState()

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}>

        Налоговый статус

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Selectfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = { 'Налоговый статус '}
          value = { taxStatus }
          onChange = { (e) => {

            setTaxStat( e.target.value )
            globalActions.profile.setTaxStatus( e.target.value )

          }}
          options = { taxStatuesList }

        />

        { taxStatus !== 'Individual' && taxStatus !== 'self-employed' &&

        <Textfield

          className={ `${ s.profile__section__filedsWrapper__filed }` }
          placeholder={ 'Полное наименование' }
          value={ globalState.profile.taxName }
          onChange={ ( e ) => globalActions.profile.setTaxName( e.target.value ) }

        />

        }

        { taxStatus !== 'Individual' &&

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
