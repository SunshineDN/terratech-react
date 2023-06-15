/* eslint-disable react/prop-types */
import { Container } from './styles.js';

export const Content = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  );
};