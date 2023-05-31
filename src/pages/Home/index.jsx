import { WelcomeSection } from './Sections';
import { Header } from '../../components/Header/index.jsx';
import { Container } from './styles.js';

export const Home = () => {
  return (
    <Container>
      <Header/>
      <WelcomeSection/>
    </Container>
  );
};