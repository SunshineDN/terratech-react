import {ButtonContainer} from "./styles"
import {GoogleLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export const GButton = () => {

    return (
        <ButtonContainer>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    let decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                useOneTap
            />
        </ButtonContainer>
    )
}