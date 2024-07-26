'use client'

import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';

const General = ({

  categoryIndex,
  i

}) => {

  const [globalState, globalActions] = useGlobal()

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}> Общее </p>

      <form className={`${s.profile__section__filedsGrid}`}>

        <Textfield
          
          className = {`${ s.profile__section__filedsGrid__filed } col-span-2 max-w-full`}
          placeholder = {'Название услуги'}
          value = { globalState.profile.category?.[categoryIndex]?.services?.[i]?.serviceName }
          onChange = {(e) => globalActions.profile.setServiceName( e.target.value, categoryIndex, i )}
          
        />

        <Textfield
          
          className = {`${ s.profile__section__filedsGrid__filed }`}
          placeholder = {'Тип услуги'}
          value = { globalState.profile.category?.[categoryIndex]?.services?.[i]?.serviceType }
          onChange = {(e) => globalActions.profile.setServiceType( e.target.value, categoryIndex, i )}
          
        />

      </form>

    </div>

  )

}

export default General
