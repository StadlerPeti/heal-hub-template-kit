
import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials (Hint: admin/admin)");
    }
  };

  return (
    <div className="bg-white min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 flex flex-col items-center justify-center bg-gradient-to-tr from-teal-50 to-blue-50">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 mt-4 mb-8">
          <h1 className="text-2xl font-black text-gray-900 mb-6">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm mb-1 text-gray-700 font-medium">
                Username
              </label>
              <Input
                id="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="mb-2"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm mb-1 text-gray-700 font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-600 font-semibold text-sm">{error}</div>}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
