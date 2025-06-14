
import React from "react";

const Footer = () => (
  <footer className="bg-zinc-900 py-10 text-center mt-8">
    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0">
      <span className="text-white font-black text-xl tracking-tight font-sans">
        Medica<span className="text-teal-400">Pro</span>
      </span>
      <span className="text-zinc-400 font-medium">© {new Date().getFullYear()} MedicaPro Clinic. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
