import React, {useState} from 'react'
import {FiMail} from "react-icons/fi"
import {MdLock} from "react-icons/md"
import {Container, H1, H3, Background, ModalWrapper, CloseButton, Column} from './styles'
import {Input} from "../Input";
import {LoginButton} from "../Button/styles";
import * as yup from "yup";
import {useFormik} from "formik";


const cadastroSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Informe um email'),
    password: yup.string().min(6,'Sua senha deve ter pelo menos 6 digitos').required('Informe a senha'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('Confirme sua senha'),
    dataNascimento: yup.string().required('Informe a data de nascimento'),
    cep: yup.string().max(9).required('Informe o CEP'),
    estado: yup.string().required('Informe o estado'),
    cidade: yup.string().required('Informe a cidade'),
    rua: yup.string().required('Informe a rua'),
    bairro: yup.string().required('Informe o bairro'),
    numero: yup.string().required('Informe o numero'),
    cpf: yup.string().min(11, "Informe um CPF válido").max(11).required('Informe o CPF'),
    nome: yup.string().required('Informe seu nome'),
});


export const RegisterGroup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const formik = useFormik({
        initialValues: {
            nome: '',
            email: '',
            password: '',
            confirmPassword: '',
            dataNascimento: '',
            cep: '',
            estado: '',
            cidade: '',
            rua: '',
            bairro: '',
            numero: '',
            cpf: '',
        },
        validationSchema: cadastroSchema,
        onSubmit: (values) => {
            //const {email, password, nome, dataNascimento, bairro, numero, cpf, cep, cidade, rua, estado} = values;
            //Enviar os dados para validar aqui
            //post blá blá blá
        },
    });

    const handleToggleModalTrue = (e) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen)
    }

    return (
        <>
            {isModalOpen ?
                <Background>
                    <ModalWrapper>
                        <CloseButton onClick={(e) => { handleToggleModalTrue(e) }}/>
                        <H3>{"Completando o cadastro"}</H3>
                        <Column>
                            <Input value={formik.values.nome} onBlur={formik.handleBlur} name={"nome"} error={(formik.touched.nome && formik.errors.nome)} onChange={formik.handleChange} label={"Nome"} type={"text"} icon={<FiMail/>}/>
                            <Input value={formik.values.dataNascimento} onBlur={formik.handleBlur} name={"dataNascimento"} error={(formik.touched.dataNascimento && formik.errors.dataNascimento)} onChange={formik.handleChange}  label={"Data de nascimento"} type={"date"} icon={<FiMail/>}/>
                            <Input value={formik.values.cep} onBlur={formik.handleBlur} name={"cep"} error={(formik.touched.cep && formik.errors.cep)} onChange={formik.handleChange} label={"CEP"} icon={<FiMail/>} type={"text"}/>
                            <Input value={formik.values.cidade} onBlur={formik.handleBlur} name={"cidade"} error={(formik.touched.cidade && formik.errors.cidade)} onChange={formik.handleChange} label={"Cidade"} icon={<FiMail/>} type={"text"}/>
                            <Input value={formik.values.bairro} onBlur={formik.handleBlur} name={"bairro"} error={(formik.touched.bairro && formik.errors.bairro)} onChange={formik.handleChange} label={"Bairro"} icon={<FiMail/>} type={"text"}/>
                            <Input value={formik.values.cpf} onBlur={formik.handleBlur} name={"cpf"} error={(formik.touched.cpf && formik.errors.cpf)} onChange={formik.handleChange} label={"CPF"} icon={<FiMail/>} type={"text"}/>
                            <Input value={formik.values.estado} onBlur={formik.handleBlur} name={"estado"} error={(formik.touched.estado && formik.errors.estado)} onChange={formik.handleChange} label={"Estado"} icon={<FiMail/>} type={"text"}/>
                            <Input value={formik.values.rua} onBlur={formik.handleBlur} name={"rua"} error={(formik.touched.rua && formik.errors.rua)} onChange={formik.handleChange} label={"Rua"} icon={<FiMail/>} type={"text"}/>
                            <Input value={formik.values.numero} onBlur={formik.handleBlur} name={"numero"} error={(formik.touched.numero && formik.errors.numero)} onChange={formik.handleChange} label={"Numero"} icon={<FiMail/>}/>
                        </Column>
                        <LoginButton>Cadastrar</LoginButton>
                    </ModalWrapper>
                </Background>
                :null}
            <Container>
                <H1>Área de Cadastro</H1>
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
                <Input name={"confirmPassword"}
                       type={"password"}
                       label={"Confirmar senha"}
                       onChange={formik.handleChange}
                       value={formik.values.confirmPassword}
                       onBlur={formik.handleBlur}
                       error={(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                       icon={<MdLock/>} />
                <LoginButton onClick={(e) => { handleToggleModalTrue(e) } }>Próximo</LoginButton>
            </Container>
        </>
    )
}

