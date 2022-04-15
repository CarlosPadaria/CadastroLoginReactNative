import axios from 'axios';

const api = axios.create({
    baseURL:'https://senaiuserapi.herokuapp.com/',
})


export default api;