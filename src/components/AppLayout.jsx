import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import React from "react";

const AppLayout = ({ children }) => {
  const isAuthenticated = !!Cookies.get("roles"); // Check if token exists

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AppLayout;
