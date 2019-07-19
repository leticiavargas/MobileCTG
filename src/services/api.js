import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:8080/'
    //baseURL:'http://10.0.2.2:8080/'
    //baseURL:'http://192.168.25.60:8080'
    baseURL: 'https://frozen-refuge-52234.herokuapp.com'
});

export default api;