import axios from "axios";

const axiosOptions = {
  baseURL: 'http://194.58.94.203/v1',
}

export const instance = axios.create(axiosOptions)

instance.interceptors.request.use(config => {

    config.headers.Authorization = `6|bGcpuCRa9C11dVqd9qV5wxY28WrjsmTlOrPnyhekdc0cb1e5`

  return config

})

