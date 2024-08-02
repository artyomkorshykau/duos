'use client'

import s from '../../services.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';

const General = ({

  categoryIndex,
  index

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.service__section__title }`}> Общее </p>

      <form className = {`${ s.service__section__filedsGrid }`}>

        <Textfield
          
          className = {`${ s.service__section__filedsGrid__filed } col-span-2 max-w-full`}
          placeholder = {'Название услуги'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.title }
          onChange = {(e) => globalActions.service.setTitle( e.target.value, categoryIndex, index )}
          
        />

        <Textfield
          
          className = {`${ s.service__section__filedsGrid__filed }`}
          placeholder = {'Тип услуги'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[index]?.serviceType }
          onChange = {(e) => globalActions.service.setServiceType( e.target.value, categoryIndex, index )}
          
        />

      </form>

    </div>

  )

}

export default General
