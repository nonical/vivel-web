import React, { useState } from "react";
import { deleteTokens, logoutRedirect } from "../utils/auth";

interface AuthContextType {
  accessToken: string | null;
  signedIn: boolean;
  login: (accessToken: string, callback?: () => void) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string>(null!);
  const [signedIn, setSignedIn] = useState(false);

  const login = (accessToken: string, callback?: () => void) => {
    setAccessToken(accessToken);
    setSignedIn(true);

    if (callback) callback();
  };

  const logout = () => {
    deleteTokens();
    setAccessToken("");
    setSignedIn(false);
    logoutRedirect();
  };

  return (
    <AuthContext.Provider value={{ accessToken, signedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthContext);
}
