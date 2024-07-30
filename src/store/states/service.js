const serviceState = {
  services: [],
}

const getInitialServiceState = () => {

  if (typeof window !== "undefined") {

    const storedServiceState = JSON.parse(localStorage.getItem("service"))

    return storedServiceState || serviceState

  }

  return serviceState
}

export default getInitialServiceState