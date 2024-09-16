const constructor = {
  
  tabs: [
    
    { id: 0, title: 'Публикации', content: '12' },
    { id: 1, title: 'Услуги', content: '12' },
    { id: 2, title: 'Профиль', content: '12' }
  ],
  
  status: 'New',
  currentArticle: null
  
}


const getInitialConstructorState = () => {
  
  if (typeof window !== "undefined") {
    
    const storedConstructorState = JSON.parse(localStorage.getItem("constructor"))
    
    if (storedConstructorState) {
      
      return storedConstructorState
      
    } else {
      
      localStorage.setItem("constructor", JSON.stringify(constructor))
      
      return constructor
      
    }
    
  }
  
  return constructor
}

export default getInitialConstructorState
