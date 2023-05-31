import { Container, Content } from './styles.js';
import { SectionText, SectionTitle } from '../components';

export const WelcomeSection = () => {
  return (
    <Container>
      <Content>
        <SectionTitle>Bem-vindo ao TerraTech - O app de descarte de lixo</SectionTitle>
        <SectionText>
          Ajude a proteger o meio ambiente descartando o seu lixo corretamente por meio do TerraTech. Mantenha-se
          atualizado com as últimas notícias sobre descarte de lixo e ganhe pontos ao descartar corretamente. Encontre
          facilmente pontos de descarte em sua área.
        </SectionText>
      </Content>
    </Container>
  );
};