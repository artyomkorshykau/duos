async function show( store, name ) {

  store.setState({

    popup_opened: name

  });

  store.actions.updateRender();

}

async function hide( store, callBack ) {

  store.setState({ 
    popup_animate_close: true 
  })

}

export {

  show,
  hide

}