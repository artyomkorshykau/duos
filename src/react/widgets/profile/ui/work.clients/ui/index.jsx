'use client'

import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';

const WorkClients = ({

  categoryIndex,
  i

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}>Формат работы с клиентами</p>

      <form className={`${s.profile__section__filedsGrid}`}>

        <Textfield
          
          className = {`${ s.profile__section__filedsGrid__filed } col-span-2`}
          placeholder = {'Формат оказания услуги'}
          value = { globalState.profile.category?.[categoryIndex]?.services?.[i]?.deliveryFormat }
          onChange = {(e) => globalActions.profile.setDeliveryFormat( e.target.value, categoryIndex, i )}
          
        />

        <Textfield
          
          className = {`${ s.profile__section__filedsGrid__filed }`}
          placeholder = {'Длительность'}
          value = { globalState.profile.category?.[categoryIndex]?.services?.[i]?.duration }
          onChange = {(e) => globalActions.profile.setDuration( e.target.value, categoryIndex, i )}
          
        />
        
        <Textfield

          className = {`${ s.profile__section__filedsGrid__filed }`}
          placeholder = {'Минут, часов, дней...'}
          value = { globalState.profile.category?.[categoryIndex]?.services?.[i]?.minuteHoursDays }
          onChange = {(e) => globalActions.profile.setMinuteHoursDays( e.target.value, categoryIndex, i )}
          
        />

      </form>

    </div>

  )

}

export default WorkClients
