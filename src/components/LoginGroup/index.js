import React from 'react';
import { Container, Title, InputBox, Input, InputLabel, LoginButton } from './styles'

const LoginGroup = () => {
    const title = "Área de Login";
    return (
        <Container>
            <Title>{title}</Title>
            <InputBox>
                <Input />
                <InputLabel>Email</InputLabel>
            </InputBox>
            <InputBox>
                <Input />
                <InputLabel>Senha</InputLabel>
            </InputBox>
            <LoginButton>Login</LoginButton>
        </Container>
    )
}

export default LoginGroup