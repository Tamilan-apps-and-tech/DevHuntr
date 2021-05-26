import axios from 'axios'

const instance = axios.create({
        baseURL: 'https://devhuntr.azurewebsites.net/api'
    }
)

export default instance