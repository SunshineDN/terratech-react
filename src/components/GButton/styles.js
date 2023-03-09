import styled from "styled-components";

export const ButtonContainer = styled.div`
  box-sizing: border-box;
  width: 70%;
  height: auto;
  border-radius: 12px;
  cursor: pointer;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.168);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.084);
  display: flex;
  align-items: center;
`

export const ButtonText = styled.button`
  width: 70%;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: black;
  cursor: pointer;
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;

  img {
    width: 32px;
    height: 32px;
  }
`