const publicationsActions = {

  setProfilePhoto: (store, files) => {

    const publications = JSON.parse(localStorage.getItem("publications")) || {}

    publications.categories[0].photos = files
    localStorage.setItem("publications", JSON.stringify(publications))
    store.setState({ publications })

  },
  setAboutYourselfInfo: (store, index, text) => {

    const publications = JSON.parse(localStorage.getItem("publications")) || {}

    publications.categories[0].profileInfo[index].text = text
    localStorage.setItem("publications", JSON.stringify(publications))

    const allFieldsFilled = publications.categories[0].profileInfo
      .slice(1)
      .every(info => info.text && info.text.trim() !== "")

    const hasPhotos = publications.categories[0].photos && publications.categories[0].photos.length > 0

    if (allFieldsFilled && hasPhotos) {

      publications.categories[0].documentStatus = "Filled"

    } else {

      publications.categories[0].documentStatus = "NotFilled"

    }

    store.setState({ publications })

  }

}

export default publicationsActions