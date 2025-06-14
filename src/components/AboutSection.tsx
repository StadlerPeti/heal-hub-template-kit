
import React from "react";

const AboutSection = () => (
  <section
    id="about"
    className="py-20 bg-gradient-to-b from-white via-blue-50 to-teal-50 px-6 scroll-mt-24"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 font-sans">
        About Our Clinic
      </h2>
      <p className="text-lg text-gray-700 mb-8 font-medium max-w-2xl mx-auto">
        MedicaPro is dedicated to providing modern, compassionate healthcare for the whole family. 
        Our clinic combines advanced technology, experienced providers, and a welcoming, relaxing environment. 
        Whether you're here for a routine checkup or specialist care, you can expect personal attention and clinical excellence at every step.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="flex-1 bg-white rounded-2xl border border-zinc-100 shadow p-8 text-left">
          <h3 className="text-xl font-bold text-teal-600 mb-2">Our Approach</h3>
          <p className="text-gray-700">
            We believe in treating the whole person. Our providers listen to you, create personalized care plans, and empower your healthy lifestyle.
          </p>
        </div>
        <div className="flex-1 bg-white rounded-2xl border border-zinc-100 shadow p-8 text-left">
          <h3 className="text-xl font-bold text-teal-600 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To make access to quality healthcare easy, enjoyable, and stress-free — for your peace of mind and lifelong wellbeing.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
