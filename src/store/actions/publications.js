const publicationsActions = {

  setProfilePhoto: (store, files) => {

    const publications = JSON.parse(localStorage.getItem("publications")) || {}

    if (!publications.categories[0].photos) {

      publications.categories[0].photos = []

    }

    publications.categories[0].photos = [...publications.categories[0].photos, ...files]
    localStorage.setItem("publications", JSON.stringify(publications))
    store.setState({ publications })

  },

  deleteProfilePhoto: (store, photoIndex) => {

    const publications = JSON.parse(localStorage.getItem("publications")) || {}

    if ( publications.categories[0].photos ) {

      publications.categories[0].photos.splice(photoIndex, 1)

      if ( publications.categories[0].photos.length === 0 ) {

        publications.categories[0].documentStatus = "NotFilled"

      }

      localStorage.setItem("publications", JSON.stringify(publications))

      store.setState({ publications })

    }

  },

  setAboutYourselfInfo: (store, index, text) => {

    const publications = JSON.parse(localStorage.getItem("publications")) || {}

    publications.categories[0].profileInfo[index].text = text
    localStorage.setItem("publications", JSON.stringify(publications))
    store.setState({ publications })

  },

  addNewPublication: (store, newPublication ) => {

    const publications = JSON.parse(localStorage.getItem("publications")) || {}

    publications.categories[1].publicationsCards = [...publications.categories[1].publicationsCards,  newPublication ]

    if (publications.categories[1].publicationsCards.length >= 5) {

      publications.categories[1].documentStatus = "Filled"

    }

    localStorage.setItem("publications", JSON.stringify(publications))
    store.setState({ publications })

  },

  toggleDocumentStatus: (store, index, newStatus) => {

    const publications = JSON.parse(localStorage.getItem("publications")) || {}

    publications.categories[ index ].documentStatus = newStatus

    localStorage.setItem("publications", JSON.stringify(publications))
    store.setState({ publications })

  }

}

export default publicationsActions