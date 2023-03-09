import {ButtonContainer} from "./styles"
import { useGoogleLogin } from '@react-oauth/google';

export const GButton = () => {
    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code',
    });

    return (
        <ButtonContainer onClick={login}>
            LOGIN
        </ButtonContainer>
    )
}