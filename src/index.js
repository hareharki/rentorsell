import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'bs', 'de'],
    fallbackLng: 'en',
    debug: false,
   
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
  <React.StrictMode>
    <BrowserRouter>
   <App />
   </BrowserRouter>
  </React.StrictMode>
  </Suspense>
);
