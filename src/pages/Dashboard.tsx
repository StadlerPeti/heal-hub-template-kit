
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChartContainer,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", patients: 30, visits: 10 },
  { name: "Feb", patients: 38, visits: 17 },
  { name: "Mar", patients: 45, visits: 22 },
  { name: "Apr", patients: 52, visits: 30 },
  { name: "May", patients: 60, visits: 40 },
  { name: "Jun", patients: 70, visits: 48 },
];

const tiles = [
  { icon: "🩺", title: "Total Patients", value: "1,240" },
  { icon: "⏰", title: "Appointments", value: "345" },
  { icon: "💉", title: "Vaccinations", value: "122" },
  { icon: "👨‍⚕️", title: "Doctors On Duty", value: "13" },
  { icon: "🧪", title: "Lab Tests", value: "88" },
  { icon: "⭐", title: "Average Rating", value: "4.8" },
];

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-white min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 flex flex-col items-center justify-start">
        <div className="w-full max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dashboard Overview</h1>
          <div className="mb-12 bg-white rounded-2xl shadow-xl p-7">
            <h2 className="font-semibold mb-4 text-gray-800">Monthly Stats</h2>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" className="text-sm" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="patients" stroke="#14b8a6" strokeWidth={3} dot={{ r: 6 }} />
                  <Line type="monotone" dataKey="visits" stroke="#2563eb" strokeWidth={3} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            {tiles.map((tile) => (
              <div
                key={tile.title}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-7 flex flex-col items-center hover:scale-105 hover:shadow-lg transition-transform text-center"
              >
                <span className="text-4xl mb-3">{tile.icon}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tile.title}</h3>
                <span className="text-2xl font-black text-teal-600">{tile.value}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
