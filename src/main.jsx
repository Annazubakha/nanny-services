import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/nanny-services">
      <ToastContainer autoClose={3000} style={{ zIndex: 99999 }} />

      <App />
    </BrowserRouter>
  </React.StrictMode>
);
