import {useCallback} from "react";
import {api} from "../../services/api";
import {useNavigate} from "react-router-dom";

export const useLoginValidate = (email, password, setError) => {
    const navigate = useNavigate()
    return (
        useCallback(async (event) => {
            event.preventDefault();
            if (email.includes("@") && email.includes(".com")){
            } else {
                setError("Email inválido, verifique seu email");
                return;
            }
            try {
                const response = await api.post("/users/login", { email, password });
                if (response.status === 200) {
                    // localStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("auth", true);
                    navigate("/home")
                } else {
                    setError(response.data.message)
                }
            } catch (error) {
                console.error("Error", error);
                setError("Algo deu errado! Verifique o email e a senha e tente novamente.")
            }
        }, [email, password, navigate, setError])
    )
}