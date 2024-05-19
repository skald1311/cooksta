import { useNavigate } from "react-router-dom";
import { useAuth } from "../features/authentication/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  // 1. Check if authenticated
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // 2. If there is no authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );
  // 3. If there is a user, render the app
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
