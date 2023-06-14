import { Container, NavBar, NavIcon, NavText, NavItem, User } from './styles.js';
import UserImg from '../../assets/user.png';
import Collect from '../../assets/icons/Collect.svg';
import Coupons from '../../assets/icons/Coupons.svg';
import Gear from '../../assets/icons/Gear.svg';
import Help from '../../assets/icons/Help.svg';
import Home from '../../assets/icons/Home.svg';
import Residues from '../../assets/icons/Residues.svg';

export const SideBar = () => {
  return (
    <Container>
      <NavBar>
        <NavItem to={ '/profile' }>
          <User src={ UserImg }/>
          <NavText>Nome da silva</NavText>
        </NavItem>
        <NavItem to={ '/' }>
          <NavIcon src={ Home }/>
          <NavText>Início</NavText>
        </NavItem>
        <NavItem to={ '/residues' }>
          <NavIcon src={ Residues }/>
          <NavText>Início</NavText>
        </NavItem>
        <NavItem to={ '/colect' }>
          <NavIcon src={ Collect }/>
          <NavText>Início</NavText>
        </NavItem>
        <NavItem to={ '/coupons' }>
          <NavIcon src={ Coupons }/>
          <NavText>Início</NavText>
        </NavItem>
        <NavItem to={ '/config' } $bottom>
          <NavIcon src={ Gear }/>
          <NavText>Configurações</NavText>
        </NavItem>
        <NavItem to={ '/support' }>
          <NavIcon src={ Help }/>
          <NavText>Ajuda</NavText>
        </NavItem>
      </NavBar>
    </Container>
  );
};