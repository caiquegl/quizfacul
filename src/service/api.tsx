import axios from 'axios'

const api = axios.create({
  // TODO: BaseURL vindo de um config file
  // baseURL: 'https://api.xgrow.com/' 172.16.144.90:3000,
  baseURL: 'https://api.xgrow.com/',
})

export default api