import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 30px;
  background: #F7FEF6;
  border-radius: 12px;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  gap: 671px;
  width: 1464px;
  height: 66px;
  background: #24B27C;
  border-radius: 8px;

`;

export const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 50px;
  width: 490px;
  height: 24px;
  border-radius: 8px;
`;

export const NavItem  = styled.li`
  width: 63px;
  height: 24px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.035em;
  color: #FFFFFF;
  cursor: pointer;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 242.98px;
  height: 46px;
  left: 1191.02px;
  top: 10px;
  box-shadow: inset 1px 3px 7px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const InputBox = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 25px 10px 10px;
  gap: 10px;
  width: 198px;
  height: 46px;
  background: #245939;
  border-radius: 8px 0px 0px 8px;
`;

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 0px;
  gap: 30px;
  width: 1464px;
  height: 878px;
`