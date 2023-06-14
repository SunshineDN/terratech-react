import { SideBar } from './SideBar/index.jsx';
import { Content } from './Content/index.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${ ({ theme }) => theme.background };
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  padding: 12px;
`;


// basta chamar o layout em e envolver o conteúdo nele
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