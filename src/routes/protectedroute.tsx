/** @format */

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userDataString = localStorage.getItem("user");
  const user = JSON.parse(userDataString || "{}");

  if (userDataString && user) {
    return <Outlet />;
  } else {
    return <Navigate to='/' replace />;
  }
};
export default ProtectedRoute;
