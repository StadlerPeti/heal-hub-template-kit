
import React from "react";

const HeroSection = () => (
  <section className="pt-28 pb-14 bg-gradient-to-r from-blue-50 to-blue-100 relative">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-8 gap-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-900 leading-tight animate-fade-in">
          Your Health <span className="text-teal-500">Matters</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Trusted, compassionate care for your family, now and always. Modern clinic, expert staff, same-day appointments.
        </p>
        <a href="#book" className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-lg font-semibold transition-all animate-pulse">Book an Appointment</a>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
          alt="Medical staff"
          className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white animate-fade-in"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
