import s from '../progress.bar.module.scss'

const Breadcrumbs = ( { activeStep } ) => {
  
  return (
    
    <p className={ `text-13 ${ s.progressBar__breadcrumbs }` }>
      
      { `Анкетирование ` }
      
      <span style={ { color: 'gray' } }>•</span>
      
      { ` ${ activeStep }` }
    
    </p>
  
  )
  
}

export default Breadcrumbs