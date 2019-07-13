import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.myjson.com/bins/1ga1pz',
});

export default api;
