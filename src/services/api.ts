import axios from 'axios';

export const api = axios.create({
  // Forçamos o HTTPS do seu DuckDNS para evitar erro de Mixed Content na Vercel
  baseURL: 'https://api-insumos.alvarodev.duckdns.org',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@SCAI:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
