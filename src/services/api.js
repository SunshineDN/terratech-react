import axios from "axios";

export const api = axios.create({
    baseURL: 'https://backend-terratech-production.up.railway.app'
})
