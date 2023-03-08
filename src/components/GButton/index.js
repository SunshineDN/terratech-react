import {ButtonContainer} from "./styles"
import {GoogleLogin, GoogleOAuthProvider,} from "@react-oauth/google";

const clientId = "180197040960-mn2qvk9baomeujjuqlsefg6kvjurb5rv.apps.googleusercontent.com"
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
                    text={"signin"}
                    type={"standard"}
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