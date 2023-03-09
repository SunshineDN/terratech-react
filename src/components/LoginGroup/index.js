import {Container, H1, H3} from './styles'
import {Input} from "../Input";
import {Button} from "../Button";
import {GButton} from "../GButton";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().min(6, "Senha inválida").required("Campo obrigatório"),
}).required();


export const LoginGroup = () => {

    const title = "Área de Login";
    return (
        <Container>
            <H1>{title}</H1>
            <Input label={"Email"}/>
            <Input label={"Senha"} />
            <Button value={"Login"}/>
            <H3>{"OU"}</H3>
            <GButton />
        </Container>
    )
}