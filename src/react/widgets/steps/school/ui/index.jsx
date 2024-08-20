import s from '../../profile/ui/profile.module.scss'
import SchoolName from "@/react/widgets/steps/school/ui/school.name/index.jsx";
import CourseName from "@/react/widgets/steps/school/ui/course.name/index.jsx";
import Comment from "@/react/widgets/steps/school/ui/comment/index.jsx";

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