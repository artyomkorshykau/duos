const serviceState = {

  category: [
  
    {

      title: "Направление №1",
      status: "NotFinished",
      documentStatus: "New",
      services: [
      
        {

          title: "Услуга №1",
          status: "New",
          documentStatus: "New",

        }

      ]
      
    },
    {

      title: "Психология",
      status: "NotFinished",
      documentStatus: "New",
      services: [
      
        {

          title: "Оказание психологической помощи",
          status: "NotFinished",
          documentStatus: "New",

        },
        {

          title: "Прием у психотерапевта",
          status: "NotFinished",
          documentStatus: "New",

        }
        
      ]
      
    },

  ],
  passport: {

    status: "New"
    
  }

}

const getInitialServiceState = () => {

  if (typeof window !== "undefined") {

    const storedServiceState = JSON.parse(localStorage.getItem("service"))

    if (storedServiceState) {

      return storedServiceState

    } else {

      localStorage.setItem("service", JSON.stringify(serviceState))

      return serviceState

    }

  }

  return serviceState
}

export default getInitialServiceState