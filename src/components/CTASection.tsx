
import React from "react";

const CTASection = () => (
  <section className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 py-14 mt-8 relative">
    <div className="max-w-4xl mx-auto px-8 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 animate-fade-in">
        Take the next step toward better health
      </h2>
      <p className="text-lg text-gray-700 mb-7">
        Experience attentive, modern, and efficient medical care you can trust.
      </p>
      <a href="#book" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-xl text-lg font-bold transition hover-scale animate-pulse">
        Book Your Appointment
      </a>
    </div>
  </section>
);

export default CTASection;
