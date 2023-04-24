import axios from 'axios';
import useCheckAuth from '../hooks/useCheckAuth';
import useAuth from '../hooks/useAuth';

export default axios.create({
  baseURL: 'https://movie1.onrender.com',
});

export const axiosPrivate = axios.create(
  {
    baseURL: 'https://movie1.onrender.com',
  },
  {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  }
);

export const axiosApi = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/popular?api_key=a08fd2babde004fa470f85d6f7aa35f9',
});

axiosApi.interceptors.request.use((config) => {
  config.headers.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDhmZDJiYWJkZTAwNGZhNDcwZjg1ZDZmN2FhMzVmOSIsInN1YiI6IjYzZWZhNjk2Y2RkYmJjMDBkNWU1MDM3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0MwLtHUBqU-YWv2Xs0SUKthtYF1UyXYPFC2yoqFc8M0';
  return config;
});

axiosPrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
