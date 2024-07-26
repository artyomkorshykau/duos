import s from './completed.directions.module.scss';
import NotiseInfo from '@/react/components/icons/notise.info';

const CompletedDirections = () => {

  return (

    <div className = {`${ s.wrapper }`}>

      <div className = {`${ s.wrapper__content }`}>

        <NotiseInfo fill = { '#18009E' }/>

        <p className = {`${ s.wrapper__content__text }`}>

          Заполненные вами направления и услуги будут отправлены на верификацию    администратора платформы.<br /> Также, в будущем вы сохраните возможность добавлять и другие направления или услуги.
          
        </p>
        
      </div>

    </div>

  )

}

export default CompletedDirections