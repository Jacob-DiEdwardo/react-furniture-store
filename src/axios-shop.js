import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-furniture-store.firebaseio.com/'
});

export default instance;