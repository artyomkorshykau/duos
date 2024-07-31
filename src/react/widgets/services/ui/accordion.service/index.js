import useGlobal from '@/store'
import AccordionParent from '@/react/widgets/accordion.parent'
import ChoiceDirection from '../choice.direction/ui';
import Education from '../education/ui';
import { useEffect, useState } from 'react';
import AccordionChildren from '@/react/widgets/accordion.children';
import AccordionServiceChildren from '../accordion.service.children';

const AccordionService = ({

  category,
  index

}) => {

  const [ globalState, globalActions ] = useGlobal()
  
  const { service } = globalState;

  const [title, setTitle] = useState(category.title)

  const {
    directionWorkExperience,
    direction,
    directionName,
    education,
    educationOrganizationName,
    educationCourseName,
    educationCourseAuthor,
    educationDuration,
    educationCompletionDate,
  } = service.category?.[index]

  useEffect(() => {
    const direction = service.category?.[index]?.direction

    if (direction === "Other") {
      setTitle(
        service.category?.[index]?.directionName || category.title
      )
    } else {
      setTitle(direction || category.title)
    }
  }, [service.category])

  useEffect(() => {
    if (category.status === "New") {
      const timer = setTimeout(() => {
        globalActions.service.setChangeStatusCategory("NotFinished", index)
      }, 15000)

      return () => clearTimeout(timer)
    }
  }, [category.status])

  useEffect(() => {
    if (
      (direction === "Other" ? directionName : direction) &&
      directionWorkExperience &&
      education &&
      educationOrganizationName &&
      educationCourseName &&
      educationCourseAuthor &&
      educationDuration &&
      educationCompletionDate &&
      category.status !== "New"
    ) {
      globalActions.service.setChangeStatusCategory("Filled", index)
    } else if (category.status !== "New") {
      globalActions.service.setChangeStatusCategory("NotFinished", index)
    }
  }, [
    directionWorkExperience,
    direction,
    directionName,
    education,
    educationOrganizationName,
    educationCourseName,
    educationCourseAuthor,
    educationDuration,
    educationCompletionDate,
  ])

  const content = (i) => {

    return (

      <>
        <ChoiceDirection i = { i }/>

        <Education i = { i }/>
        
      </>
      
    )

  }

  return (
    <AccordionParent
      category = { category }
      i = { index }
      isDelete = { service.category.length > 1 }
      content = { () => content(index) }
      title = { title }
      type = "Направление"
      deletePopupAction = {() => globalActions.service.setDeleteCategory(index)}
      addService = {(categoryIndex) =>
        globalActions.service.setNewServices(categoryIndex)
      }>
      {category.services.map((el, i) => (
        <AccordionServiceChildren
          key = { i }
          el = { el }
          categoryIndex = { index }
          i = { i }
          isDelete = { category.services.length > 1 }
        />
      ))}
    </AccordionParent>
  )

}

export default AccordionService