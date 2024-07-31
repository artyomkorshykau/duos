import s from '../progress.bar.module.scss'
import useGlobal from '@/store';
import cssIf from '@/scripts/helpers/css.if'

const Progress = ({

  i,
  check

 }) => {

  const [ globalState ] = useGlobal()

  return (

    <div className={`${ s.progressBar__bar } ${ cssIf( check || i === 0, s.progressBar__bar__check ) } ${ cssIf( i === 0, s.progressBar__bar__first ) }`}></div>
  )

}

export default Progress