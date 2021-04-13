import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json'
})

export default api;
