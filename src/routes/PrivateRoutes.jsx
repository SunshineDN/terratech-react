import { Outlet, Navigate } from 'react-router-dom';
import { useState } from 'react';

function PrivateRoutes() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Check if user is authorized


  if (isAuthorized) {
    return <Outlet/>;
  }

  return <Navigate to="/"/>;
}

export default PrivateRoutes;
