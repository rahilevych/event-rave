import axios from 'axios';
import { API_URL } from '../api/axiosInstance';

export const refreshAccessToken = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/auth/refresh`, {
      withCredentials: true,
    });
    localStorage.setItem('token', data.token);
    return data.token;
  } catch (error) {
    console.error('Refresh token failed', error);
    localStorage.removeItem('token');
  }
};
