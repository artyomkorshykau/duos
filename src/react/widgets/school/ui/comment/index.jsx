import s from '@/react/widgets/school/ui/school.module.scss'
import Textarea from '@/react/components/forms/textarea'

const Comment = () => {

  return (

    <div className={ `text-20 ${ s.school__section }` }>

      <p className={ `${ s.school__section__title }` }>

        Комментарий

      </p>

      <form className={ `${ s.school__section__filedsWrapper }` }>

        <Textarea placeholder = { 'Расскажите что-то о школе' }/>

      </form>

    </div>

  )

}

export default Comment