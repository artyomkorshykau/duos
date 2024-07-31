'use client'

import Selectfield from '@/react/components/forms/selectfield';
import s from '../../services.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';
import { dayWeekMonthYearList, minuteHoursDaysList, paymentFormatList } from '@/constants/services';
import cssIf from '@/scripts/helpers/css.if';

const PaymentFormat = ({

  categoryIndex,
  i

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.service__section__title }`}>Формат оплаты работы</p>

      <form className = {`${ s.service__section__filedsGrid }`}>

        <Selectfield
          
          className = {`${ s.service__section__filedsGrid__filed } ${ cssIf( globalState.service.category?.[categoryIndex]?.services?.[i]?.paymentFormat !== 'Subscription', 'col-span-2' ) }`}
          placeholder = {'Формат оплаты услуги'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[i]?.paymentFormat }
          onChange = {(e) => globalActions.service.setPaymentFormat( e.target.value, categoryIndex, i )}
          options = { paymentFormatList }
          
        />

        { globalState.service.category?.[categoryIndex]?.services?.[i]?.paymentFormat === 'Subscription' && 
          <Selectfield
            
            className = {`${ s.service__section__filedsGrid__filed } ${ cssIf( globalState.service.category?.[categoryIndex]?.services?.[i]?.paymentFormat !== 'Subscription', 'col-span-2' ) }`}
            placeholder = {'День/неделя/месяц/год'}
            value = { globalState.service.category?.[categoryIndex]?.services?.[i]?.dayWeekMonthYearList }
            onChange = {(e) => globalActions.service.setDayWeekMonthYearList( e.target.value, categoryIndex, i )}
            options = { dayWeekMonthYearList }
          
          />
        }

        { ( globalState.service.category?.[categoryIndex]?.services?.[i]?.paymentFormat === 'Fixed' || 
          globalState.service.category?.[categoryIndex]?.services?.[i]?.paymentFormat === 'Subscription' ||
          !globalState.service.category?.[categoryIndex]?.services?.[i]?.paymentFormat) &&

          <Textfield
          
            className = {`${ s.service__section__filedsGrid__filed }`}
            placeholder = {'Стоимость, руб'}
            value = { globalState.service.category?.[categoryIndex]?.services?.[i]?.price }
            onChange = {(e) => globalActions.service.setPrice( e.target.value, categoryIndex, i )}
            
          />
          
        }
        
        { globalState.service.category?.[categoryIndex]?.services?.[i]?.paymentFormat === 'Range' &&
        
          <>
          
            <Textfield
            
              className = {`${ s.service__section__filedsGrid__filed }`}
              placeholder = {'От, руб'}
              value = { globalState.service.category?.[categoryIndex]?.services?.[i]?.from }
              onChange = {(e) => globalActions.service.setFrom( e.target.value, categoryIndex, i )}
              
            />
            
            <Textfield
              
              className = {`${ s.service__section__filedsGrid__filed }`}
              placeholder = {'До, руб'}
              value = { globalState.service.category?.[categoryIndex]?.services?.[i]?.before }
              onChange = {(e) => globalActions.service.setBefore( e.target.value, categoryIndex, i )}
              
            />

          </>
          
        }

      </form>

    </div>

  )

}

export default PaymentFormat
