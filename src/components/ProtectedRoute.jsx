import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../features/auth/authContext";

const ProtectedRoute = () => {
  
  const { user, loading } = useAuth();

  if (loading) {
    return null; // o un spinner
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;