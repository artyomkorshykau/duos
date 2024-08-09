'use client'

import Selectfield from '@/react/components/forms/selectfield';
import s from '../../services.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';
import { deliveryFormatList, minuteHoursDaysList } from '@/constants/services';
import {useEffect, useState} from "react";

const WorkClients = ({

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

      <p className = {`${ s.service__section__title }`}>Формат работы с клиентами</p>

      <form className={`${s.service__section__filedsGrid}`}>

        <Selectfield
          
          // className = {`${ s.service__section__filedsGrid__filed } col-span-2`}
          className = 'col-span-2'
          placeholder = 'Формат оказания услуги'
          options = { deliveryFormatList }
          value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.deliveryFormat }
          onChange = { value => globalActions.service.setDeliveryFormat( value, categoryIndex, index ) }
          
        />

        <Textfield
          
          className = {`${ s.service__section__filedsGrid__filed }`}
          placeholder = 'Длительность'
          value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.duration }
          onChange = {(e) => globalActions.service.setDuration( e.target.value, categoryIndex, index )}
          
        />
        
        <Selectfield

          // className = {`${ s.service__section__filedsGrid__filed }`}
          placeholder = {'Минут, часов, дней...'}
          options = { minuteHoursDaysList }
          value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.minuteHoursDays }
          onChange = { value => globalActions.service.setDuration( value, categoryIndex, index ) }
          
        />

      </form>

    </div>

  )

}

export default WorkClients
