import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
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

  input {
    border: none;
    outline: none;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const themes = {
  light : {
    primary: '#fff',
    secondary: '#000',
    tertiary: '#f2f2f2',
    accent: '#f2f2f2',
    buttonPrimary: '#000',
    buttonSecondary: '#fff',
    buttonTertiary: '#f2f2f2',
  },
  dark : {
    primary: '#000',
    secondary: '#fff',
    tertiary: '#000',
    accent: '#000',
    buttonPrimary: '#fff',
    buttonSecondary: '#000',
    buttonTertiary: '#000',
  }
}
