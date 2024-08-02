'use client'

import Selectfield from '@/react/components/forms/selectfield';
import s from '../../document.module.scss'
import useGlobal from '@/store';
import Textfield from '@/react/components/forms/textfield';
import { communicationList } from '@/constants/services';

const Recommendation = ({
  categoryIndex,
  i 
}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div className = 'w-full'>

      <p className = {`${ s.document__section__title }`}> Рекомендация к услуге </p>

      <p className = {`text-16 ${ s.document__section__description }`}>

        Контакты человека, который может подтвердить вашу компетентность

      </p>

      <form className = {`${ s.document__section__filedsGrid5 }`}>

        <Textfield

          className = {`${ s.document__section__filedsGrid5__filed } col-span-5`}
          placeholder = {'ФИО клиента'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[i]?.clientFullName }
          onChange = { (e) => globalActions.service.setClientFullName( e.target.value, categoryIndex, i ) }

        />
        <Selectfield

          className = {`${ s.document__section__filedsGrid5__filed } col-span-2`}
          placeholder = {'Способ связи'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[i]?.communication  }
          onChange = { (e) => globalActions.service.setCommunication( e.target.value, categoryIndex, i ) }
          options = { communicationList }

        />
        <Textfield

          className = {`${ s.document__section__filedsGrid5__filed } col-span-2`}
          placeholder = {'Номер'}
          value = { globalState.service.category?.[categoryIndex]?.services?.[i]?.phone }
          onChange = { (e) => globalActions.service.setPhone( e.target.value, categoryIndex, i ) }

        />

      </form>
      

    </div>

  )

}

export default Recommendation
