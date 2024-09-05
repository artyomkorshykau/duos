import Arrow from "@/react/components/icons/arrow.jsx";
import s from './constructor.header.module.scss';
import Link from 'next/link';
import Status from "@/react/components/status";
import DefaultButton from "@/react/components/buttons/default.button";
import Promote from "@/react/components/icons/promote";
import { DuosEditor } from "@/react/components/editor/dist";

const breadcrumbsList = ["Анкетирование", "Публикации", "Новая публикация"]

const ConstructorHeader = ( props ) => {

  return (

    <div className = {`${ s.constructorHeader }`}>

      <div className = {`${ s.constructorHeader__wrapper }`}>

        <div className = {`${ s.constructorHeader__wrapper__navigation }`}>

          <Link className = {`${ s.constructorHeader__wrapper__navigation__back }`} href = {'/'}>

            <Arrow direction = { 'left' } fill = { '#7C92A7' }/>
            <p className = {`text-14 ${ s.constructorHeader__wrapper__navigation__back__title }`}>Назад</p>

          </Link>

          <div className = { s.constructorHeader__wrapper__navigation__breadcrumbs }>

            { breadcrumbsList.map(( breadcrumbs, index ) => (

              <>
                
                <p className = {`text-13 ${ s.constructorHeader__wrapper__navigation__breadcrumbs__text }`}>

                  { breadcrumbs }

                </p>

                <div className = { s.constructorHeader__wrapper__navigation__breadcrumbs__dot }/>

              </>

            ))}

          </div>

          <Status status = { 'New' } />

        </div>

        <p className = {`text-26 ${ s.constructorHeader__wrapper__title }`}>

          Новая публикация

        </p>

        <div className = {`${ s.constructorHeader__wrapper__buttons }`}>

          <DefaultButton

            name = { 'Продвигать' }
            className = {`${ s.constructorHeader__wrapper__buttons__promote }`}
            action = { () => {console.log("Promote")} }
            icon = {  <Promote direction = { 'right' } fill = { '#fff' }/> }
            positionIcon = 'right'

          />

          <DefaultButton

            gray
            name = { 'Сохранить в черновики' }
            action = {() => { console.log('save') }}

          />

          <DefaultButton

            name = { 'Отменить' }
            className = {`${ s.constructorHeader__wrapper__buttons__cancel }`}
            action = { () => { console.log('cancel') } }

          />
          
        </div>

      </div>

      <div style = {{ width: "52.083vw" }}>

        <DuosEditor />

      </div>

    </div>

  )

}

export default ConstructorHeader