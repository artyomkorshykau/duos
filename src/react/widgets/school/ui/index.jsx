import SchoolName from '@/react/widgets/school/ui/school.name'
import CourseName from '@/react/widgets/school/ui/course.name'
import Comment from '@/react/widgets/school/ui/comment'
import s from '../../profile/ui/profile.module.scss'

const School = () => {

  return (

    <div className = { `${ s.profile }` }>

      <SchoolName />
      <CourseName />
      <Comment />

    </div>

  )

}

export default School