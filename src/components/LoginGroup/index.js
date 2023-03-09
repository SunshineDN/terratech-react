import {Container, H1, H3} from './styles'
import {Input} from "../Input";
import {Button} from "../Button";
import {GButton} from "../GButton";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";


export const LoginGroup = () => {
    const title = "Área de Login";
    return (
        <Container>
            <H1>{title}</H1>
            <Input type={"email"} label={"Email"}/>
            <Input type={"password"} label={"Senha"} />
            <Button value={"Login"}/>
            <H3>{"OU"}</H3>
            <GButton />
        </Container>
    )
}