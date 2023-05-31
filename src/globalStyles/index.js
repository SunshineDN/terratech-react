import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
  
  input, textarea {
    outline: none;
    border: none;
  }
`;
