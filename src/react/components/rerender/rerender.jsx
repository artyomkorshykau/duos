import useGlobal from '@/store'

const ReRender = () => {
  
  const [ globalState ] = useGlobal()
  const { dummy } = globalState
  
  return (
    
    <span>
      { dummy }
    </span>
  
  )
  
}

export default ReRender