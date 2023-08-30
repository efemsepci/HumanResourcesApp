import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ allowedRoles, children }) {
  const userRole = sessionStorage.getItem("userRole");

  console.log("USER ROLE: ", userRole);
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
}
export default ProtectedRoute;
