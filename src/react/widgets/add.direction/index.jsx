import s from './add.direction.module.scss';
import Plus from '@/react/components/icons/plus';
import DefaultButton from '@/react/components/buttons/default.button';

const AddDirection = () => {

  return (

    <div className = {`${ s.wrapper }`}>
      
      <DefaultButton

        gray
        name = "Добавить направление"
        className = {`${ s.wrapper__button }`}

      >

        <Plus fill = { '#18009E' }/>

      </DefaultButton>

    </div>

  )

}

export default AddDirection