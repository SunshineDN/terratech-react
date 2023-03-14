import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const useLoginVerify = (setShowLoading) => {
    const navigate = useNavigate();
    const logged = sessionStorage.getItem('auth');

    useEffect(() => {
        setShowLoading(true)
        const timer = setTimeout(() => {
            if (logged === "true") {
                navigate('/home');
            } else {
                console.error("Failed to log in");
            }
            setShowLoading(false);
        }, 1500);

        return () => {
            clearTimeout(timer);
        };

    }, [logged, setShowLoading, navigate]);
}