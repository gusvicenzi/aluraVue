import axios from 'axios'

const clienteHttp = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json'
  }
})

export default clienteHttp
