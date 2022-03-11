import axios from "axios";

export const getBooks = () => {
    // return axios.get('/api/books');
    return fetch('/api/books').then(data => data.json())
};