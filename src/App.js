import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro";
import { useState, useEffect } from "react";
import Loading from "./components/LoadingComponent";
import {useLoginVerify} from "./hooks/useLoginVerify";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useLoginVerify(setShowLoading)

  return (
    <>
      {showLoading && <Loading />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    </>
  );
}

export default App;