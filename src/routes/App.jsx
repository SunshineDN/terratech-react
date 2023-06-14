import { Routes, Route } from "react-router-dom"
import Register from "../pages/Register/Register"
import Login from "../pages/Login/Login"
import PrivateRoute from "./PrivateRoute"

function App() {

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/*" element={<></>} />
    </Routes>
  )
}

export default App