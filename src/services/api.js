import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "https://backend-terratech-production.up.railway.app",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
})