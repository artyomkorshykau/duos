import { useEffect, useState } from "react";
import { directionList } from '@/constants/services';
import Textfield from '@/react/components/forms/textfield';
import WarningIcon from '@/react/components/icons/warning';
import Select from '@/react/components/forms/select';
import InfoPopup from "@/react/popups/info.popup";
import useGlobal from '@/store';
import s from '../../services.module.scss'

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

  const handleExperienceClick = () => {
    
    if (!globalState.info.firstIconClick) {

      globalActions.info.setShowInfoPopup(true)
      globalActions.info.setFirstIconClick()

    }
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

          onClick = { handleExperienceClick }
          onIconClick = { () => globalActions.info.setShowInfoPopup(true) }
          className = {`${ s.service__section__filedsWrapper__filed }`}
          placeholder = {'Стаж работы по направлению, лет'}
          placeholderIcon = { <WarningIcon /> }
          value = { globalState.service.category?.[index]?.directionWorkExperience }
          onChange = { (e) => globalActions.service.setDirectionWorkExperience( e.target.value, index ) }

        />

      </form>

      <InfoPopup

        isOpened = { globalState.info.showInfoPopup }
        closePopup = { () => globalActions.info.setShowInfoPopup(false)}
        bodyClassName = { `${ s.service__section__infoPopup }`}

      />

    </div>

  )

}

export default ChoiceDirection
