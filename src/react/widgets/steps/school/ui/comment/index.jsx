import s from '@/react/widgets/steps/school/ui/school.module.scss'
import Textarea from '@/react/components/forms/textarea'
import useGlobal from "@/store";

const Comment = () => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div className={ `text-20 ${ s.school__section }` }>

      <p className={ `${ s.school__section__title }` }>

        Комментарий

      </p>

      <form className={ `${ s.school__section__filedsWrapper }` }>

        <Textarea

          placeholder = { 'Расскажите что-то о школе' }
          value = { globalState.school.comment }
          onChange = { (e) => globalActions.school.setComment(e.target.value)}

        />

      </form>

    </div>

  )

}

export default Comment