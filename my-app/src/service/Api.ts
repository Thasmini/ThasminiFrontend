import axios from 'axios';
import { AxiosInstance } from 'axios';
import { appendFile } from 'fs';



const BASE_URL = 'http://localhost:8080'

export const defaultAxiosInstance: AxiosInstance = axios.create({

    baseURL: BASE_URL,

});