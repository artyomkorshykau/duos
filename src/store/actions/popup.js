import initialPopupStates from "@/react/popups/popup/initial.popup.states"

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


  setTimeout(() => {

    store.setState( initialPopupStates )

  }, 600)

}

export {

  show,
  hide

}