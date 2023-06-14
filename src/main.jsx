import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { HashRouter } from 'react-router-dom';
import { GlobalStyle } from './globalStyles/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle/>
      <App/>
    </HashRouter>
  </React.StrictMode>,
);
