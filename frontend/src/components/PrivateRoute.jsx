// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("authToken"); // or useContext/Auth state

  return isAuthenticated ? children : <Navigate to="/signup" replace />;
};

export default PrivateRoute;
