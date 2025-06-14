
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white/90 border-b border-zinc-100 backdrop-blur-lg shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-gray-900 font-black text-2xl tracking-tight font-sans select-none">
            Medica<span className="text-teal-500">Pro</span>
          </Link>
        </div>
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-teal-500 transition duration-200">
                {link.name}
              </a>
            </li>
          ))}
          {isAuthenticated && (
            <li>
              <Link
                to="/upload"
                className={`hover:text-teal-500 transition duration-200${
                  location.pathname === "/upload" ? " text-teal-600 font-bold underline underline-offset-4" : ""
                }`}
              >
                Upload document
              </Link>
            </li>
          )}
        </ul>
        <div className="flex gap-2">
          {isAuthenticated && (
            <Link
              to="/upload"
              className="hidden md:inline-flex items-center gap-2 ml-2 bg-gradient-to-br from-teal-500 to-teal-400 text-white px-6 py-2 rounded-full shadow-xl font-semibold hover:scale-105 hover:from-teal-600 hover:to-teal-500 transition-all duration-200"
            >
              <span>Upload</span>
            </Link>
          )}
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-transparent border border-teal-500 text-teal-700 px-4 py-2 rounded-full font-semibold hover:bg-teal-50 transition-all duration-200"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="inline-flex items-center gap-2 bg-transparent border border-red-400 text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-100 transition-all duration-200"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
