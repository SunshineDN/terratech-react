import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 30px;
  background: #0E2019;
  border-radius: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 30px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 30px;
  background: #24B27C;
  border-radius: 12px;
`;