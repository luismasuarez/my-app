// src/api/clients/apiClient.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.tuapp.com/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Puedes agregar interceptores para auth tokens:
apiClient.interceptors.request.use(
  (config) => {
    // Por ejemplo agregar Bearer token
    const token = 'mi-token'; // mejor si lo obtienes dinámico
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);
