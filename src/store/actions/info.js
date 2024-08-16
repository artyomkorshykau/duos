const infoActions = {

    setShowInfoPopup: ( store, showInfoPopup ) => {
  
      store.setState({ info: {  ...store.state.info, showInfoPopup }})
  
    },

    setFirstIconClick: ( store ) => {
  
        store.setState({ info: {  ...store.state.info, firstIconClick: true }})
    
      },
  
  }
  
  export default infoActions