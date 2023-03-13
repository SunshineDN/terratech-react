import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro";
import { useState, useEffect } from "react";
import Loading from "./components/LoadingComponent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate;
  const logged = sessionStorage.getItem('auth');

  useEffect(() => {
    setTimeout(() => {
      if (logged !== null) {
        setIsLoggedIn(true);
        navigate('/home')
      } else {
        setIsLoggedIn(false);
        console.error("Failed to log in");
      }
    }, 1500);
  }, [navigate, logged, setIsLoggedIn]);

  return (
    <>
      {isLoggedIn && <Loading />}
      <Router >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;