const schoolState = {

  schoolName: '',
  courses: [{id: 0, comment: '', name: ''}],
  comment: '',
  errors: null

}

const getInitialSchoolState = () => {

  return schoolState

}

export default getInitialSchoolState
