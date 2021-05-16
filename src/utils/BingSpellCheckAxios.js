import axios from 'axios'

const instance = axios.create({
        baseURL: 'https://api.bing.microsoft.com/v7.0/spellcheck'
    }
)

export default instance