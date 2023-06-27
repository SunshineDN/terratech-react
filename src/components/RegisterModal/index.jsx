import { useState } from "react"
import { Button, ButtonWrapper, ColectorRegisterLink, Container, GIcon, GoogleButton, Input, InputWrapper, Line, LinkText, PolicyText, PolicyWrapper, Subtext, Title } from "./styles"

const RegisterModal = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  return (
    <Container $active={data.email !== '' || data.password !== '' || data.confirmPassword !== ''}>
      <Title>Bem-vindo ao Terra Tech!</Title>
      <InputWrapper>
        <Input placeholder="Email" type="email" onChange={e => setData({ ...data, email: e.target.value })} />
        <Input placeholder="Senha" type="password" onChange={e => setData({ ...data, password: e.target.value })} />
        <Input placeholder="Confirme a senha" type="password" onChange={e => setData({ ...data, confirmPassword: e.target.value })} />
      </InputWrapper>
      <ButtonWrapper>
        <Button>Continuar</Button>
        <Subtext>Ou</Subtext>
        <GoogleButton><GIcon />Registrar-se com o Google</GoogleButton>
      </ButtonWrapper>
      <PolicyWrapper>
        <PolicyText>Ao continuar, você concorda com os Termos de Serviço do Terra Tech e confirma que leu a nossa <LinkText to={'https://docs.google.com/document/d/160kYFMGvL7yEz8kfnWPSrBFWiR2Tr2C1nU2e1t_2qLE/edit?usp=sharing'}>Política de Privacidade.</LinkText></PolicyText>
        <Line />
        <PolicyText>Já tem uma conta? <LinkText to={'/login'}>Faça login.</LinkText></PolicyText>
      </PolicyWrapper>
      <ColectorRegisterLink>Cadastre-se como coletor.</ColectorRegisterLink>
    </Container>
  )
}

export default RegisterModal