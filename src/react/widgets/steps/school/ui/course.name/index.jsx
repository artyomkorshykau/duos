import s from '../school.module.scss'
import Textfield from '@/react/components/forms/textfield'
import Plus from '@/react/components/icons/plus'
import DefaultButton from '@/react/components/buttons/default.button'
import Cross from '@/react/components/icons/cross'
import useGlobal from '@/store'

const CourseName = () => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div className = { `${ s.school__section }` }>

      <p className = { `text-20 ${ s.school__section__title }` }>

        Название курса

      </p>

      <p className = { `text-16 ${ s.school__section__description }` }>

        Имеется в виду курс, который вы преподаете своим клиентам или студентам

      </p>

      <form>

        { globalState.school.courses && globalState.school.courses.map( ( course, index ) => {

          return (

            <div

              className = { `${ s.school__section__filedsWrapper }` }
              key = { course.id }

            >

              <Textfield

                className = { `${ s.school__section__filedsWrapper__filed }` }
                placeholder = { 'Введите название здесь' }
                value = { course.name }
                onChange = { (e) => globalActions.school.setCourseName(index, e.target.value )}

              />

              { index !== 0 &&

                <DefaultButton

                  gray
                  name = ""
                  className = { `${ s.school__section__filedsWrapper__cross_button }` }
                  icon = { <Cross fill = { '#18009E' }/> }
                  positionIcon = "right"
                  action = { () => globalActions.school.deleteCourse(index) }
                  buttonType = { 'button' }

                />

              }

            </div>

          )

        } )

        }

      </form>

      <DefaultButton

        gray
        name = "Добавить курс"
        className = { `${ s.school__section__add_button }` }
        icon = { <Plus fill = { '#18009E' }/> }
        positionIcon = 'right'
        action = { () => globalActions.school.addNewCourse() }

      />

    </div>

  )

}

export default CourseName