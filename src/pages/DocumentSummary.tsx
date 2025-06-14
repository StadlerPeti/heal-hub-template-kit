
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Ugyanaz a mock adat, mint Dashboardban (élesben ezt API-ból/Supabase-ből kellene lekérni)
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

const DocumentSummary = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const doc = documents.find((d) => d.id === Number(id));

  if (!doc) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="bg-white border border-red-200 p-7 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold mb-2 text-red-600">Dokumentum nem található</h2>
            <Button onClick={() => navigate("/dashboard")} className="mt-4">
              Vissza a dashboardra
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-50 via-blue-50 to-white">
      <Navbar />
      {/* Térköz (pl. mt-16 = 4rem margó) a felső box előtt */}
      <main className="flex-grow flex items-center justify-center mt-16">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg border p-8 mx-4">
          <h1 className="text-2xl font-bold text-teal-700 mb-4 flex items-center gap-2">
            📄 Dokumentum összegzés
          </h1>
          <div className="mb-3">
            <div className="font-bold text-gray-700">{doc.name}</div>
            <div className="text-gray-500 text-sm">Feltöltve: {doc.uploadedAt}</div>
            <div className="text-gray-500 text-sm">Méret: {doc.size}</div>
          </div>
          <div className="mb-5">
            <div className="font-semibold mb-2 text-gray-800">Összegzés</div>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-4">
              <span className="text-gray-700">{doc.summary}</span>
            </div>
          </div>
          <Button onClick={() => navigate("/dashboard")} variant="secondary">
            Vissza a dashboardra
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentSummary;
