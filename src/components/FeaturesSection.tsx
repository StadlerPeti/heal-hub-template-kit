
import React from "react";

const features = [
  {
    title: "Primary Care",
    desc: "Comprehensive checkups and preventive care for all ages.",
    icon: "🩺",
  },
  {
    title: "Same-day Visits",
    desc: "Rapid appointments for urgent needs and peace of mind.",
    icon: "⏰",
  },
  {
    title: "Pediatrics",
    desc: "Lifelong wellness for your children with our expert pediatricians.",
    icon: "👶",
  },
  {
    title: "Specialists",
    desc: "Cardiology, dermatology, and more, all under one roof.",
    icon: "💼",
  },
  {
    title: "Lab Testing",
    desc: "On-site diagnostics with fast, accurate results.",
    icon: "🧪",
  },
  {
    title: "Virtual Visits",
    desc: "Secure video consultations available for select services.",
    icon: "💻",
  },
];

const FeaturesSection = () => (
  <section id="services" className="py-20 bg-gradient-to-b from-white via-zinc-50 to-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-3 font-sans">
        Our Services
      </h2>
      <p className="text-center text-gray-600 mb-14 max-w-xl mx-auto text-lg">
        We offer a full spectrum of medical services, delivered with care and attention in a beautiful environment.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map(f => (
          <div
            key={f.title}
            className="bg-white rounded-3xl shadow-xl border border-zinc-100 p-8 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
          >
            <span className="text-[2.5rem] mb-5">{f.icon}</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
