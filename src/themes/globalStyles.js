import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 200;

    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;