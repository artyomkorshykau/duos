const popupsActions = {
  
  openDeletePublicationsPopup: ( store, id ) => {
    
    store.setState( {
      popups: {
        ...store.state.popups,
        steps: {
          ...store.state.popups.steps,
          deletePublication: !store.state.popups.steps.deletePublication,
          deletePublicationID: id
        }
      }
    } )
    
  }
  
}

export default popupsActions