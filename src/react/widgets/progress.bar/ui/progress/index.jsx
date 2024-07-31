import s from '../progress.bar.module.scss'
import useGlobal from '@/store';
import cssIf from '@/scripts/helpers/css.if'
import { useEffect, useState } from 'react';

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

  const [ globalState ] = useGlobal()
  
  const { service } = globalState
  
  const [ style, setStyle ] = useState({})

  useEffect(() => {

    if (activeId === 2 && activeId === id) {

      const statuses = service.category.map(item => item.status);

      const progress = calculateProgress(statuses);

      setStyle({ width: `calc(9.531189vw * ${progress})` })  

    } else if (activeId === 3 && activeId === id) {

      setStyle({ width: `calc(9.531189vw * 0.5)` })  

    }

  }, [activeId, service.category])

  return (

    <div
      style = { style }
      className = {`${ s.progressBar__bar } ${ cssIf(check || id < activeId, s.progressBar__bar__check) } ${cssIf( id === 1, s.progressBar__bar__first ) } ${ cssIf(id === activeId, s.progressBar__bar__gradient) }`}
    />
  )

}

export default Progress