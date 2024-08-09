import s from '../school.module.scss'
import Textfield from '@/react/components/forms/textfield'
import Plus from '@/react/components/icons/plus'
import DefaultButton from '@/react/components/buttons/default.button'
import { useState } from 'react'
import Cross from '@/react/components/icons/cross'

const CourseName = () => {

  const [ courses, setCourses ] = useState( [

    { id: 1, title: '' }

  ] )

  const handleOnChange = ( courseID, newValue ) => {

    const findCourse = courses.find( ( course ) => course.id === courseID )

    setCourses(courses

      .map( (course ) => course.id === findCourse.id
        ? {...course, title: newValue}
        : course )

    )

  }

  return (

    <div className = { `${ s.school__section }` }>

      <p className = { `text-20 ${ s.school__section__title }` }>

        Название курса

      </p>

      <p className = { `text-16 ${ s.school__section__description }` }>

        Имеется в виду курс, который вы преподаете своим клиентам или студентам

      </p>

      <form>

        { courses.map( ( course, index ) => {

          return (

            <div

              className = { `${ s.school__section__filedsWrapper }` }
              key = { index }

            >

              <Textfield

                className = { `${ s.school__section__filedsWrapper__filed }` }
                placeholder = { 'Введите название здесь' }
                value = { course.title }
                onChange = { (e) => handleOnChange( course.id, e.target.value) }

              />

              { index !== 0 &&

                <DefaultButton

                  gray
                  name = ""
                  className = { `${ s.school__section__filedsWrapper__cross_button }` }
                  icon = { <Cross fill = { '#18009E' }/> }
                  positionIcon = "right"
                  action = { () => setCourses( courses.filter( ( el ) => el.id !== course.id ))}
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
        action = { () => setCourses( [ ...courses, { id: courses.length + 1, title: '' } ] ) }

      />

    </div>

  )

}

export default CourseName