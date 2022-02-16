import axios from 'axios';

import {API_END_POINTS} from 'src/config/Api_Endpoints';

const axiosInstance = axios.create({
  baseURL: API_END_POINTS.baseUrl,
  headers: {Autherization: ''},
});

export default axiosInstance;
