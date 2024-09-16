import s
  from '@/react/widgets/constructor.header/ui/constructor.header.module.scss'
import useGlobal from '@/store/index.js'

const Title = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const title = globalState.constructor.currentArticle?.title
  
  return (
    
    <div className = { `text-26 ${ s.constructorHeader__wrapper__title }` }>
      
      { title ?? 'Новая публикация' }
    
    </div>
  
  )
  
}

export default Title