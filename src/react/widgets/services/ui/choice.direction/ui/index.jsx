import { directionList } from '@/constants/services';
import s from '../../services.module.scss'
import Textfield from '@/react/components/forms/textfield';
import useGlobal from '@/store';
import Selectfield from '@/react/components/forms/selectfield';

const ChoiceDirection = ({

  index

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.service__section__title }`}>Выбор направления</p>

      <form className = {`${ s.service__section__filedsWrapper }`}>

        <Selectfield

          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'Выбрать направление'}
          value = { globalState.service.category?.[index]?.direction }
          onChange = { (e) => globalActions.service.setDirection( e.target.value, index ) }
          options = { directionList }

        />
        {(globalState.service.category?.[index]?.direction === 'Other') && 
          
          <Textfield

            className = {`${ s.service__section__filedsWrapper__filed }`}
            placeholder = {'Название направления'}
            value = { globalState.service.category?.[index]?.directionName }
            onChange = { (e) => globalActions.service.setDirectionName( e.target.value, index )}

          />
          
        }
        
        <Textfield

          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'Стаж работы по направлению, лет'}
          value = { globalState.service.category?.[index]?.directionWorkExperience }
          onChange = { (e) => globalActions.service.setDirectionWorkExperience( e.target.value, index )}

        />

      </form>

    </div>

  )

}

export default ChoiceDirection
