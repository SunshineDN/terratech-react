import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  width: 100%;
  border-radius: 12px;
  padding: 14px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #0E2019;
`;

export const NavBar = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  gap: 30px;
  width: 100%;
  height: 100%;
`;

export const NavItem = styled(NavLink)`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  border-radius: 5px;
  transition: all 0.4s ease-in-out;
  ${ ({ $bottom }) => $bottom && `margin-top: auto;` }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2)
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    color: #0E2019;
  }
`;

export const NavIcon = styled.div`
  height: 100%;
  width: 30px;
  background-image: url( ${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const NavText = styled.span`
  font-size: 16px;
  color: #FFFFFF;
`;

export const User = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;