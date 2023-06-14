import { Outlet, Navigate } from 'react-router-dom';


const PrivateRoutes = () => {
  // const isLoggedIn = window.localStorage.getItem('sessionID') ? true : false;
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/login"/>;
  }

  return (
    <Outlet/>
  );
};

export default PrivateRoutes;