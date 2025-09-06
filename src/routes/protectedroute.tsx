
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }: { role: string }) => {
  const userDataString = localStorage.getItem("user");
  const user = JSON.parse(userDataString || "{}");

  if (userDataString && user) {
    // Check if the user's role matches the required role for this route
    if (user?.role === role || role === "all") {
      return <Outlet />;
    } else {
      // Redirect to login if the user tries to access a route for a different role
      return <Navigate to={"/auth/login"} replace />;
    }
  } else {
    return <Navigate to='/auth/login' replace />;
  }
};
export default ProtectedRoute;
