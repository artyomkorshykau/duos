import { directionList } from '@/constants/services';
import s from '../../services.module.scss'
import Textfield from '@/react/components/forms/textfield';
import useGlobal from '@/store';
import Select from '@/react/components/forms/select';
import {useEffect, useState} from "react";

const ChoiceDirection = ({

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

      <p className = {`${ s.service__section__title }`}>Выбор направления</p>

      <form className = {`${ s.service__section__filedsWrapper }`}>

        <Select

          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = 'Выбрать направление'
          options = { directionList }
          value = { globalState.service.category?.[index]?.direction }
          onChange = { ( value ) => globalActions.service.setDirection( value, index ) }

        />

        { globalState.service.category?.[index]?.direction === 'Other' &&
          
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
