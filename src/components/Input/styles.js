import styled from "styled-components";

export const InputBox = styled.div`
  border-bottom: 2px solid #CDCDC5FF;
  height: 47px;
  margin-bottom: 50px;
  position: relative;
  width: 70%;
`;

export const InputText = styled.input.attrs({
  required: true,
})`
  font-style: normal;
  font-size: 22px;
  font-weight: 300;
  border: none;
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
    color: #CDCDC5FF;
    font-size: 22px;
    font-weight: 600;
    left: 5px;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: .5s;
  ${InputText}:focus ~ &, ${InputText}:valid ~ &{
    top: -5px;
  }
`;

