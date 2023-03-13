import { useEffect } from "react"

export const useLoginVerification = (setIsLoggedIn) => {
    const logged = sessionStorage.getItem('auth');
    return(
        useEffect(() => {
            setTimeout(() => {
                if (logged !== null){
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                    console.log("Failed to log in");
                }
            }, 1500);
        }, [logged, setIsLoggedIn])
    )
}