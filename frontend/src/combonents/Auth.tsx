import { Navigate } from "react-router";
import { useAuth } from "react-oidc-context";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/Login" replace />;
  }

  return children;
}
