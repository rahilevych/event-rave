import axios from 'axios';
import { refreshAccessToken } from '../lib/refreshAccessToken';

export const API_URL = import.meta.env.VITE_API_URL;
//export const API_URL = import.meta.env.VITE_API_URL_LOCAL;

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
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
    if (!error.response) {
      return Promise.reject(error);
    }

    const statusCode = error.response.status;
    const originalRequest = error.config;
    const isAuthRequest =
      originalRequest.url?.includes('/auth/login') ||
      originalRequest.url?.includes('/auth/register');
    if (isAuthRequest) {
      return Promise.reject(error);
    }
    const token = localStorage.getItem('token');

    if (statusCode === 401 && token && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.warn('Refresh failed', refreshError);
      }
      localStorage.removeItem('token');
      window.location.href = '/login';
    } else if (statusCode === 500) {
      console.error('Server error-try again later');
    }
    return Promise.reject(error);
  },
);

export default api;
