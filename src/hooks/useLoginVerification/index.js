import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

export const useLoginVerification = (setIsLoggedIn) => {
    const navigate = useNavigate();
    const logged = sessionStorage.getItem('auth');
    return(
        useEffect(() => {
            setTimeout(() => {
                if (logged !== null){
                    setIsLoggedIn(true);
                    navigate('/home')
                } else {
                    setIsLoggedIn(false);
                    console.log("Failed to log in");
                }
            }, 1500);
        }, [navigate, logged, setIsLoggedIn])
    )
}
