import axios from 'axios'

const api = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        app: process.env.TOKEN_API,
    }
});

export default api;