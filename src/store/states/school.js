import { v1 } from 'uuid'

const schoolState = {

  schoolName: '',
  courses: [

    { id: v1(), title: '' }

  ],

  comment: ''

}

const getInitialSchoolState = () => {

  if (typeof window !== "undefined") {

    const storedSchoolState = JSON.parse(localStorage.getItem("school"))

    if (storedSchoolState) {

      return storedSchoolState

    } else {

      localStorage.setItem("school", JSON.stringify(schoolState))

      return schoolState

    }

  }

  return schoolState

}

export default getInitialSchoolState