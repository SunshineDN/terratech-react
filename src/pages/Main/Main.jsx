import SideBar from "../../components/SideBar";
import SideBarRoutes from "../../routes/SideBarRoutes";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;

    position: relative;
    width: 1923px;
    height: 1054px;

    background: #08120E;
    border-radius: 5px;
`

const Main = () => {
    <Container>
        <SideBar />
        <SideBarRoutes />
    </Container>
}

export default Main;