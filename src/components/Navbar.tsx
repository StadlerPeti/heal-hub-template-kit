
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
} from "@/components/ui/drawer";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Drawer nyitása/zárása mobilon
  const [open, setOpen] = useState(false);

  // A navigációs lista, újrahasznosítva desktopon és mobil drawer-ben is
  const navList = (
    <>
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="hover:text-teal-500 transition duration-200"
            onClick={() => setOpen(false)}
          >
            {link.name}
          </a>
        </li>
      ))}
      {isAuthenticated && (
        <li>
          <Link
            to="/upload"
            className={`hover:text-teal-500 transition duration-200${
              location.pathname === "/upload"
                ? " text-teal-600 font-bold underline underline-offset-4"
                : ""
            }`}
            onClick={() => setOpen(false)}
          >
            Upload document
          </Link>
        </li>
      )}
    </>
  );

  // Auth gombokat is újrahasznosítjuk mobil drawer-ben
  const authControls = !isAuthenticated ? (
    <Link
      to="/login"
      className="inline-flex items-center gap-2 bg-transparent border border-teal-500 text-teal-700 px-4 py-2 rounded-full font-semibold hover:bg-teal-50 transition-all duration-200 w-full justify-center"
      onClick={() => setOpen(false)}
    >
      Login
    </Link>
  ) : (
    <button
      onClick={() => {
        logout();
        navigate("/");
        setOpen(false);
      }}
      className="inline-flex items-center gap-2 bg-transparent border border-red-400 text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-100 transition-all duration-200 w-full justify-center"
    >
      Logout
    </button>
  );

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white/90 border-b border-zinc-100 backdrop-blur-lg shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="text-gray-900 font-black text-2xl tracking-tight font-sans select-none"
          >
            Medica<span className="text-teal-500">Pro</span>
          </Link>
        </div>

        {/* Desktop menü */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">{navList}</ul>

        <div className="flex gap-2">
          {/* FELHASZNÁLÓ által TÁMOGATOTT feltételek vezérlése DESKTOPON */}
          {isAuthenticated && (
            <Link
              to="/upload"
              className="hidden md:inline-flex items-center gap-2 ml-2 bg-gradient-to-br from-teal-500 to-teal-400 text-white px-6 py-2 rounded-full shadow-xl font-semibold hover:scale-105 hover:from-teal-600 hover:to-teal-500 transition-all duration-200"
            >
              <span>Upload</span>
            </Link>
          )}
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="hidden md:inline-flex items-center gap-2 bg-transparent border border-teal-500 text-teal-700 px-4 py-2 rounded-full font-semibold hover:bg-teal-50 transition-all duration-200"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="hidden md:inline-flex items-center gap-2 bg-transparent border border-red-400 text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-100 transition-all duration-200"
            >
              Logout
            </button>
          )}

          {/* Hamburger ikon csak mobilon */}
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <button
                type="button"
                className="inline-flex md:hidden items-center justify-center p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <div className="flex items-center space-x-2 justify-between w-full">
                  <Link
                    to="/"
                    className="text-gray-900 font-black text-2xl font-sans select-none"
                    onClick={() => setOpen(false)}
                  >
                    Medica<span className="text-teal-500">Pro</span>
                  </Link>
                  <DrawerClose asChild>
                    <button
                      className="p-2 rounded-full hover:bg-gray-100"
                      aria-label="Close menu"
                      onClick={() => setOpen(false)}
                    >
                      {/* X bezárás */}
                      <span className="text-2xl">&times;</span>
                    </button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <ul className="flex flex-col space-y-4 text-lg my-8">{navList}</ul>
              <div className="mt-2">{authControls}</div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

