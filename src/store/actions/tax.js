export const toggleTaxAgree = ( store ) => {
  
  store.setState( {
    tax: {
      ...store.state.tax,
      taxAgree: !store.state.tax.taxAgree
    }
  } )
  store.actions.updateRender()
  
}

export const showTaxInfoPopup = ( store, show ) => {
  
  if ( show === 'show' ) {
    store.setState( { tax: { ...store.state.tax, isShowTaxInfoPopup: true } } )
    store.actions.updateRender()
  }
  if ( show === 'close' ) {
    store.setState( { tax: { ...store.state.tax, isShowTaxInfoPopup: false } } )
    store.actions.updateRender()
  }
  
}


