import { NavLink } from "react-router-dom";
import { Container, NavBar, NavIcon, Redirect, User } from "./styles";
import UserImg from "../../assets/user.png";
import { ReactComponent as Colect } from "../../assets/Colect.svg";
import { ReactComponent as Coupons } from "../../assets/Coupons.svg";
import { ReactComponent as Gear } from "../../assets/Gear.svg";
import { ReactComponent as Help } from "../../assets/Help.svg";
import { ReactComponent as Home } from "../../assets/Home.svg";
import { ReactComponent as Residues } from "../../assets/Residues.svg";

const SideBar = () => {
    <Container>
      <NavBar>
        <NavLink><User src={UserImg} /><Redirect to={"/home"}>Início</Redirect></NavLink>
        <NavLink><NavIcon bg={Home} /><Redirect to={"/home"}>Início</Redirect></NavLink>
        <NavLink><NavIcon bg={Residues} /><Redirect to={"/residues"}>Início</Redirect></NavLink>
        <NavLink><NavIcon bg={Colect} /><Redirect to={"/colect"}>Início</Redirect></NavLink>
        <NavLink><NavIcon bg={Coupons} /><Redirect to={"/coupons"}>Início</Redirect></NavLink>
      </NavBar>
      <NavBar>
        <NavLink><NavIcon bg={Gear} /><Redirect to={"/config"}>Configurações</Redirect></NavLink>
        <NavLink><NavIcon bg={Help} /><Redirect to={"/support"}>Ajuda</Redirect></NavLink>
      </NavBar>
    </Container>
}

export default SideBar;