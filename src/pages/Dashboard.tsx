
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 flex flex-col items-center justify-center bg-gradient-to-tr from-teal-50 to-blue-50">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 mt-4 mb-8">
          <h1 className="text-2xl font-black text-gray-900 mb-6 text-center">Dashboard</h1>
          <div className="text-gray-700 font-medium text-center">
            Üdvözlünk az admin felületen!
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
