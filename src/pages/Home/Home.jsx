import { Layout } from '../../layout/index.jsx';
import { Container, Filter, InputBox, NavBar, NavItem, SearchBar, SearchButton, SearchIcon } from './styles.js';


const Home = () => {
  return (
    <Layout>
      <Container>
        <Filter>
          <NavBar>
            <NavItem>Todas</NavItem>
            <NavItem>Dicas</NavItem>
            <NavItem>Eventos</NavItem>
            <NavItem>Atualizações</NavItem>
          </NavBar>
          <SearchBar>
            <InputBox placeholder="Pesquisar..."/>
            <SearchButton><SearchIcon /></SearchButton>
          </SearchBar>
        </Filter>
      </Container>
    </Layout>
  );
};

export default Home;