import {Container, H1, H3} from './styles'
import {Input} from "../Input";
import {Button} from "../Button";
import {GButton} from "../GButton";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { useState } from 'react';


export const LoginGroup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleChangeEmail(e){
        e.preventDefault();
        setEmail(e.target.value);
    };

    function handleChangePassword(e){
        e.preventDefault();
        setPassword(e.target.value);
    };

    function handleLogin(){
        // if(!EmailValidator.validate(email)){
        //     alert("Email inválido");
        //     return;
        // }
        // if(password.length < 8){
        //     alert("A senha deve ter pelo menos 8 caracteres");
        //     return;
        // }
        // alert("Login realizado com sucesso");
        fetch("https://backend-terratech-production.up.railway.app/users")
        .then(data => console.log(data.json()))
    };

    const title = "Área de Login";
    return (
        <Container>
            <H1>{title}</H1>
            <Input label={"Email"} onChange={e => handleChangeEmail(e)}/>
            <Input label={"Senha"} onChange={e => handleChangePassword(e)}/>
            <Button value={"Login"} onClick={handleLogin}/>
            <H3>{"OU"}</H3>
            <GButton />
        </Container>
    )
}