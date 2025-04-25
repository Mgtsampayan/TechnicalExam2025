"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: any; // Replace with your user type
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null); // Replace 'any' with your user type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking auth state (e.g., from a token or API)
    setLoading(false);
  }, []);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    // Implement your login logic (e.g., API call)
    const mockUser = { email }; // Replace with actual auth logic
    setUser(mockUser);
  };

  const logout = () => {
    // Implement logout logic (e.g., clear token)
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
