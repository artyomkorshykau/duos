import { v1 } from "uuid";

const serviceState = {

  category: [
  
    {

      id: v1(),
      title: "Направление №1",
      status: "NotFinished",
      documentStatus: "New",
      services: [
      
        {

          id: v1(),
          title: "Услуга №1",
          status: "New",
          documentStatus: "New",

        }

      ]
      
    },
    {

      id: v1(),
      title: "Психология",
      status: "NotFinished",
      documentStatus: "New",
      services: [
      
        {

          id: v1(),
          title: "Оказание психологической помощи",
          status: "NotFinished",
          documentStatus: "New",

        },
        {

          id: v1(),
          title: "Прием у психотерапевта",
          status: "NotFinished",
          documentStatus: "New",

        }
        
      ]
      
    },

  ],
  passport: {

    status: "NotFinished"
    
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