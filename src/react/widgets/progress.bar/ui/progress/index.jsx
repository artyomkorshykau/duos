import cssIf from '@/scripts/helpers/css.if';
import useGlobal from '@/store';
import { useEffect, useState } from 'react';
import s from '../progress.bar.module.scss';

const calculateProgress = (statuses) => {

  if (statuses.length === 0) return 0;

  const statusValues = {
    'Filled': 1,
    'NotFinished': 0.1,
    'New': 0,
    'Не заполнено': 0
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
  
  const { service } = globalState

  const { category } = service
  
  const [ progress, setProgress ] = useState(1)

  useEffect(() => {

    if ( activeId === 2 && activeId === id ) {

      const statuses = category.map( item => item.status );

      const progress = calculateProgress( statuses );

      setProgress(progress)
        
    } else if (activeId === 3 && activeId === id) {

      setProgress(0.2) 

    }

  }, [ activeId, id, category ])

  useEffect(() => {

    if (activeId === 2 && activeId === id) {
      
      globalActions.service.setChangeProgress(progress)
      
    }

  }, [ progress ])

  return (

    <div
      style = { { width: `calc(${ id === 1 ? '8.85411vw' : '10.520766vw'} * ${progress})` } }
      className = {`${ s.progressBar__bar } ${ cssIf(check || id < activeId, s.progressBar__bar__check) } ${cssIf( id === 1, s.progressBar__bar__first ) } ${ cssIf(id === activeId, s.progressBar__bar__gradient) }`}
    />
  )

}

export default Progress