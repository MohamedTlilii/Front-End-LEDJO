import React from "react";
import { Navigate } from "react-router-dom";
function PublicRoute({ children }) {
  let token = localStorage.getItem("token");
  let isBanned = localStorage.getItem("isBanned");
  let isUser = localStorage.getItem("isUser");
  let isAdmin = localStorage.getItem("isAdmin");

  if (
    token &&
    isBanned === "false" &&
    isUser === "true" &&
    isAdmin === "false"
  ) {
    return <Navigate to="/profile" />;
  } else if (token && isAdmin === "true" && isUser === "false") {
    return <Navigate to="/login" />;
  } else {
    return <> {children} </>;
  }
}

export default PublicRoute;
