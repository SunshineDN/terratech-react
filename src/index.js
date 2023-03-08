import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyle} from "./globalStyles/styles";
import {GoogleOAuthProvider} from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById('root'));
const clientId = process.env.REACT_APP_CLIENT_ID
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <GoogleOAuthProvider clientId={clientId}>
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
);