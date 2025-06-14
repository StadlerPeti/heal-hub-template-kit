
import React from "react";

const Navbar = () => (
  <header className="w-full fixed top-0 left-0 z-30 bg-white/90 border-b border-zinc-100 backdrop-blur-lg shadow-md">
    <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
      <div className="flex items-center space-x-3">
        <span className="text-gray-900 font-black text-2xl tracking-tight font-sans">
          Medica<span className="text-teal-500">Pro</span>
        </span>
      </div>
      <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
        <li><a href="#services" className="hover:text-teal-500 transition duration-200">Services</a></li>
        <li><a href="#about" className="hover:text-teal-500 transition duration-200">About</a></li>
        <li><a href="#contact" className="hover:text-teal-500 transition duration-200">Contact</a></li>
      </ul>
      <a
        href="#book"
        className="hidden md:inline-flex items-center gap-2 bg-gradient-to-br from-teal-500 to-teal-400 text-white px-6 py-2 rounded-full shadow-xl font-semibold hover:scale-105 hover:from-teal-600 hover:to-teal-500 transition-all duration-200"
      >
        <span>Book Appointment</span>
      </a>
    </nav>
  </header>
);

export default Navbar;
