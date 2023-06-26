import styled from "styled-components";

import { IoIosAdd } from 'react-icons/io';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 56px;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 40px;
`;

export const FilterItem = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  gap: 10px;
  background: ${({ theme }) => theme.button_color_primary};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  :hover {
    opacity: 0.8;
  }
`;

export const FilterItemText = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: .8rem;
  line-height: 15px;
  color: ${({ theme }) => theme.text_color};
`;

export const FilterItemNotif = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2px 5px;
  gap: 10px;
  color: ${({ theme }) => theme.text_color};
  background: ${({ theme }) => theme.notif_color};
  border-radius: 5px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 11px;
`;

export const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 8px;
  gap: 15px;
  background: ${({ theme }) => theme.button_color_primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.text_color};
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in-out;

  :hover {
    opacity: 0.8;
  }
`;

export const AddIcon = styled(IoIosAdd)`
  font-size: 20px;
  color: ${({ theme }) => theme.text_color};
  opacity: 1;
  font-weight: 600;
`;