import axios from "axios";
import { getToken } from "../utilis/tokenService";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// const disptch = useAppDispatch();
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data.status == 401) {
      // disptch(logout());
    }
  },
);
