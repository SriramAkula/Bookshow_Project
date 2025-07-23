import React from "react";
import { Navigate } from "react-router";

function AuthRoute(props) {
  const user = true;
  const isAuthenticated = user;

  return isAuthenticated ? props.children : <Navigate to={"/login"} />;
}

export default AuthRoute;