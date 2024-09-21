
export const updateRender=async (store)=> {
  
  const hash = +(+Math.random().toFixed(4) * 4000).toFixed(0)
  
  setTimeout(() => {
    
    store.setState({ dummy: hash })
    
  }, 170)
  
  
}
