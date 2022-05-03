import React from 'react';

//Rutas protegidas
const ProtectedRoute = ({ children, token }) => {
  const location = useLocation();

  if (!token) {
    return <Navigate to="/home" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
