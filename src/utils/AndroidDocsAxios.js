import axios from 'axios'

const instance = axios.create({
        baseURL: 'https://devhuntr.herokuapp.com/'
    }
)

export default instance