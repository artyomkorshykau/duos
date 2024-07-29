import s from './autosave.module.scss'
import DefaultButton from '@/react/components/buttons/default.button';
import Save from '@/react/components/icons/save';
import NotiseInfo from '@/react/components/icons/notise.info';
import NotiseSuccess from '@/react/components/icons/notise.success';

const Autosave = ( props ) => {

  const {

    onClickHandler

  } = props

  return (

    <div className = {`${ s.autosave }`}>

      <div

        className = {`relative ${ s.autosave__notise }`}

      >

          <div className = {`text-13 ${ s.autosave__notise__info }`}>

            <p>

              Анкета сохраняется автоматически, даже если вы закроете страницу данные не исчезнут.

            </p>

            <p>

              Нажмите кнопку ниже, чтобы временно закрыть анкету и продолжить
              позже.

            </p>

            <div className = {`${ s.autosave__notise__info__icon }`}>

              <NotiseSuccess

                width = { 10 }
                height = { 10 }
                check = { false }
                fill = { '#D1E3F7' }

              />

            </div>

          </div>

        <NotiseInfo fill = { '#A7CAFF' }/>

        <p className = {`text-13 ${ s.autosave__notise__title }`}>

          Как сохранить анкету?

        </p>

      </div>

      <DefaultButton

        name = { 'Продолжить позже' }
        className = {`${ s.autosave__button }`}
        action = { onClickHandler }
        icon = { <Save/> }
        positionIcon = 'right'

      />

    </div>

  )

}

export default Autosave