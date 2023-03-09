import {ButtonContainer, ButtonText, IconContainer} from "./styles"
import { useGoogleLogin } from '@react-oauth/google';
import icon from "../../assets/images/icons8-google-logo.svg"
export const GButton = () => {

    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code',
    });

    return (
        <ButtonContainer >
            <IconContainer>
                <img src={icon} alt={'google logo'}/>
            </IconContainer>
            <ButtonText onClick={login}>{"Fazer login com Google"}</ButtonText>

        </ButtonContainer>
    )
}