import { Button, ButtonWrapper, ColectorRegisterLink, ColectorRegisterWrapper, Container, GIcon, GoogleButton, Input, InputWrapper, Line, Link, PolicyText, PolicyWrapper, Subtext, Title } from "./styles"

const RegisterModal = () => {
  return (
    <Container>
      <Title>Bem-vindo ao Terra Tech!</Title>
      <InputWrapper>
        <Input placeholder="Email" />
        <Input placeholder="Senha" type="password" />
        <Input placeholder="Confirme a senha" type="password" />
      </InputWrapper>
      <ButtonWrapper>
        <Button>Continuar</Button>
        <Subtext>Ou</Subtext>
        <GoogleButton><GIcon />Continuar com o Google</GoogleButton>
      </ButtonWrapper>
      <PolicyWrapper>
        <PolicyText>Ao continuar, você concorda com os Termos de Serviço do Terra Tech e confirma que leu a nossa <Link>Política de Privacidade.</Link></PolicyText>
        <Line />
        <Link>Já tem uma conta? Faça login.</Link>
      </PolicyWrapper>
      <ColectorRegisterWrapper>
        <ColectorRegisterLink>Cadastre-se como Coletor.</ColectorRegisterLink>
      </ColectorRegisterWrapper>
    </Container>
  )
}

export default RegisterModal