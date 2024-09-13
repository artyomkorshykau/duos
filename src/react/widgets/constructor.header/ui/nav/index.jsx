import s
  from '@/react/widgets/constructor.header/ui/constructor.header.module.scss'
import Arrow from '@/react/components/icons/arrow.jsx'
import Status from '@/react/components/status/index.jsx'
import { useRouter } from 'next/navigation'
import useGlobal from '@/store/index.js'

const Nav = ( ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const breadcrumbsList = [ 'Анкетирование', 'Публикации', 'Новая публикация' ]
  const { back } = useRouter()
  
  return (
    
    <div className={ `${ s.constructorHeader__wrapper__navigation }` }>
      
      <div className={ `${ s.constructorHeader__wrapper__navigation__back }` }
           onClick={ () => back() }>
        
        <Arrow direction={ 'left' } fill={ '#7C92A7' }/>
        <p
          className={ `text-14 ${ s.constructorHeader__wrapper__navigation__back__title }` }>Назад</p>
      
      </div>
      
      <div className={ s.constructorHeader__wrapper__navigation__breadcrumbs }>
        
        { breadcrumbsList.map( ( breadcrumbs, index ) => (
          
          <>
            
            <p
              className={ `text-13 ${ s.constructorHeader__wrapper__navigation__breadcrumbs__text }` }>
              
              { breadcrumbs }
            
            </p>
            
            { index < breadcrumbsList.length - 1 && (
              <div
                className={ s.constructorHeader__wrapper__navigation__breadcrumbs__dot }/>
            ) }
          
          </>
        
        ) ) }
      
      </div>
      
      <Status status={ globalState.constructor.status }/>
    
    </div>
  
  )
  
}

export default Nav