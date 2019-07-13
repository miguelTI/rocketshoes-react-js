import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/miguelti/rocketshoes-react-js',
});

export default api;
