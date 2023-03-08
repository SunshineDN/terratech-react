import { Container, Title} from './styles'
import {Input} from "../Input";
import {Button} from "../Button";
import {GButton} from "../GButton";
import {useEffect} from "react";
import {gapi} from "gapi-script";
const clientId = "180197040960-mn2qvk9baomeujjuqlsefg6kvjurb5rv.apps.googleusercontent.com"
export const LoginGroup = () => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };
        gapi.load('client: auth2', start)
    })

    const title = "Área de Login";
    return (
        <Container>
            <Title>{title}</Title>
            <Input label={"Email"}/>
            <Input label={"Senha"}/>
            <Button value={"Login"}/>
            <GButton />
        </Container>
    )
}