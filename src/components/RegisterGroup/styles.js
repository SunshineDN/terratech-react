import styled from "styled-components";
import {IoIosClose} from "react-icons/io"
import {InputBox} from "../Input/styles";
import {LoginButton} from "../Button/styles";

export const Container = styled.form`
  box-sizing: border-box;
  background-color: #474F38;
  display: flex;
  flex-direction: column;
  margin: ${props => props.msg ? "35px auto 0 auto" : "112px auto 0 auto"};
  max-width: 520px;
  border: 3px solid #BABABA;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  align-items: center;
  padding: 36px 0;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 46px;
  text-align: center;
  color: #F1F1E8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 36px;
`;

export const H3 = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 2em;
  text-align: center;
  color: #F1F1E8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 42px auto;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(70, 103, 69, 0.5);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalWrapper = styled.div`
  padding: 0 40px;
  width: 990px;
  height: 90%;
  box-shadow: 0 5px 16px rgba(70, 103, 69, 0.5);
  background: #474F38;
  color: #fff;
  position: relative;
  z-index: 11;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  & > ${LoginButton} {
    margin-top: 14.5%;
    max-width: 350px;
  }
`

export const Column = styled.div`
  column-count: 2;
  column-gap: 20px;
  & ${InputBox} {
    margin-left: 14.5% !important;
  }
`
export const CloseButton = styled(IoIosClose)`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 32px;
  height: 32px;
  cursor: pointer;
`
