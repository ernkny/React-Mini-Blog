import React from "react";
import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from "../store/Hooks/authHooks";


type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
  return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
