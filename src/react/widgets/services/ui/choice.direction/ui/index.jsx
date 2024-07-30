import s from '../../services.module.scss'
import Textfield from '@/react/components/forms/textfield';
import useGlobal from '@/store';

const ChoiceDirection = ({

  i

}) => {

  const [globalState, globalActions] = useGlobal()

  return (

    <div>

      <p className = {`${ s.service__section__title }`}>Выбор направления</p>

      <form className = {`${ s.service__section__filedsWrapper }`}>

        <Textfield

          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'Выбрать направление'}
          value = { globalState.service.category?.[i]?.direction }
          onChange = { (e) => globalActions.service.setDirection( e.target.value, i )}

        />
        <Textfield

          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'Название направления'}
          value = { globalState.service.category?.[i]?.directionName }
          onChange = { (e) => globalActions.service.setDirectionName( e.target.value, i )}

        />
        <Textfield

          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'Стаж работы по направлению, лет'}
          value = { globalState.service.category?.[i]?.directionWorkExperience }
          onChange = { (e) => globalActions.service.setDirectionWorkExperience( e.target.value, i )}

        />

      </form>

    </div>

  )

}

export default ChoiceDirection
