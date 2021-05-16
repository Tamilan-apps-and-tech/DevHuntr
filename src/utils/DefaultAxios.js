import axios from 'axios'

const instance = axios.create({
        baseURL: 'https://devhuntr.herokuapp.com/',
    timeout : 500000
    }
)

export default instance