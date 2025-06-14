
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
  <section id="services" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-3">
        Our Services
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        We offer a full spectrum of medical services, staffed by caring and credentialed professionals—here's how we help you thrive.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(f => (
          <div key={f.title} className="bg-blue-50 hover:shadow-lg transition-shadow rounded-2xl p-8 flex flex-col items-center text-center animate-fade-in">
            <span className="text-4xl mb-4">{f.icon}</span>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
