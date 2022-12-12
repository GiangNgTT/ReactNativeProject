import axios from 'axios';

const ROOT_API = '';

const axiosRequest = axios.create({
  baseURL: ROOT_API,
  timeout: 15000,
});

axiosRequest.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);            
  },
);

axiosRequest.interceptors.response.use(
  response => {
    return response;
  },
  async (error = {}) => {
    console.log('aa: error', error);
  },
);

export default axiosRequest;
