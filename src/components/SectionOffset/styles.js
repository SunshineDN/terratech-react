import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
  from {
    /* opacity: 0; */
    right: -500px;
  }
  to {
    /* opacity: 1; */
    right: 0;
  }
`;

const appearFromLeft = keyframes`
  from {
    /* opacity: 0; */
    left: -500px;
  }
  to {
    /* opacity: 1; */
    left: 0;
  }
`;

const upAndDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 60%;
  /* background-color: ${({ theme }) => theme.background_color}; */
  position: relative;
`

export const FirstRectangleRight = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.offset_secondary_color};
  border-radius: 400px 0px 0px 400px;
  animation: ${appearFromRight} 2s;
`

export const SecondRectangleRight = styled.div`
  width: 96%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.accent_color};
  box-shadow: -3px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 400px 0px 0px 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 2.5s;

  & > svg {
    width: 55%;
    height: 100%;
  }

  & #umbu {
    animation: ${upAndDown} 2s infinite ease-in-out;
  }

  & #caja {
    animation: ${upAndDown} 2s -1.5s infinite ease-in-out;
  }

  & #goiaba {
    animation: ${upAndDown} 3.5s 1s infinite ease-in-out;
  }

  & #aucerola {
    animation: ${upAndDown} 3.5s 2s infinite ease-in-out;
  }

  & #folha_mid {
    animation: ${upAndDown} 5s 1s infinite ease-in-out;
  }
`

export const FirstRectangleLeft = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.offset_secondary_color};
  border-radius: 0 400px 400px 0;
  animation: ${appearFromLeft} 2s;
`

export const SecondRectangleLeft = styled.div`
  width: 96%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.accent_color};
  box-shadow: -3px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0 400px 400px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 2.5s;

  & > svg {
    width: 55%;
    height: 100%;
  }

  & #umbu {
    animation: ${upAndDown} 2s infinite ease-in-out;
  }

  & #caja {
    animation: ${upAndDown} 2s -1.5s infinite ease-in-out;
  }

  & #goiaba {
    animation: ${upAndDown} 3.5s 1s infinite ease-in-out;
  }

  & #aucerola {
    animation: ${upAndDown} 3.5s 2s infinite ease-in-out;
  }

  & #folha_mid {
    animation: ${upAndDown} 5s 1s infinite ease-in-out;
  }
`