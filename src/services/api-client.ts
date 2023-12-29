import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'c8e9f14d488543e9a36f4459b11d885e'
    }
})