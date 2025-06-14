
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-zinc-900 py-12 mt-8">
    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-start md:items-center justify-between space-y-8 md:space-y-0">
      <div className="mb-4 md:mb-0">
        <span className="text-white font-black text-2xl tracking-tight font-sans block mb-2">
          Medica<span className="text-teal-400">Pro</span>
        </span>
        <span className="block text-zinc-400 font-medium mb-2">
          © {new Date().getFullYear()} MedicaPro Clinic. Minden jog fenntartva.
        </span>
        <span className="block text-zinc-400 text-xs">
          Kapcsolat: info@medicapro.hu
        </span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <nav className="flex flex-col sm:flex-row sm:gap-8 gap-2 text-zinc-300 font-medium mb-2 text-base">
          <Link to="/" className="hover:text-teal-300 transition">Főoldal</Link>
          <a href="#services" className="hover:text-teal-300 transition">Szolgáltatások</a>
          <a href="#about" className="hover:text-teal-300 transition">Rólunk</a>
          <a href="#contact" className="hover:text-teal-300 transition">Kapcsolat</a>
          <Link to="/dashboard" className="hover:text-teal-300 transition">Dashboard</Link>
          <Link to="/upload" className="hover:text-teal-300 transition">Dokumentum feltöltés</Link>
        </nav>
        <div className="flex flex-col sm:flex-row gap-2 text-zinc-400 text-sm">
          <a href="#" className="hover:text-teal-300 transition">Adatvédelem</a>
          <a href="#" className="hover:text-teal-300 transition">ÁSZF</a>
          <a href="#" className="hover:text-teal-300 transition">Impresszum</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
