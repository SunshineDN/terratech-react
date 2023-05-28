import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './utils/globalStyles/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
);
