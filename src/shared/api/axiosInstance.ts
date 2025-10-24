import axios from 'axios';
import { AuthResponse } from '../../features/auth/model/AuthResponse';

export const API_URL = import.meta.env.VITE_API_URL;
//export const API_URL = import.meta.env.VITE_API_URL_LOCAL;

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
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
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      const statusCode = error.response.status;
      const originalRequest = error.config;
      const errorMessage = error.response.data.message || 'An error occurred';

      if (statusCode === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const response = await axios.post<AuthResponse>(
            `${API_URL}/auth/refresh`,
            {},
            { withCredentials: true },
          );
          localStorage.setItem('token', response.data.token);
          return api.request(originalRequest);
        } catch (error) {
          console.error(
            'Token refresh failed, unauthorized access - redirecting to login',
            error,
          );
        }
      } else if (statusCode === 500) {
        console.error('Server error-try again later');
      } else {
        console.error(`Error ${statusCode}: ${errorMessage}`);
      }
    } else if (error.request) {
      console.error('Network error - check your internet connection');
    } else {
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  },
);

export default api;
