import { ButtonText, GoogleSpan, Image } from "./styles"
import { useGoogleLogin } from '@react-oauth/google';
import icon from "../../assets/images/Icon Google.svg"
export const GButton = () => {

    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code',
    });

    return (
        <ButtonText onClick={login}>
            <Image src={icon} alt={'Google Logo'} />
            {"Continuar com"}<GoogleSpan>{"Google"}</GoogleSpan>
        </ButtonText>
    )
}