import s from './add.direction.module.scss';
import Plus from '@/react/components/icons/plus';
import DefaultButton from '@/react/components/buttons/default.button';
import useGlobal from '@/store';

const AddDirection = () => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div className = {`${ s.wrapper }`}>
      
      <DefaultButton

        gray
        name = "Добавить направление"
        className = {`${ s.wrapper__button }`}
        icon = { <Plus fill = { '#18009E' }/> }
        positionIcon = 'right'
        action = { () => globalActions.service.setNewDirection() }

      />

    </div>

  )

}

export default AddDirection