import React from 'react'
import s from '@/react/widgets/profile/ui/profile.module.scss'
import Switch from '@/react/components/switch/index.jsx'
import { useNotify } from '@/react/widgets/profile/ui/notify/model.js'

const Notify = () => {
  const { handleToggle, globalState } = useNotify()
  
  const transformState = ( value ) => ( value ? 1 : 0 )
  
  return (
    <div className={ `${ s.profile__left_side__notify_wrapper }` }>
      <h4
        className={ `text-20 ${ s.profile__left_side__notify_wrapper__title }` }>
        Получать уведомления
      </h4>
      <div className={ `${ s.profile__left_side__notify_wrapper__notifies }` }>
        <div
          className={ `${ s.profile__left_side__notify_wrapper__notifies__notify }` }>
          <p
            className={ `text-13 ${ s.profile__left_side__notify_wrapper__notifies__notify__title }` }>
            E-mail
          </p>
          <Switch
            toggle={ globalState.user.notify_email }
            setToggle={ () => handleToggle( {
              notify_email: transformState( !globalState.user.notify_email ),
              notify_sms: transformState( globalState.user.notify_sms ),
              notify_push: null,
              notify_whatsapp: transformState( globalState.user.notify_whatsapp ),
              notify_telegram: transformState( globalState.user.notify_telegram )
            } ) }
          />
        </div>
        <div
          className={ `${ s.profile__left_side__notify_wrapper__notifies__notify }` }>
          <p
            className={ `text-13 ${ s.profile__left_side__notify_wrapper__notifies__notify__title }` }>
            SMS
          </p>
          <Switch
            toggle={ globalState.user.notify_sms }
            setToggle={ () => handleToggle( {
              notify_email: transformState( globalState.user.notify_email ),
              notify_sms: transformState( !globalState.user.notify_sms ),
              notify_push: null,
              notify_whatsapp: transformState( globalState.user.notify_whatsapp ),
              notify_telegram: transformState( globalState.user.notify_telegram )
            } ) }
          />
        </div>
        <div
          className={ `${ s.profile__left_side__notify_wrapper__notifies__notify }` }>
          <p
            className={ `text-13 ${ s.profile__left_side__notify_wrapper__notifies__notify__title }` }>
            WhatsApp
          </p>
          <Switch
            toggle={ globalState.user.notify_whatsapp }
            setToggle={ () => handleToggle( {
              notify_email: transformState( globalState.user.notify_email ),
              notify_sms: transformState( globalState.user.notify_sms ),
              notify_push: null,
              notify_whatsapp: transformState( !globalState.user.notify_whatsapp ),
              notify_telegram: transformState( globalState.user.notify_telegram )
            } ) }
          />
        </div>
        <div
          className={ `${ s.profile__left_side__notify_wrapper__notifies__notify }` }>
          <p
            className={ `text-13 ${ s.profile__left_side__notify_wrapper__notifies__notify__title }` }>
            Telegram
          </p>
          <Switch
            toggle={ globalState.user.notify_telegram }
            setToggle={ () => handleToggle( {
              notify_email: transformState( globalState.user.notify_email ),
              notify_sms: transformState( globalState.user.notify_sms ),
              notify_push: null,
              notify_whatsapp: transformState( globalState.user.notify_whatsapp ),
              notify_telegram: transformState( !globalState.user.notify_telegram )
            } ) }
          />
        </div>
      </div>
    </div>
  )
}

export default Notify
