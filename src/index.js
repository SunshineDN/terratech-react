import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {GlobalStyle} from "./globalStyles/styles";
import {GoogleOAuthProvider} from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById('root'));
// const clientId = process.env.REACT_APP_CLIENT_ID
const clientId = process.env.REACT_APP_CLIENT_ID
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <GoogleOAuthProvider clientId={clientId}>
                <App />
            </GoogleOAuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);