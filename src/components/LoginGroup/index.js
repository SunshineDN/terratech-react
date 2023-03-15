import {Container, H1, H3, ErrorMessage, ButtonFechar} from './styles'
import {FiMail} from "react-icons/fi"
import {MdLock} from "react-icons/md"
import {Input} from "../Input";
import {Button} from "../Button";
import {GButton} from "../GButton";
import {useState} from "react";
import {useLoginValidate} from "../../hooks/useLoginValidate"
import * as yup from "yup";
import {useFormik} from "formik";


const loginSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Informe um email'),
    password: yup.string().min(6,'Sua senha deve ter pelo menos 6 digitos').required('Informe a senha')
});

export const LoginGroup = () => {
    const [error, setError] = useState("");
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
    });

    // useEffect(() => {
    //     return () => setTimeout(() => {
    //         setError("");
    //     }, 7000);
    // }, [error]);

    return (
        <>
        <Container onSubmit={useLoginValidate(formik.values.email, formik.values.password, setError)} msg={!!error}>
            <H1>{"Área de Login"}</H1>
            <Input name={"email"}
                   type={"text"}
                   label={"Email"}
                   onChange={formik.handleChange}
                   value={formik.values.email}
                   onBlur={formik.handleBlur}
                   error={(formik.touched.email && formik.errors.email)}
                   icon={<FiMail/>}
            />
            <Input name={"password"}
                   type={"password"}
                   label={"Senha"}
                   onChange={formik.handleChange}
                   value={formik.values.password}
                   onBlur={formik.handleBlur}
                   error={(formik.touched.password && formik.errors.password)}
                   icon={<MdLock/>}
            />
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