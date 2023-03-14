import React, {useState} from 'react'
import {FiMail} from "react-icons/fi"
import {MdLock} from "react-icons/md"
import {Container, H1, H3, Background, ModalWrapper, CloseButton, Column} from './styles'
import {Input} from "../Input";
import {LoginButton} from "../Button/styles";

export const RegisterGroup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)


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
                            <Input label={"Nome"} type={"text"} icon={<FiMail/>}/>
                            <Input label={"Data de nascimento"} type={"datetime-local"} icon={<FiMail/>}/>
                            <Input label={"CEP"} icon={<FiMail/>} type={"text"}/>
                            <Input label={"Cidade"} icon={<FiMail/>} type={"text"}/>
                            <Input label={"Bairro"} icon={<FiMail/>} type={"text"}/>
                            <Input label={"CPF"} icon={<FiMail/>} type={"text"}/>
                            <Input label={"Estado"} icon={<FiMail/>} type={"text"}/>
                            <Input label={"Rua"} icon={<FiMail/>} type={"text"}/>
                            <Input label={"Numero"} icon={<FiMail/>} type={"number"}/>
                        </Column>
                        <LoginButton>Cadastrar</LoginButton>
                    </ModalWrapper>
                </Background>
                :null}
            <Container>
                <H1>Área de Cadastro</H1>
                <Input label={"Email"} icon={<FiMail/>}/>
                <Input label={"Senha"} icon={<MdLock/>}/>
                <Input label={"Confirmar senha"} icon={<MdLock />}/>
                <LoginButton onClick={(e) => { handleToggleModalTrue(e) } }>Próximo</LoginButton>
            </Container>
        </>
    )
}

