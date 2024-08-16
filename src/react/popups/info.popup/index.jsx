import { useEffect, useRef } from "react";
import Popup from "@/react/popups/popup";
import CloseInCircle from "@/react/components/icons/close.in.circle";
import DefaultButton from "@/react/components/buttons/default.button";
import s from './info.module.scss'

const InfoPopup = ({

  isOpened = false,
  closePopup = () => {},
  bodyClassName,

}) => {

  const popupRef = useRef(null);

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === 'Escape') {
        closePopup();
      }

    };

    const handleClickOutside = (event) => {

      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }

    };

    if (isOpened) {

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);

    }

    return () => {

      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);

    };

  }, [isOpened, closePopup]);

  const content = 
  
      <>

        <img src='/img/questionnaire/info.png' alt="publications"/>

        <div className = {`${ s.info_description }`}>

          <div className = "flex items-center justify-between w-full">

            <h3 className = {`text-26 ${ s.info_description__title }`}>А вы знали, что...</h3>

            <CloseInCircle
                
              onClick = { () => closePopup() }
              className = {`${ s.info_description__close_icon } pointer`}

            />

          </div>

          <p className = {`text-16 ${ s.info_description__description }`}>

            Чтобы лучше раскрыть свои профессиональные 
            достижения, рекомендуем указывать количество часов 
            практики, количество проведенных консультаций,
            разобранных кейсов и т.д. на 5м шаге анкеты
            (Публикации), в разделе «О себе».

          </p>

          <div className = {`${ s.info_description__agree }`}>

            <DefaultButton

              name = { 'Понятно' }
              className = {`${ s.info_description__agree__close_button }`}
              action = { closePopup }

            />

          </div>

        </div>

      </>

  return (

    <Popup

      isOpened={ isOpened }
      boxClassName={ bodyClassName }
      closePopup = { () => {} }
      contentOnly
      content = { content }
      closeBackground
      boxRef={ popupRef }

    >

    </Popup>

  )

}

export default InfoPopup