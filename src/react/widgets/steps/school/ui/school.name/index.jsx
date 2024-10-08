import s from '../school.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from "@/store";

const SchoolName = () => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div className={ `${ s.school__section }` }>

      <p className={ `text-20 ${ s.school__section__title }` }>

        Название школы

      </p>

      <p className={ `text-16 ${ s.school__section__description }` }>

        Имеется в виду, например, “Школа психологии Ивана Иванова”

      </p>

      <form className={ `${ s.school__section__filedsWrapper }` }>

        <Textfield

          className={ ` ${ s.school__section__filedsWrapper__filed }` }
          placeholder={ 'Введите название здесь' }
          value = { globalState.school.schoolName }
          onChange = { (e) => globalActions.school.setSchoolName(e.target.value)}

        />

      </form>

    </div>

  )

}

export default SchoolName