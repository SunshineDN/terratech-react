import { useState } from "react"
import { Button, ButtonWrapper, Container, GIcon, GoogleButton, Input, InputWrapper, Line, LinkText, PolicyText, PolicyWrapper, Subtext, Title } from "./styles"

const LoginModal = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  return (
    <Container $active={data.email !== '' || data.password !== ''}>
      <Title>Bem-vindo de volta!</Title>
      <InputWrapper>
        <Input placeholder="Email" type="email" onChange={e => setData({ ...data, email: e.target.value })} />
        <Input placeholder="Senha" type="password" onChange={e => setData({ ...data, password: e.target.value })} />
      </InputWrapper>
      <ButtonWrapper>
        <Button>Login</Button>
        <Subtext>Ou</Subtext>
        <GoogleButton><GIcon />Continuar com o Google</GoogleButton>
      </ButtonWrapper>
      <PolicyWrapper>
        <PolicyText>Ao continuar, você concorda com os Termos de Serviço do Terra Tech e confirma que leu a nossa <LinkText to={'https://docs.google.com/document/d/160kYFMGvL7yEz8kfnWPSrBFWiR2Tr2C1nU2e1t_2qLE/edit?usp=sharing'} target="_blank">Política de Privacidade.</LinkText></PolicyText>
        <Line />
        <PolicyText>Ainda não faz parte do Terra Tech? <LinkText to={'/register'}>Crie uma conta.</LinkText></PolicyText>
      </PolicyWrapper>
    </Container>
  )
}

export default LoginModal