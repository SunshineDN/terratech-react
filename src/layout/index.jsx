/* eslint-disable react/prop-types */
import { SideBar } from './SideBar/index.jsx';
import { Content } from './Content/index.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5.2fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  padding: 12px;
  background-color: #08120E;
`;

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <SideBar/>
      <Content>
        { children }
      </Content>
    </Wrapper>
  );
};