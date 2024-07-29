'use client'

import Textarea from '@/react/components/forms/textarea';
import s from '../../profile.module.scss'
import useGlobal from '@/store';

const ServiceDescription = ({

  categoryIndex,
  i

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}> Подробное описание услуги </p>

      <form className = {`${ s.profile__section__filedsGrid }`}>

        <Textarea
          
          className = {`${ s.profile__section__filedsGrid__textArea } col-span-2 max-w-full`}
          placeholder = { 'Опишите суть услуги, методы, особенности' }
          value = { globalState.profile.category?.[categoryIndex]?.services?.[i]?.meaningService }
          onChange = {(e) => globalActions.profile.setMeaningService( e.target.value, categoryIndex, i )}
          
        />

      </form>

    </div>

  )

}

export default ServiceDescription
