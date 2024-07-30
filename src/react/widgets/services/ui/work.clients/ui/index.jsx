'use client'

import s from '../../services.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';

const WorkClients = ({

  categoryIndex,
  i

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.service__section__title }`}>Формат работы с клиентами</p>

      <form className={`${s.service__section__filedsGrid}`}>

        <Textfield
          
          className = {`${ s.service__section__filedsGrid__filed } col-span-2`}
          placeholder = {'Формат оказания услуги'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[i]?.deliveryFormat }
          onChange = {(e) => globalActions.service.setDeliveryFormat( e.target.value, categoryIndex, i )}
          
        />

        <Textfield
          
          className = {`${ s.service__section__filedsGrid__filed }`}
          placeholder = {'Длительность'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[i]?.duration }
          onChange = {(e) => globalActions.service.setDuration( e.target.value, categoryIndex, i )}
          
        />
        
        <Textfield

          className = {`${ s.service__section__filedsGrid__filed }`}
          placeholder = {'Минут, часов, дней...'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[i]?.minuteHoursDays }
          onChange = {(e) => globalActions.service.setMinuteHoursDays( e.target.value, categoryIndex, i )}
          
        />

      </form>

    </div>

  )

}

export default WorkClients
