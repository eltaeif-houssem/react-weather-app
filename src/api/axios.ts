import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: `https://api.openweathermap.org`,
});

export default instance;
