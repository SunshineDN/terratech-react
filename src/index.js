import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyle} from "./globalStyles/styles";
import {GoogleOAuthProvider} from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById('root'));
// const clientId = process.env.REACT_APP_CLIENT_ID
const clientId = "180197040960-9hdue6iaqlj870r29751hd2l1aj5r4mq.apps.googleusercontent.com"
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <GoogleOAuthProvider clientId={clientId}>
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
);