import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield';
import useGlobal from '@/store';

const ChoiceDirection = ({

  i

}) => {

  const [globalState, globalActions] = useGlobal()

  return (

    <div>

      <p className = {`${ s.profile__section__title }`}>Выбор направления</p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Выбрать направление'}
          value = { globalState.profile.category?.[i]?.direction }
          onChange = { (e) => globalActions.profile.setDirection( e.target.value, i )}

        />
        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Название направления'}
          value = { globalState.profile.category?.[i]?.directionName }
          onChange = { (e) => globalActions.profile.setDirectionName( e.target.value, i )}

        />
        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Стаж работы по направлению, лет'}
          value = { globalState.profile.category?.[i]?.directionWorkExperience }
          onChange = { (e) => globalActions.profile.setDirectionWorkExperience( e.target.value, i )}

        />

      </form>

    </div>

  )

}

export default ChoiceDirection
