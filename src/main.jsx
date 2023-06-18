import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { GlobalStyles } from './themes/globalStyles.js';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './themes/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ dark() }>
      <BrowserRouter>
        <GlobalStyles/>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);