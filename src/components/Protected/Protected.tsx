import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

interface ProtectedProps {
  children: JSX.Element;
}

export default function Protected({ children }: ProtectedProps) {
  const { signedIn } = useAuth();
  const location = useLocation();

  return signedIn ? <>{children}</> : <Navigate to="/login" />;
}
