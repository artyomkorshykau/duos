'use client'

import Select from '@/react/components/forms/select'
import s from '../../services.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store'
import { dayWeekMonthYearList, paymentFormatList } from '@/constants/services'
import cssIf from '@/scripts/helpers/css.if'
import { useEffect, useState } from 'react'

const PaymentFormat = ({

  categoryIndex,
  index

}) => {

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

      <p className = {`${ s.service__section__title }`}>Формат оплаты работы</p>

      <form className = {`${ s.service__section__paymentFormat }`}>

        <Select
          
          className = {`${ s.service__section__filedsGrid__filed } ${ cssIf( globalState.service.category?.[categoryIndex]?.services?.[index]?.paymentFormat !== 'subscription', 'col-span-2' ) }`}
          placeholder = {'Формат оплаты услуги'}
          options = { paymentFormatList }
          value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.paymentFormat }
          onChange = { value => globalActions.service.setPaymentFormat( value, categoryIndex, index ) }
          
        />

        { globalState.service.category?.[categoryIndex]?.services?.[index]?.paymentFormat === 'subscription' &&
          <Select
            
            className = {`${ s.service__section__filedsGrid__filed } ${ cssIf( globalState.service.category?.[categoryIndex]?.services?.[index]?.paymentFormat !== 'subscription', 'col-span-2' ) }`}
            placeholder = 'День/неделя/месяц/год'
            options = { dayWeekMonthYearList }
            value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.dayWeekMonthYearList }
            onChange = { value => globalActions.service.setDayWeekMonthYearList( value, categoryIndex, index ) }
          
          />
        }

        { ( globalState.service.category?.[categoryIndex]?.services?.[index]?.paymentFormat === 'fix' || 
          globalState.service.category?.[categoryIndex]?.services?.[index]?.paymentFormat === 'subscription' ||
          !globalState.service.category?.[categoryIndex]?.services?.[index]?.paymentFormat) &&

          <Textfield
          
            className = {`${ s.service__section__filedsGrid__filed }`}
            placeholder = {'Стоимость, руб'}
            value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.price }
            onChange = {(e) => globalActions.service.setPrice( e.target.value, categoryIndex, index )}
            type = { 'number' }
            
          />
          
        }
        
        { globalState.service.category?.[categoryIndex]?.services?.[index]?.paymentFormat === 'range' &&
        
          <>
          
            <Textfield
            
              className = {`${ s.service__section__filedsGrid__filed }`}
              placeholder = {'От, руб'}
              value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.from }
              onChange = {(e) => globalActions.service.setFrom( e.target.value, categoryIndex, index )}
              type = { 'number' }
              
            />
            
            <Textfield
              
              className = {`${ s.service__section__filedsGrid__filed }`}
              placeholder = {'До, руб'}
              value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.before }
              onChange = {(e) => globalActions.service.setBefore( e.target.value, categoryIndex, index )}
              type = { 'number' }
              
            />

          </>
          
        }

      </form>

    </div>

  )

}

export default PaymentFormat
