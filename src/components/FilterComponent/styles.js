import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';

export const Filter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    width: 100%;
    height: 45px;
    background: #24B27C;
    border-radius: 8px;
    margin-bottom: 2rem;
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

export const NavItem = styled.li`
    height: 24px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: .8rem;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.035em;
    color: #FFFFFF;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease-in-out;

    :hover {
      box-shadow: inset 0px -2px 0px #FFFFFF;
    }
  `;

export const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  `;

export const InputBox = styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 25px 10px 10px;
    width: 198px;
    height: 35px;
    background: #245939;
    border-radius: 8px 0px 0px 8px;
    position: relative;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    font-size: .8rem;
    color: ${({ theme }) => theme.text_color};
    box-shadow: inset 4px 2px 4px rgba(0, 0, 0, 0.10);
  
    ::placeholder {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 800;
      font-size: .8rem;
      color: rgba(255, 255, 255, 0.5);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 6%;
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
    height: 35px;
    background: ${({ theme }) => theme.button_color_secondary};
    border-radius: 0px 8px 8px 0px;
    cursor: pointer;
    box-shadow: inset -2px 2px 4px rgba(0, 0, 0, 0.10);

    :hover {
      background: ${({ theme }) => theme.button_color_secondary_hover};
    }
  `;

export const SearchIcon = styled(AiOutlineSearch)`
    width: 18.98px;
    height: 20px;
    color: ${({ theme }) => theme.text_color};
    opacity: .5;
  `;