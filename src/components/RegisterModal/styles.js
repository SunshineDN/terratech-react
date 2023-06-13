import styled, { keyframes } from "styled-components";
import GoogleIcon from '../../assets/icons/google_icon.svg'

const appearFromBottom = (x) => keyframes`
  from {
    opacity: 0;
    transform: scale(${x}) translateY(100px);
  }
  to {
    opacity: 1;
    transform: scale(${x}) translateY(0);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background_color};
  max-width: 507px;
  border-radius: 46px;
  box-shadow: -3.9037270545959473px 3.9037270545959473px 13.012423515319824px 0px #00000040;
  transform: scale(.85);
  animation: ${appearFromBottom(.85)} 1s;

  @media (max-width: 1366px) {
    transform: scale(.7);
    animation: ${appearFromBottom(.7)} 1s;
  }

  @media (max-width: 507px) {
    transform: scale(.65);
    animation: ${appearFromBottom(.65)} 1s;
  }

  @media (max-width: 400px) {
    transform: scale(.60);
    animation: ${appearFromBottom(.60)} 1s;
  }
`;

export const Title = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 800;
  color: ${({ theme }) => theme.text_color};
  font-size: 32px;
  margin-top: 47.5px;
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
  width: 100%;
  padding: 0 55px;
  gap: 36px;
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  border-radius: 13px;
  border: 0.65px solid ${({ theme }) => theme.accent_color};
  background-color: ${({ theme }) => theme.input_color};
  box-shadow: inset 0px 2.60248px 13.0124px rgba(0, 0, 0, 0.25);
  padding: 14.6px 30px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 18.2174px;
  line-height: 25px;
  color: ${({ theme }) => theme.blank};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.blank};
    opacity: 0.5;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
  gap: 27px;
  width: 100%;
  padding: 0 55px;
`;

export const Button = styled.button`
  width: 100%;
  height: 55px;
  border-radius: 64px;
  border: none;
  background-color: ${({ theme }) => theme.accent_color};
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 18.2174px;
  color: ${({ theme }) => theme.blank};
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.offset_color_primary};
  }
`

export const Subtext = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 26.0248px;
  text-transform: lowercase;
  color: ${({ theme }) => theme.text_color};
`

export const GoogleButton = styled.button`
  width: 100%;
  height: 55px;
  border-radius: 64px;
  border: none;
  background-color: ${({ theme }) => theme.blank};
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 18.2174px;
  color: ${({ theme }) => theme.text_color};
  border: 0.65px solid ${({ theme }) => theme.accent_color};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 13%;
  padding: 0 25px;
  outline: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  margin-bottom: 39px;

  &:hover {
    transform: scale(1.03);
  }
`

export const GIcon = styled.div`
  width: 31px;
  height: 31px;
  background-image: url(${GoogleIcon});
  background-size: cover;
`

export const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 29px;
`

export const PolicyText = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 18.2174px;
  color: ${({ theme }) => theme.text_color};
  text-align: center;
`

export const Link = styled.a`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 18.2174px;
  color: ${({ theme }) => theme.accent_color};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.offset_color_primary};
  }
`

export const Line = styled.div`
  width: 35%;
  height: 1.3px;
  margin: 21px 0;
  background-color: ${({ theme }) => theme.text_color};
`

export const ColectorRegisterWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 106px;
  padding: 0 29px;
  background-color: ${({ theme }) => theme.input_color};
  border-bottom-left-radius: 46px;
  border-bottom-right-radius: 46px;
  text-align: center;
`

export const ColectorRegisterLink = styled.a`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: ${({ theme }) => theme.blank};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-shadow: 0px 0px 2px ${({ theme }) => theme.blank};
  }
`