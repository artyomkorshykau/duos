const infoActions = {

    setFirstIconClick: ( store ) => {
  
        store.setState({ info: {  ...store.state.info, firstIconClick: true }})
    
      },
  
  }
  
  export default infoActions