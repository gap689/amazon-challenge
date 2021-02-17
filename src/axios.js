import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-a-1bf14.cloudfunctions.net/api' // the API (cloud function) url
    //'http://localhost:5001/a-1bf14/us-central1/api' for debugging purposes
});

export default instance;