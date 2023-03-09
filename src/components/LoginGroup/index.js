import {Container, H1, H3} from './styles'
import {Input} from "../Input";
import {Button} from "../Button";
import {GButton} from "../GButton";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useForm} from "react-hook-form";

const schema = yup.object({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().min(8, "Senha inválida").required("Campo obrigatório"),
}).required();

export const LoginGroup = () => {
    const {
        control,
        formState: {errors, isValid},
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues: "",
        reValidateMode: "onChange"
    })
    console.log(isValid)

    const title = "Área de Login";
    return (
        <Container>
            <H1>{title}</H1>
            <Input control={control} name={"email"} errorMessage={errors?.email?.message} type={"email"} label={"Email"}/>
            <Input control={control} name={"password"} errorMessage={errors?.email?.message} type={"password"} label={"Senha"} />
            <Button value={"Login"} type={"submit"}/>
            <H3>{"OU"}</H3>
            <GButton />
        </Container>
    )
}