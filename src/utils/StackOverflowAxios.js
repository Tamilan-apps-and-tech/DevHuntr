import axios from 'axios'

const instance = axios.create({
        baseURL: 'https://api.stackexchange.com/2.2/'
    }
)

export default instance