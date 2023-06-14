import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background: #08120E;
  }
  
  input, textarea, select, button {
    border: none;
    outline: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;