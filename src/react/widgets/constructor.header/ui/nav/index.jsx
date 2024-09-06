import s
  from '@/react/widgets/constructor.header/ui/constructor.header.module.scss'
import Link from 'next/link'
import Arrow from '@/react/components/icons/arrow.jsx'
import Status from '@/react/components/status/index.jsx'

const Nav = () => {
  
  const breadcrumbsList = [ 'Анкетирование', 'Публикации', 'Новая публикация' ]
  
  return (
    
    <div className={ `${ s.constructorHeader__wrapper__navigation }` }>
      
      <Link className={ `${ s.constructorHeader__wrapper__navigation__back }` }
            href={ '/' }>
        
        <Arrow direction={ 'left' } fill={ '#7C92A7' }/>
        <p
          className={ `text-14 ${ s.constructorHeader__wrapper__navigation__back__title }` }>Назад</p>
      
      </Link>
      
      <div className={ s.constructorHeader__wrapper__navigation__breadcrumbs }>
        
        { breadcrumbsList.map( ( breadcrumbs, index ) => (
          
          <>
            
            <p
              className={ `text-13 ${ s.constructorHeader__wrapper__navigation__breadcrumbs__text }` }>
              
              { breadcrumbs }
            
            </p>
            
            <div
              className={ s.constructorHeader__wrapper__navigation__breadcrumbs__dot }/>
          
          </>
        
        ) ) }
      
      </div>
      
      <Status status={ 'New' }/>
    
    </div>
  
  )
  
}

export default Nav