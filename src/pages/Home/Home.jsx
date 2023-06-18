import { Layout } from '../../layout/index.jsx';
import FilterComponent from '../../components/FilterComponent/index.jsx';
import NewsComponent from '../../components/NewsComponent/index.jsx';
import { Container, NewsWrapper } from './styles.js';
import Image from '../../assets/img.png'
import TopicComponent from '../../components/TopicComponent/index.jsx';


const Home = () => {

  const news = [
    {
      title: 'BNDES aprova investimento de R$ 59 mi para Weg elaborar turbina eólica de 7 MW',
      description: 'Equipamento será o maior ofertado no mercado brasileiro representa salto de potência ante principal plataforma produzida atualmente pela empresa, de 4,2 MW',
      image: Image
    },
    {
      title: 'BNDES aprova investimento de R$ 59 mi para Weg elaborar turbina eólica de 7 MW',
      description: 'Equipamento será o maior ofertado no mercado brasileiro representa salto de potência ante principal plataforma produzida atualmente pela empresa, de 4,2 MW',
      image: Image
    },
    {
      title: 'BNDES aprova investimento de R$ 59 mi para Weg elaborar turbina eólica de 7 MW',
      description: 'Equipamento será o maior ofertado no mercado brasileiro representa salto de potência ante principal plataforma produzida atualmente pela empresa, de 4,2 MW',
      image: Image
    },
    {
      title: 'BNDES aprova investimento de R$ 59 mi para Weg elaborar turbina eólica de 7 MW',
      description: 'Equipamento será o maior ofertado no mercado brasileiro representa salto de potência ante principal plataforma produzida atualmente pela empresa, de 4,2 MW',
      image: Image
    },
    {
      title: 'BNDES aprova investimento de R$ 59 mi para Weg elaborar turbina eólica de 7 MW',
      description: 'Equipamento será o maior ofertado no mercado brasileiro representa salto de potência ante principal plataforma produzida atualmente pela empresa, de 4,2 MW',
      image: Image
    },
  ]

  const moreRead = [
    {
      rank: 1,
      title: 'Caso Madeleine: material encontrado em buscas será enviado à Alemanha'
    },
    {
      rank: 2,
      title: 'Em abril, juiz Eduardo Appio denunciou desembargador do TRF-4 ao CNJ por abuso de poder'
    },
    {
      rank: 3,
      title: 'Mundo deve se preparar para surto mais mortal do que a Covid-19, alerta chefe da OMS'
    },
    {
      rank: 4,
      title: 'Virada Cultural 2023: confira programação e horários das principais atrações'
    },
    {
      rank: 5,
      title: 'Confaz anuncia nova tabela de preços dos combustíveis, válidos a partir de 1º de junho'
    },
    {
      rank: 6,
      title: 'Lula faz churrasco com ministros e líderes do governo no Alvorada para tratar de pautas no Congresso'
    },
    {
      rank: 7,
      title: 'Ataque com drones danifica prédio administrativo de oleoduto na Rússia'
    },
    {
      rank: 8,
      title: 'Entenda por que a OMS alerta para a emergência de uma nova doença'
    },
    {
      rank: 9,
      title: 'Forças russas interceptam dois mísseis britânicos Storm Shadow, diz Ministério da Defesa'
    },
    {
      rank: 10,
      title: 'Idosa envenena, esquarteja e espalha restos mortais do marido em rodovia no MS'
    }
  ]

  return (
    <Layout>
      <Container>
        <FilterComponent items={{ 1: 'Todas', 2: 'Dicas', 3: 'Eventos', 4: 'Atualizações' }} placeholder="Pesquisar tópicos..." />
        <NewsWrapper>
          <NewsComponent news={news} />
          <TopicComponent list={moreRead} />
        </NewsWrapper>
      </Container>
    </Layout>
  );
};

export default Home;