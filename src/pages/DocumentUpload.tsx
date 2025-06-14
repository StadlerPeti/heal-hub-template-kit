
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const DocumentUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFile(e.target.files[0]);
      setSuccess(false);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      setSuccess(true);
    }
  };

  return (
    <div className="bg-white min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 flex flex-col items-center justify-center bg-gradient-to-tr from-teal-50 to-blue-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mt-4 mb-8">
          <h1 className="text-2xl font-black text-gray-900 mb-6">Upload Document</h1>
          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label
                htmlFor="document"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Choose a file
              </label>
              <input
                ref={inputRef}
                type="file"
                id="document"
                className="block w-full text-base text-gray-600 border border-zinc-200 rounded-lg shadow-sm focus:outline-none focus:border-teal-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition"
                onChange={handleFileChange}
              />
              {selectedFile && (
                <div className="mt-3 text-sm text-gray-600">
                  Selected file: <span className="font-medium">{selectedFile.name}</span>
                </div>
              )}
            </div>
            <Button
              type="submit"
              variant="default"
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-black text-base py-3 rounded-xl transition"
              disabled={!selectedFile}
            >
              Upload
            </Button>
            {success && (
              <div className="text-teal-700 text-sm text-center font-bold mt-3 animate-fade-in">
                Document uploaded!
              </div>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentUpload;
