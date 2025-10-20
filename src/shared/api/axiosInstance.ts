import axios from 'axios';
import { AuthResponse } from '../../features/auth/model/AuthResponse';

export const API_URL = 'http://localhost:5000';
//export const API_URL = 'https://event-rave-back.onrender.com';
const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const publicPaths = ['/auth/login', '/auth/register', '/auth/refresh'];
  if (!publicPaths.some((path) => config.url?.includes(path))) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401) {
      try {
        const response = await axios.post<AuthResponse>(
          `${API_URL}/auth/refresh`,
          {},
          { withCredentials: true },
        );
        localStorage.setItem('token', response.data.token);
        return api.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
  },
);

export default api;
