import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield';
import useGlobal from '@/store';

const TaxStatus = () => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}>

        Налоговый статус

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Налоговый статус'}
          value = { globalState.profile.taxStatus }
          onChange = { (e) => globalActions.profile.setTaxStatus(e.target.value)}

        />
        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Полное наименование'}
          value = { globalState.profile.taxName }
          onChange = { (e) => globalActions.profile.setTaxName(e.target.value)}

        />
        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'ИНН'}
          value = { globalState.profile.taxIIN }
          onChange = { (e) => globalActions.profile.setTaxIIN(e.target.value)}

        />

      </form>

    </div>

  )

}

export default TaxStatus
