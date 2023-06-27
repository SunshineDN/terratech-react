import { useState } from "react"
import { Button, ButtonWrapper, ColectorRegisterLink, Container, GIcon, GoogleButton, Input, InputWrapper, Line, Link, PolicyText, PolicyWrapper, Subtext, Title } from "./styles"

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
        <GoogleButton><GIcon />Continuar com o Google</GoogleButton>
      </ButtonWrapper>
      <PolicyWrapper>
        <PolicyText>Ao continuar, você concorda com os Termos de Serviço do Terra Tech e confirma que leu a nossa <Link>Política de Privacidade.</Link></PolicyText>
        <Line />
        <PolicyText>Já tem uma conta? <Link>Faça login.</Link></PolicyText>
      </PolicyWrapper>
      <ColectorRegisterLink>Cadastre-se como coletor.</ColectorRegisterLink>
    </Container>
  )
}

export default RegisterModal