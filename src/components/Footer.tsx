
import React from "react";

const Footer = () => (
  <footer className="bg-blue-50 border-t border-blue-200 py-8 text-center mt-8">
    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
      <span className="text-blue-700 font-extrabold text-xl">
        Medica<span className="text-teal-500">Pro</span>
      </span>
      <span className="text-gray-500">© {new Date().getFullYear()} MedicaPro Clinic. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
