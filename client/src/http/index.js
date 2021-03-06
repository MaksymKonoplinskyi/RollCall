import axios from "axios";
import store from "../redux/redux-store";

const $host = axios.create({
baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${store.auth.id_token}`
    return config
}
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost 
}