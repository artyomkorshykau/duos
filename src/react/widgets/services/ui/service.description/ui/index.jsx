'use client'

import Textarea from '@/react/components/forms/textarea';
import s from '../../services.module.scss'
import useGlobal from '@/store';
import Save from "@/react/components/icons/save";

const ServiceDescription = ({

  categoryIndex,
  index

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.service__section__title }`}> Подробное описание услуги </p>

      <form className = {`${ s.service__section__filedsGrid }`}>

        <Textarea
          
          className = {`${ s.service__section__filedsGrid__textArea } col-span-2 max-w-full`}
          placeholder = { 'Опишите суть услуги, методы, особенности' }
          value = { globalState.service.category?.[ categoryIndex ]?.services?.[ index ]?.meaningService }
          onChange = { ( e ) => globalActions.service.setMeaningService(e.target.value, categoryIndex, index) }
          icon = { <Save fill="#FFFFFF" /> }
          
        />

      </form>

    </div>

  )

}

export default ServiceDescription
