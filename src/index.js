import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { YandexCloudProvider } from './context/YandexCloudContext'; // Создайте этот файл

// Инициализация Yandex Cloud SDK (если нужно)
import { initYandexCloud } from './utils/yandexCloudInit';

// Инициализация перед рендерингом (опционально)
initYandexCloud();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <YandexCloudProvider>
        <App />
      </YandexCloudProvider>
    </BrowserRouter>

);

// Отчеты о производительности
if (process.env.NODE_ENV === 'production') {
  reportWebVitals(console.log);
}