import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Home} from "./pages/home";
import {Login} from "./pages/login";
import {Cadastro} from "./pages/cadastro";
import { useState } from "react";
import Loading from "./components/LoadingComponent";
import { useLoginVerification } from "./hooks/useLoginVerification";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useLoginVerification(setIsLoggedIn)

  return (
    <>
      { isLoggedIn && <Loading />}
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