const serviceState = {

  category: [
  
    {

      title: "Направление №1",
      description:
        "Выберите направление ниже или предложите свое, затем заполните услуги в рамках конкретно этого направления",
      status: "NotFinished",
      services: [
      
        {

          title: "Услуга №1",
          status: "New",

        }

      ]
      
    },
    {

      title: "Психология",
      description:
        "Выберите направление ниже или предложите свое, затем заполните услуги в рамках конкретно этого направления",
      status: "NotFinished",
      services: [
      
        {

          title: "Оказание психологической помощи",
          status: "NotFinished",

        },
        {

          title: "Прием у психотерапевта",
          status: "NotFinished",

        }
        
      ]
      
    },

  ],

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