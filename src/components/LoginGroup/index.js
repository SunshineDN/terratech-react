import {Container, H1, H3, ErrorMessage, ErrorContainer, ButtonFechar} from './styles'
import {Input} from "../Input";
import {Button} from "../Button";
import {GButton} from "../GButton";
import {api} from "../../services/api"
import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const LoginGroup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleLogin = useCallback(async (event) => {
        event.preventDefault()
        try {
            const response = await api.post("/users/login", { email, password });
            if (response.status === 200) {
                navigate("/home")
            } else {
                setError(response.data.message)
            }
        } catch (error) {
            console.error("Error", error);
            setError("Algo deu errado! verifique o email e a senha e tente novamente.")
        }
    }, [email, password])

    useEffect(() => {
        return () => setError("");
    }, []);

    return (
        <>
        {error ?
            <ErrorContainer>
                <ErrorMessage>{error}</ErrorMessage>
                <ButtonFechar>
                    {"X"}
                </ButtonFechar>
            </ErrorContainer>
            : null}
        <Container onSubmit={handleLogin} msg={!!error}>
            <H1>{"Área de Login"}</H1>
            <Input label={"Email"} onChange={(e) => setEmail(e.target.value)}/>
            <Input label={"Senha"} type={'password'} onChange={(e) => setPassword(e.target.value)}/>
            <Button value={"Login"} type={'submit'}/>
            <H3>{"OU"}</H3>
            <GButton />
        </Container>
        </>
    )
}