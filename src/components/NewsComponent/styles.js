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
  gap: 30px;
  width: 370px;
  height: 316px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;


  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.50);
    border-radius: 8px;
  }
`;

export const NewsImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  height: 150px;
  background: url(${(props) => props.src});
  filter: drop-shadow(-4px 4px 8px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
`;

export const NewsTitle = styled.h3`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 23px;
  color: ${({ theme }) => theme.text_color};
`;

export const NewsDescription = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: ${({ theme }) => theme.text_color};
  opacity: 0.5;
`;