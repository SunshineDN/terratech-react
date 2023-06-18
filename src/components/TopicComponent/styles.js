import styled from "styled-components";
import { BiBookOpen } from "react-icons/bi";

export const TopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 282px;
  height: 583px;
  margin-right: 35px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;

export const TopicIcon = styled(BiBookOpen)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.text_color};
`;

export const TopicTitle = styled.h3`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 23px;
  color: ${({ theme }) => theme.text_color};
`;

export const TopicContent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  cursor: pointer;
  user-select: none;
`;

export const TopicItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 282px;
`;

export const TopicItemCount = styled.h3`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  ${(props) => props.$first ? `color: ${props.theme.button_color_primary}` : `color: ${props.theme.text_color}; opacity: 0.5`};
`;

export const TopicItemTitle = styled.h3`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
  ${(props) => props.$first ? `color: ${props.theme.button_color_primary}` : `color: ${props.theme.text_color}; opacity: 0.5`};
`;