import { Container, Nav, NavItem, Logo, LogoText, LogoContainer, NavItemText } from './styles.js';

export const Header = () => {

  return (
    <Container>
      <LogoContainer>
        <Logo/>
        <LogoText>Terra Tech</LogoText>
      </LogoContainer>
      <Nav>
        <NavItem to="/">
          <NavItemText>Home</NavItemText>
        </NavItem>
        <NavItem to="/about-us">
          <NavItemText>Sobre nós</NavItemText>
        </NavItem>
      </Nav>
    </Container>
  );
};


