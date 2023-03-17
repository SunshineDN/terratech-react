import {useCallback} from "react";
import {api} from "../../services/api";
import {useNavigate} from "react-router-dom";

export const useLoginValidate = (email, password, setError) => {
    const navigate = useNavigate();
    return (
        useCallback(async (event) => {
            event.preventDefault();
            // if (email.includes("@") && email.includes(".com")){
            //     setError("");
            // } else {
            //     setError("Email inválido, verifique seu email");
            //     return;
            // }

            // email.includes("@") && email.includes(".com") ? setError("") : setError("Email inválido, verifique seu email");

            try {
                console.log(email, password)
                const response = await api.post("/users/login", { email, password });
                if (response.status === 200) {
                    // localStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("auth", true);
                    console.log(response.data)
                    navigate("/home");
                }
            } catch (error) {
                console.error("Error", error);
                setError("Erro no sistema, email ou senha inválidos");
            }
        }, [email, password, navigate, setError])
    )
}