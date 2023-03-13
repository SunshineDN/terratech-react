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
        if (isModalOpen) {
            setIsModalOpen(false)
        } else {
            setIsModalOpen(true)
        }
    }

    return (
        <>
            {isModalOpen ?
                <Background>
                    <ModalWrapper>
                        <H3>{"Completando o cadastro"}</H3>
                        <Column>
                            <Input label={"Nome"} icon={<FiMail/>}/>
                            <Input label={"Data de nascimento"} icon={<FiMail/>}/>
                            <Input label={"CEP"} icon={<FiMail/>}/>
                            <Input label={"Cidade"} icon={<FiMail/>}/>
                            <Input label={"Bairro"} icon={<FiMail/>}/>
                        </Column>
                        <Column>
                            <Input label={"Sobrenome"} icon={<FiMail/>}/>
                            <Input label={"CPF"} icon={<FiMail/>}/>
                            <Input label={"Estado"} icon={<FiMail/>}/>
                            <Input label={"Rua"} icon={<FiMail/>}/>
                            <Input label={"Numero"} icon={<FiMail/>}/>
                        </Column>
                        <CloseButton onClick={(e) => { handleToggleModalTrue(e) }}/>
                    </ModalWrapper>
                </Background>
                :null}
            <Container>
                <H1>Área de Cadastro</H1>
                <Input label={"Email"} icon={<FiMail/>}/>
                <Input label={"Senha"} icon={<MdLock/>}/>
                <Input label={"Confirmar senha"} icon={<MdLock />}/>
                <LoginButton onClick={(e) => { handleToggleModalTrue(e) } }>
                    {"Cadastrar"}
                </LoginButton>
            </Container>
        </>
    )
}

