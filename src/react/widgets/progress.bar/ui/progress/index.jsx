import s from '../progress.bar.module.scss'

const Progress = ( { progress } ) => {
  
  return (
    
    <div
      
      style={ { width: `${ progress }%` } }
      className={ `
      ${ s.progressBar__bar }
      ${ s.progressBar__bar__check }
      ${ s.progressBar__bar__first } ${ s.progressBar__bar__gradient }` }
    
    />
  )
  
}

export default Progress