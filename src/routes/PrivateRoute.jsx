import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  // const isLoggedIn = window.localStorage.getItem('sessionID') ? true : false;
  const isLoggedIn = true;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute