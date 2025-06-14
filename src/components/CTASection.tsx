
import React from "react";

const CTASection = () => (
  <section className="relative py-14 md:py-20 bg-gradient-to-r from-blue-50 via-teal-100 to-white overflow-hidden">
    <div className="absolute -left-32 -top-40 w-[500px] h-[360px] bg-teal-100 opacity-70 rounded-full blur-3xl z-0" />
    <div className="absolute -right-24 -bottom-28 w-[400px] h-[220px] bg-blue-100 opacity-70 rounded-full blur-2xl z-0" />
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center px-6">
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 font-sans animate-fade-in">
        Take the next step toward better health
      </h2>
      <p className="text-lg text-gray-600 mb-8 font-medium">
        Modern clinic. Expert staff. Experience attentive, friendly, and efficient medical care you can truly trust.
      </p>
      <a
        href="#book"
        className="bg-gradient-to-tr from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl transition hover:scale-105 animate-pulse"
      >
        Book Your Appointment
      </a>
    </div>
  </section>
);

export default CTASection;
