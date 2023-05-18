import axios from 'axios'

const AxiosConfig = axios.create({
    baseURL: 'http://192.168.3.194:8009/',
})

export default AxiosConfig