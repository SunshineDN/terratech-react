import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.img`
  height: 2rem;
  cursor: pointer;
`;

export const LogoText = styled.span`
  font-size: 3rem;
  font-weight: 700;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const NavItem = styled(NavLink)`
  padding: 0 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  vertical-align: middle;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1rem;
    width: 100%;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  &:hover,
  &.active {
    &::after {
      background-color: ${({ theme }) => theme.accent};
    }
  }
`;

export const NavItemText = styled.span`
  font-size: 1.756rem;
  font-weight: 700;
  color: inherit;
`;



