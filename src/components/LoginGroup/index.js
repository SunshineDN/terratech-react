import {Container, H1, H3, ErrorMessage, ButtonFechar} from './styles'
import {FiMail} from "react-icons/fi"
import {MdLock} from "react-icons/md"
import {Input} from "../Input";
import {Button} from "../Button";
import {GButton} from "../GButton";
import {useState} from "react";
import {useLoginValidate} from "../../hooks/useLoginValidate"


export const LoginGroup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // useEffect(() => {
    //     return () => setTimeout(() => {
    //         setError("");
    //     }, 7000);
    // }, [error]);

    return (
        <>
        <Container onSubmit={useLoginValidate(email, password, setError)} msg={!!error}>
            <H1>{"Área de Login"}</H1>
            <Input label={"Email"} type={'text'} onChange={(e) => setEmail(e.target.value)} icon={<FiMail />}/>
            <Input label={"Senha"} type={'password'} onChange={(e) => setPassword(e.target.value)} icon={<MdLock />}/>
            <Button value={"Login"} type={'submit'} />
            {error ?
                <>
                <ErrorMessage>{error}<ButtonFechar onClick={() => setError("")} /></ErrorMessage>
                </> : null}
            <H3>{"OU"}</H3>
            <GButton />
        </Container>
        </>
    )
}