import styled from "styled-components";
import { BsClock, BsThreeDots } from "react-icons/bs";

export const ResiduesItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 20px;
`;

export const ResiduesItems = styled.div`
  border: 1px solid ${({theme}) => theme.text_color};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 20px;
  gap: 20px;
  width: 80vw;
`;

export const ResiduesItemsLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 28px;
`;

export const ResiduesItemsLeftIcon = styled.div`
  background: url(${(props) => props.icon}) no-repeat center;
  background-size: contain;
  height: 50px;
  width: 50px;
`;

export const ResiduesItemsLeftText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  max-width: 500px;
`;
  
export const ResiduesItemsLeftTextTitle = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: ${({theme}) => theme.text_color};
`;

export const ResiduesItemsLeftTextDescription = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 18px;
  color: ${({theme}) => theme.text_color};
`;

export const ResiduesItemsRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  gap: 8px;
`;

export const ResiduesItemsRightTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 26px;
`;

export const ResiduesItemsRightTopTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;

export const ResiduesItemsRightTopTimeIcon = styled(BsClock)`
  font-size: 13px;
  color: ${({theme}) => theme.text_color};
`;

export const ResiduesItemsRightTopTimeText = styled.span`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: ${({theme}) => theme.text_color};
`;

export const ResiduesItemsRightTopSituation = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px;
  gap: 10px;

  /* background-color: ${({theme}) => theme.situation.approved.background_color};
  border: 1px solid ${({theme}) => theme.situation.approved.accent_color};
  color: ${({theme}) => theme.situation.approved.accent_color};

  & > div {
    background-color: ${({theme}) => theme.situation.approved.accent_color};
  } */

  ${(props) => {
    switch (props.$situation) {
      case 'Aprovado':
        return `
          background-color: ${props.theme.situation.approved.background_color};
          border: 1px solid ${props.theme.situation.approved.accent_color};
          color: ${props.theme.situation.approved.accent_color};

          & > div {
            background-color: ${props.theme.situation.approved.accent_color};
          }
        `;
      case 'Em análise':
        return `
          background-color: ${props.theme.situation.pending.background_color};
          border: 1px solid ${props.theme.situation.pending.accent_color};
          color: ${props.theme.situation.pending.accent_color};

          & > div {
            background-color: ${props.theme.situation.pending.accent_color};
          }
        `;
      case 'Não aprovado':
        return `
          background-color: ${props.theme.situation.rejected.background_color};
          border: 1px solid ${props.theme.situation.rejected.accent_color};
          color: ${props.theme.situation.rejected.accent_color};

          & > div {
            background-color: ${props.theme.situation.rejected.accent_color};
          }
        `;
      default:
        return `
          background-color: ${props.theme.situation.pending.background_color};
          border: 1px solid ${props.theme.situation.pending.accent_color};
          color: ${props.theme.situation.pending.accent_color};

          & > div {
            background-color: ${props.theme.situation.pending.accent_color};
          }
        `;
    }
  }}
  border-radius: 20px;
`;

export const ResiduesItemsRightTopSituationDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
`;

export const ResiduesItemsRightTopSituationText = styled.span`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
`;

export const ResiduesItemsRightTopDots = styled(BsThreeDots)`
  cursor: pointer;
  font-size: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  border: 1px solid #39896A;
  border-radius: 4px;
  color: ${({theme}) => theme.text_color};
`;

export const ResiduesItemsRightBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
`;

export const ResiduesItemsRightBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
`;

export const ResiduesItemsRightBottomItemTitle = styled.span`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.button_color_primary};
`;

export const ResiduesItemsRightBottomItemDescription = styled.span`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 55px;
  color: ${({theme}) => theme.text_color};
`;

export const ResiduesItemsRightBottomSeparator = styled.div`
  width: 1px;
  height: 60px;
  background-color: ${({theme}) => theme.button_color_primary};
`;