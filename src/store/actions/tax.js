
const taxAgreeActions = {

  toggleTaxAgree( store ) {

    store.setState({ tax: { ...store.state.tax, taxAgree: !store.state.tax.taxAgree } })

  },

  showTaxInfoPopup( store, show ) {

    if( show === 'show' ) store.setState({ tax: { ...store.state.tax, isShowTaxInfoPopup: true } })
    if( show === 'close' ) store.setState({ tax: { ...store.state.tax, isShowTaxInfoPopup: false } })

  }

}

export default taxAgreeActions


