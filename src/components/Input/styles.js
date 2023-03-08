import styled from "styled-components";

export const InputBox = styled.div`
  border-bottom: 2px solid #F1F1E8;
  height: 47px;
  margin-bottom: 50px;
  position: relative;
  width: 70%;
`;

export const InputText = styled.input`
  font-style: normal;
  font-size: 22px;
  font-weight: 600;
  border: none;
  border-bottom: 2px solid #F1F1E8;
  height: 47px;
  background-color: transparent;
  border: none;
  color: #fff;
  height: 100%;
  outline: none;
  padding: 0 6px;
  width: 100%;
  
  
`;

export const InputLabel = styled.label`
    font-style: normal;
    color: #F1F1E8;
    font-size: 22px;
    font-weight: 600;
    left: 5px;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: .5s;
  ${InputText}:focus ~ &{
    top: -5px;
  }
`;

