'use client'

import Selectfield from '@/react/components/forms/selectfield';
import s from '../../services.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';
import { deliveryFormatList, minuteHoursDaysList } from '@/constants/services';

const WorkClients = ({

  categoryIndex,
  index

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.service__section__title }`}>Формат работы с клиентами</p>

      <form className={`${s.service__section__filedsGrid}`}>

        <Selectfield
          
          className = {`${ s.service__section__filedsGrid__filed } col-span-2`}
          placeholder = {'Формат оказания услуги'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.deliveryFormat }
          onChange = {(e) => globalActions.service.setDeliveryFormat( e.target.value, categoryIndex, index )}
          options = { deliveryFormatList }
          
        />

        <Textfield
          
          className = {`${ s.service__section__filedsGrid__filed }`}
          placeholder = {'Длительность'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.duration }
          onChange = {(e) => globalActions.service.setDuration( e.target.value, categoryIndex, index )}
          
        />
        
        <Selectfield

          className = {`${ s.service__section__filedsGrid__filed }`}
          placeholder = {'Минут, часов, дней...'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.minuteHoursDays }
          onChange = {(e) => globalActions.service.setMinuteHoursDays( e.target.value, categoryIndex, index )}
          options = { minuteHoursDaysList }
          
        />

      </form>

    </div>

  )

}

export default WorkClients
