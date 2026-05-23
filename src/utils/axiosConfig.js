import axios from 'axios';
import { error } from 'console';

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        'Content-Type': 'application/json' 
    },
});

// Interceptor запроса — добавляет токен к каждому запросу
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Barear ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Interceptor ответа — обрабатывает ошибки глобально
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Токен истек - очищаем и на логин
            localStorage.removeItem('token');
            window.location.href("/login");
        }
        return Promise.reject(error);
    }
);

export default api;