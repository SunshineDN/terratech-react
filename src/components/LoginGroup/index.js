import { Container, Title} from './styles'
import {Input} from "../Input";
import {Button} from "../Button";
import {GButton} from "../GButton";

export const LoginGroup = () => {

    const title = "Área de Login";
    return (
        <Container>
            <Title>{title}</Title>
            <Input label={"Email"}/>
            <Input label={"Senha"}/>
            <Button value={"Login"}/>
            <GButton />
        </Container>
    )
}