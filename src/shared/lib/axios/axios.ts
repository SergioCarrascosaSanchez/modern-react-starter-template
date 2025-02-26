import axios from "axios";

const axiosServices = axios.create({ baseURL: import.meta.env.VITE_API_URL });

axiosServices.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
});

export default axiosServices;
