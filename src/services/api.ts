import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api-insumos.alvarodev.duckdns.org',
});

// Anexa o Token JWT automaticamente em todas as chamadas
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@SCAI:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
