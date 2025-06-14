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
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-zinc-50 scroll-mt-12" >
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-black text-gray-900 mb-4 text-center font-sans">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Book an appointment or ask us a question. Our team responds quickly!
        </p>
        <form
          onSubmit={handleSubmit}
          id="book"
          className="space-y-7 bg-white p-10 rounded-3xl border border-zinc-100 shadow-2xl"
        >
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-base font-sans"
              required
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-base font-sans"
              required
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-800">Message / Reason for Visit</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[90px] text-base font-sans"
              required
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-3 rounded-full hover:from-teal-600 hover:to-blue-600 transition-all duration-150 shadow-md text-lg font-sans"
          >
            Send Message
          </button>
          {sent && (
            <div className="text-green-600 text-base font-semibold text-center pt-2 animate-fade-in">
              Thank you! Your message has been sent.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
