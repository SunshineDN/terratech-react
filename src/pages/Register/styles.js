import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white_green};
  overflow: hidden;
`;