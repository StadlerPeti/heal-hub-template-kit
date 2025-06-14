
import React from "react";

const Navbar = () => (
  <header className="w-full fixed top-0 left-0 z-30 bg-white/80 border-b border-blue-100 backdrop-blur-md">
    <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8">
      <div className="flex items-center space-x-3">
        <span className="text-blue-600 font-extrabold text-2xl">
          Medica<span className="text-teal-500">Pro</span>
        </span>
      </div>
      <ul className="hidden md:flex items-center space-x-8 font-medium">
        <li><a href="#services" className="hover:text-blue-700 transition">Services</a></li>
        <li><a href="#about" className="hover:text-blue-700 transition">About</a></li>
        <li><a href="#contact" className="hover:text-blue-700 transition">Contact</a></li>
      </ul>
      <a href="#book" className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:scale-105 hover:bg-blue-700 transition-all font-semibold">Book Appointment</a>
    </nav>
  </header>
);

export default Navbar;
