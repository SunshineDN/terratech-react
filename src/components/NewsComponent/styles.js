import styled from "styled-components"

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  width: 80%;
`

export const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  gap: 30px;
  width: 370px;
  height: 316px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const NewsImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({src}) => src}) center center no-repeat;
  filter: drop-shadow(-4px 4px 8px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
`;

export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const NewsTitle = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 23px;
  color: ${({ theme }) => theme.text_color};
`;

export const NewsDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: ${({ theme }) => theme.text_color};
  opacity: 0.5;
`;