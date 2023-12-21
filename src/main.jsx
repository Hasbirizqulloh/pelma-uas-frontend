import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
axios.defaults.baseURL = 'https://api-jadi-fix.vercel.app';
axios.defaults.withCredentials = true;

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/css/main.css';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
