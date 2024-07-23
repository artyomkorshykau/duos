import s from '../../profile.module.scss'
import Textfield from '@/react/components/forms/textfield'
import { useUserName } from '@/react/widgets/profile/ui/nickname/model'
import updateLocalStorage from '@/scripts/helpers/update.local.storage.data'

const Nickname = () => {

  const {

    userName,
    setUserName

  } = useUserName()

  return (

    <div className = {`${ s.profile__section }`}>

      <p className = {`${ s.profile__section__title }`}>

        Псевдоним

      </p>

      <p className = {`text-16 ${ s.profile__section__description }`}>

        Если вы работаете под псевдонимом, укажите его здесь, тогда он будет отображаться на платформе вместо ваших ФИО

      </p>

      <form className = {`${ s.profile__section__filedsWrapper }`}>

        <Textfield

          className = {`${ s.profile__section__filedsWrapper__filed }`}
          placeholder = {'Псевдоним'}
          value = {userName}
          onChange = { (e) => {

            setUserName(e.target.value)
            updateLocalStorage('userName', e.target.value)

          }}

        />

      </form>

    </div>
  )

}

export default Nickname
