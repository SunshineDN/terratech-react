import styled from "styled-components";
import logo from "../../assets/images/logo.png";

export const HeaderContainer = styled.header`
    padding: 0px 3% 0 3%;
    width: 100%;
    height: 10%;
    background: #95E11F;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0 .55vw;
`;

export const Logo = styled.img.attrs({
    src: logo,
    alt: "logo"
})`
    width: 10vh;
    height: 10vh;
    margin: .4vh 0;
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: 800;
    font-size: 3.5vh;
    color: #345204;
    cursor: default;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 0 4.3vw;
`;

export const RegisterButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
    padding: .6vh 2.35vw;
    border-radius: 8px;
    background-color: #345204;
    color: #95E11F;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    font-size: 3.4vh;
    border: 4px solid #345204;
    outline-color: #95E11F;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #95E11F;
        color: #345204;
    }
`;

export const LoginButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
    box-sizing: border-box;
    padding: .5vh 3vw;
    border: 4px solid #345204;
    border-radius: 8px;
    background-color: transparent;
    color: #345204;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    font-size: 3.4vh;
    outline-color: #95E11F;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #345204;
        color: #95E11F;
    }
`;