
import React from "react";

const HeroSection = () => (
  <section className="pt-36 pb-20 md:pb-32 bg-white relative overflow-hidden">
    <div className="absolute inset-0 w-full h-full z-0">
      <img
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
        alt="Medical background"
        className="w-full h-full object-cover brightness-90 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/95"></div>
    </div>
    <div className="max-w-7xl mx-auto relative z-10 px-6 md:flex md:items-center md:gap-20">
      <div className="flex-1 text-center md:text-left py-10 md:py-24">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight tracking-tight font-sans">
          Modern Care for a <span className="text-teal-500">Healthier Life</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 font-medium max-w-xl mx-auto md:mx-0">
          Get premium clinical experience, same-day appointments and personalized healthcare in a truly beautiful environment.
        </p>
        <a
          href="#book"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-tr from-teal-500 to-blue-500 shadow-lg font-semibold text-white text-lg hover:scale-105 hover:from-teal-600 hover:to-blue-600 transition duration-150"
        >
          Book an Appointment
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
