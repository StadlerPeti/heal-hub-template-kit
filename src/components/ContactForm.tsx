
import React, { useState } from "react";

const initialState = { name: "", email: "", message: "" };

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setForm(initialState);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="py-16 bg-white" >
      <div className="max-w-2xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10">
          Book an appointment or ask us a question. Our team responds quickly!
        </p>
        <form
          onSubmit={handleSubmit}
          id="book"
          className="space-y-6 bg-blue-50 p-8 rounded-2xl shadow-md animate-fade-in"
        >
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Message / Reason for Visit</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[90px]"
              required
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all hover-scale shadow"
          >
            Send Message
          </button>
          {sent && (
            <div className="text-green-600 text-sm font-semibold text-center pt-2 animate-fade-in">
              Thank you! Your message has been sent.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
