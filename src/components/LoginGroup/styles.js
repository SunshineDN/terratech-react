import styled from "styled-components";

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
  font-size: 22px;
  text-align: center;
  color: #F1F1E8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 42px 0;
`


export const ErrorContainer = styled.div`
  box-sizing: border-box;
  margin: 40px auto 0 auto;
  border: 2px solid #e8b4b4;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 520px;
  padding: 30px 0;
  height: 45px;
  background-color: #ee8787;
  
`

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  text-wrap: normal;
  color: red;
`

export const ButtonFechar = styled.button`
  background: transparent;
  border: 1px solid black;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  font-size: 18px;
  right: 0;
  cursor: pointer;
`