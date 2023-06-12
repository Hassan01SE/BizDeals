import axios from "axios";

/* axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true; */

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'JWT ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});


export default client;