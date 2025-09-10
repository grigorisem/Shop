// src/context/AuthContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";
import { saveToken, getToken, logout as removeToken } from "../api/auth";

interface AuthContextType {
  token: string | null;
  userName: string | null;
  login: (token: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(getToken());
  const [userName, setUserName] = useState<string | null>(localStorage.getItem("userName"));

  const handleLogin = (newToken: string, name: string) => {
    saveToken(newToken);
    localStorage.setItem("userName", name);
    setToken(newToken);
    setUserName(name);
  };

  const handleLogout = () => {
    removeToken();
    localStorage.removeItem("userName");
    setToken(null);
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ token, userName, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
