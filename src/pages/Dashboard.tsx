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
import { Link, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
    summary:
      "Laborlelet: minden érték a határértéken belül. Nincs eltérés.",
  },
  {
    id: 2,
    name: "Laboreredmény_5632.png",
    uploadedAt: "2024-06-12 10:22",
    size: "800 KB",
    summary: "Kiemelt: glükóz emelkedett, további kontroll javasolt.",
  },
  {
    id: 3,
    name: "TAJ_igazolas.docx",
    uploadedAt: "2024-06-13 09:19",
    size: "420 KB",
    summary: "TAJ kártya igazolás, nincs orvosi tartalom.",
  },
];

// Összegző statiszika a dokumentumokról
function getDocumentsSummary() {
  const total = documents.length;
  const sizeMB = documents
    .map((doc) => {
      if (doc.size.includes("MB")) return parseFloat(doc.size);
      if (doc.size.includes("KB")) return parseFloat(doc.size) / 1024;
      return 0;
    })
    .reduce((a, b) => a + b, 0);
  return {
    total,
    size: sizeMB.toFixed(2) + " MB",
  };
}

const recommendations = [
  {
    type: "vizsgálat",
    label: "Általános vérkép ellenőrzés",
    reason: "Éves rutin javaslat",
  },
  {
    type: "vizsgálat",
    label: "Szemészeti szűrővizsgálat",
    reason: "Elmúlt 40 éves",
  },
  {
    type: "orvos",
    label: "Dr. Nagy Ilona (kardiológus)",
    reason: "Családban örökletes magas vérnyomás",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const docSummary = getDocumentsSummary();

  return (
    <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-white min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 flex flex-col items-center justify-start">
        <div className="w-full max-w-7xl px-4">
          {/* Egészségügyi állapot rövid összefoglaló */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-md border border-teal-200 p-7 flex items-center">
              <span className="text-3xl text-teal-600 font-bold mr-5">🩺</span>
              <div>
                <h2 className="font-semibold text-lg text-gray-800 mb-1">
                  Egészségügyi állapot összefoglaló
                </h2>
                <p className="text-gray-700">
                  Ön jó egészségi állapotban van. Az utóbbi vizsgálatok alapján minden fő laborparaméter rendben van. 
                  Az éves általános szűrést elvégezte. Jelenleg nincsenek aktív kezelést igénylő betegségek.
                </p>
              </div>
            </div>
          </div>

          {/* Ajánlott vizsgálatok és orvosok */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-md border border-blue-200 p-7">
              <h2 className="font-semibold text-lg text-blue-800 mb-3">Ajánlások</h2>
              <ul className="space-y-2">
                {recommendations.map((rec, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4"
                  >
                    <span className={`text-2xl`}>
                      {rec.type === "vizsgálat" ? "🧪" : "👩‍⚕️"}
                    </span>
                    <div>
                      <span className="font-medium">{rec.label}</span>
                      <div className="text-gray-600 text-sm">
                        {rec.reason}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Statisztika grafikon */}
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

          {/* Tile-ok */}
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
          {/* Feltöltött dokumentumok szekció összegzéssel */}
          <div className="bg-white rounded-2xl shadow-lg p-7 mb-14">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800 text-lg">Feltöltött dokumentumok</h2>
              <Button
                asChild
                size="sm"
                className="gap-2 font-semibold bg-gradient-to-r from-teal-500 to-blue-500 text-white border-0 shadow hover:from-teal-600 hover:to-blue-600 transition-colors"
              >
                <Link to="/upload">
                  <Upload className="w-4 h-4" />
                  Dokumentum feltöltése
                </Link>
              </Button>
            </div>
            {/* Összefoglaló adatok */}
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="bg-teal-50 border border-teal-200 rounded-lg px-5 py-3 text-teal-900 font-medium shadow-sm">
                Összes dokumentum: <span className="font-bold">{docSummary.total}</span>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-5 py-3 text-blue-900 font-medium shadow-sm">
                Összes méret: <span className="font-bold">{docSummary.size}</span>
              </div>
            </div>
            {/* Dokumentumok listája új formátumban összegzéssel külön sorban */}
            <div className="w-full">
              {documents.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="group"
                    >
                      <div className="flex items-center py-5 hover:bg-gray-50 transition-colors">
                        <span className="flex-1 flex items-center font-semibold text-lg pl-4">
                          {doc.name}
                        </span>
                        <span className="w-40 text-left text-base text-gray-700">{doc.uploadedAt}</span>
                        <span className="w-24 text-left text-base text-gray-700">{doc.size}</span>
                        <span className="hidden md:block w-60 text-xs text-gray-400 truncate">
                          {doc.summary.slice(0, 32)}...
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-teal-500 text-teal-700 hover:bg-teal-50 ml-4"
                          onClick={() => navigate(`/document/${doc.id}`)}
                        >
                          Részletek
                        </Button>
                      </div>
                      <div className="px-4 pb-4 -mt-2">
                        <span className="block text-gray-500 text-sm">
                          <span className="font-semibold">Összegzés:</span> {doc.summary}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">Nincs feltöltött dokumentum.</div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
