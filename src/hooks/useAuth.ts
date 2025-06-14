
import { useState, useEffect } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("logged_in") === "true";
  });

  useEffect(() => {
    const listener = () => {
      setIsAuthenticated(localStorage.getItem("logged_in") === "true");
    };
    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, []);

  function login(username: string, password: string): boolean {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("logged_in", "true");
      setIsAuthenticated(true);
      window.dispatchEvent(new Event("storage")); // Frissítés minden tabon
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem("logged_in");
    setIsAuthenticated(false);
    window.dispatchEvent(new Event("storage"));
  }

  return { isAuthenticated, login, logout };
}
