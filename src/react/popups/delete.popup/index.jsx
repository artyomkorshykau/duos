import DefaultButton from "@/react/components/buttons/default.button";
import Popup from "../popup";
import s from "./delete.module.scss";

const DeletePopup = ({

  isOpened = false,
  closePopup = () => {},
  title,
  type,
  action

}) => {


  const handleClosePopup = () => {

    closePopup();

  };

  return (

    <Popup

      titleLeft = "Удалить?"
      isOpened = { isOpened }
      closePopup = { handleClosePopup }
      bodyClassName = {`${ s.delete__popup }`}
      background
      closeBackground

    >
      <div className = {`${ s.delete__popup__content }`}>

        <p className = {`${ s.delete__popup__content__text }`}>Вы действительно хотите удалить</p>
        <p className = {`${ s.delete__popup__content__info }`}>{ type } ”{ title }”?</p>
        
        <div className = {`${ s.delete__popup__content__buttons }`}>
          
          <DefaultButton

            gray
            name = "Отменить"
            className = {`${ s.wrapper__button }`}
            action = { handleClosePopup }

          />

          <DefaultButton

            name = "Удалить"
            type = "delete"
            className = {`${ s.delete__popup__content__buttons__delete }`}
            action = { action }

          />

        </div>

      </div>

    </Popup>

  )

}

export default DeletePopup;