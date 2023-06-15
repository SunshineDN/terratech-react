import styled from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  border: 1px solid #fff;
  width: 100%;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  width: 100%;
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
  width: 100%;
  height: 24px;
  border-radius: 8px;
`;

export const NavItem  = styled.li`
  width: 63px;
  height: 24px;
  font-family: 'Nunito';
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
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 242.98px;
  height: 46px;
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

  ::placeholder {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    font-size: 19px;
    line-height: 26px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SearchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px;
  gap: 10px;
  width: 44.98px;
  height: 46px;
  background: ${({ theme }) => theme.button_color_secondary};
  border-radius: 0px 8px 8px 0px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 18.98px;
  height: 20px;
  color: ${({ theme }) => theme.text_color};
  opacity: .5;
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