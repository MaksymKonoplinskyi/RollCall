import axios from "axios";
import { config } from "../../../server/db";
import store from "../redux/redux-store";

const $host = axios.create({
baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${store.auth}`
}