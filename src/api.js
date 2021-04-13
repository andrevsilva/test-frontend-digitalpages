import axios from 'axios'

const api = axios.create({
    baseURL: 'http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json'
})

export default api;