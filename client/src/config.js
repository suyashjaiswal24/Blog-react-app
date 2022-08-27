import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://blog-reactapp.herokuapp.com/api/"
})