import {ButtonContainer} from "./styles"
import {GoogleLogin, GoogleOAuthProvider,} from "@react-oauth/google";

const clientId = process.env.REACT_APP_CLIENT_ID
export const GButton = () => {
    const onSuccess = (res) => {
        console.log("Login success! Current user: ", res)
    }

    const onFailure = (res) => {
        console.log("Login failed! res: ", res)
    }

    return (
        <ButtonContainer>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    shape={"pill"}
                    width={"360px"}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                />
            </GoogleOAuthProvider>
        </ButtonContainer>
    )
}