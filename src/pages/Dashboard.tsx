
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Link } from "react-router-dom";

const chartData = [
  { name: "Jan", patients: 30, visits: 10 },
  { name: "Feb", patients: 38, visits: 17 },
  { name: "Mar", patients: 45, visits: 22 },
  { name: "Apr", patients: 52, visits: 30 },
  { name: "May", patients: 60, visits: 40 },
  { name: "Jun", patients: 70, visits: 48 },
];

const tiles = [
  { icon: "🩺", title: "Összes páciens", value: "1,240" },
  { icon: "⏰", title: "Időpontok", value: "345" },
  { icon: "💉", title: "Oltások", value: "122" },
  { icon: "👨‍⚕️", title: "Orvosok szolgálatban", value: "13" },
  { icon: "🧪", title: "Laborteszt", value: "88" },
  { icon: "⭐", title: "Átlag értékelés", value: "4.8" },
];

// Mock dokumentumok listája (ez váltandó Supabase vagy api kapcsolatra)
const documents = [
  {
    id: 1,
    name: "Lelet_1234.pdf",
    uploadedAt: "2024-06-10 13:04",
    size: "1.2 MB",
  },
  {
    id: 2,
    name: "Laboreredmény_5632.png",
    uploadedAt: "2024-06-12 10:22",
    size: "800 KB",
  },
  {
    id: 3,
    name: "TAJ_igazolas.docx",
    uploadedAt: "2024-06-13 09:19",
    size: "420 KB",
  },
];

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-white min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 flex flex-col items-center justify-start">
        <div className="w-full max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dashboard áttekintés</h1>
          <div className="mb-12 bg-white rounded-2xl shadow-xl p-7">
            <h2 className="font-semibold mb-4 text-gray-800">Statisztika</h2>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
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
          <div className="bg-white rounded-2xl shadow-lg p-7 mb-14">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800 text-lg">Feltöltött dokumentumok</h2>
              <Button asChild variant="default" size="sm" className="gap-2">
                <Link to="/upload">
                  <Upload className="w-4 h-4" />
                  Dokumentum feltöltése
                </Link>
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dokumentum neve</TableHead>
                  <TableHead>Feltöltés ideje</TableHead>
                  <TableHead>Méret</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.length > 0 ? (
                  documents.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-semibold">{doc.name}</TableCell>
                      <TableCell>{doc.uploadedAt}</TableCell>
                      <TableCell>{doc.size}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center">
                      Nincs feltöltött dokumentum.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
