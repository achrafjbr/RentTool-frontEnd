import axios from "axios";
import { deleteToken, getToken } from "../utilis/tokenService";
import { useAppDispatch } from "../hooks/reduxHooks";
import { logout } from "../features/auth/authSlice";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
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
