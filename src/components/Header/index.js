import React from 'react'
import { HeaderContainer, LogoContainer, Logo, Title, Nav, RegisterButton, LoginButton } from './styles'
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const title = "TerraTech"
    const navigate = useNavigate();

    function handleRedirectRegister() {
        navigate("/cadastro");
    }

    function handleRedirectLogin() {
        navigate("/");
    }

    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
                <Title>{title}</Title>
            </LogoContainer>
            <Nav>
                <RegisterButton onClick={handleRedirectRegister}>Cadastrar</RegisterButton>
                <LoginButton onClick={handleRedirectLogin}>Login</LoginButton>
            </Nav>
        </HeaderContainer>
    );
}