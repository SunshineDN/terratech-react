import LoginModal from "../../components/LoginModal";
import SectionOffset from "../../components/SectionOffset";
import { Container } from "./styles";

const Login = () => {
  return (
    <Container>
      <LoginModal />
      <SectionOffset position={"left"} />
    </Container>
  );
};

export default Login;