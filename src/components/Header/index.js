import React from 'react'
import { HeaderContainer, LogoContainer, Logo, Title, Nav, RegisterButton, LoginButton } from './styles'

export const Header = () => {
    const title = "TerraTech"
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
                <Title>{title}</Title>
            </LogoContainer>
            <Nav>
                <RegisterButton>Cadastrar</RegisterButton>
                <LoginButton>Login</LoginButton>
            </Nav>
        </HeaderContainer>
    );
}