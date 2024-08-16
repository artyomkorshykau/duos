import Popup from "../popup";
import s from './recovery.popup.module.scss'
import DefaultButton from "@/react/components/buttons/default.button";
import SignInIconWhite from "@/react/components/icons/sign.in.icon.white";

const RecoveryPopup = ({

 logIn,
 bodyClassName = "",
 isOpened = false,
 closePopup = () => {},
 email

 }) => {

  return (

    <Popup

      title = {`Отправили новый\nпароль на ваш e-mail`}
      subtitle = "Откройте почтовый ящик"
      isOpened = { isOpened }
      bodyClassName = { bodyClassName }
      closePopup = { closePopup }

    >

      <div className = { `${ s.recovery_content }` }>

        <p className = { `text-20 ${ s.recovery_content__email }` }>{ email }</p>
        <p className = { `text-13 ${ s.recovery_content__description }` }>

          там вы найдете письмо с новым паролем от вашего личного кабинета

        </p>

        <DefaultButton

          name = "Войти с новым паролем"
          action = { logIn }
          icon = { <SignInIconWhite /> }
          positionIcon = { 'right' }
          className = { `${ s.recovery_content__enter_button }` }

        />

      </div>

    </Popup>

  )

}

export default RecoveryPopup;