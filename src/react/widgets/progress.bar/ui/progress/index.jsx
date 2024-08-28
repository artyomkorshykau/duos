import cssIf from '@/scripts/helpers/css.if'
import useGlobal from '@/store'
import { useEffect, useState } from 'react'
import s from '../progress.bar.module.scss'

const calculateProgress = (statuses) => {

  if (statuses.length === 0) return 0;

  const statusValues = {
    'Filled': 1,
    'NotFinished': 0.1,
    'New': 0,
    'NotFilled': 0
  };

  const totalWeight = statuses.length
  const weightedSum = statuses.reduce((sum, status) => sum + statusValues[status], 0);

  return (weightedSum / totalWeight);
};

const Progress = ({

  id,
  check,
  activeId

 }) => {

  const [ globalState, globalActions ] = useGlobal()
  const { service, publications, profile, school } = globalState
  const { category, passport } = service

  const [ progress, setProgress ] = useState(0)

  useEffect(() => {
    
    if (activeId === 1 && activeId === id) {
      
      const requiredFields = [
        
        'lastName',
        'firstName',
        'surName',
        'birthDate',
        'gender',
        'nickName',
        'taxStatus',
        'city',
        'country'
        
      ];
      
      const filledRequiredFields = requiredFields.filter(field => {
        
        const value = profile[field]
        return value !== '' && value !== null && value !== undefined
        
      }).length
      
      const progress = 0.1 + (filledRequiredFields / requiredFields.length) * 0.9
      setProgress(Math.min(progress, 1))
      
    }  else if ( activeId === 2 && activeId === id ) {

      const statuses = category.map( item => item.status )

      const progress = calculateProgress( statuses )

      setProgress(progress)
        
    } else if (activeId === 3 && activeId === id) {
      
      function calculateProgress(schoolState) {
        
        let fieldsCount = 2
        let filledFields = 0
        
        if (schoolState.schoolName !== '') filledFields++
        if (schoolState.comment !== '') filledFields++ 
        
        fieldsCount += schoolState.courses.length
        
        for (const course of schoolState.courses) {
          
          if (course.name !== '') filledFields++
          
        }
        
        return filledFields / fieldsCount
      }
      
      const progress = calculateProgress(school)
      setProgress(progress)

    } else if (activeId === 4 && activeId === id) {

      const passportStatus = passport.status
      const statuses = category.map( item => item.documentStatus );
      const progress = calculateProgress([...statuses, passportStatus]);

      setProgress(progress)
      
    } else if ( activeId === 5 && activeId === id ) {

      const statuses = publications.categories.map( item => item.documentStatus );

      const progress = calculateProgress( statuses );

        setProgress(progress)

    }

  }, [ activeId, id, category, publications.categories, profile, school, publications ])

  useEffect(() => {

    if ((activeId === 2 || activeId === 4) && activeId === id) {
      
      globalActions.service.setChangeProgress(progress)
      
    } else if(activeId === 1 && activeId === id ) {

      globalActions.profile.setProfileProgress(progress)

    } else if(activeId === 3 && activeId === id) {

      globalActions.school.setSchoolProgress(progress)

    } else if(activeId === 5 && activeId === id) {

      globalActions.publications.setPublicationsProgress(progress)

    }

  }, [ progress ])

  return (

    <div
      
      style = { { width: `calc(${( id === 1 || id === 5) ? '8.85411vw' : '10.520766vw'} * ${progress})` } }
      className = {`${ s.progressBar__bar } ${ cssIf(check || id < activeId, s.progressBar__bar__check) } ${cssIf( id === 1, s.progressBar__bar__first ) } ${ cssIf(id === activeId, s.progressBar__bar__gradient) }`}
      
    />
  )

}

export default Progress