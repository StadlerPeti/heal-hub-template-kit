
import React, { useState, useEffect } from "react";
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

const publicLinks = [
  { name: "Home", to: "/" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const adminLinks = [
  { name: "Dashboard", to: "/dashboard" },
  { name: "Upload document", to: "/upload" },
];

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  // ÚJ: Az aktuális hash külön kezelése, hogy biztos legyen rerender kattintás után is.
  const [activeHash, setActiveHash] = useState<string>(window.location.hash);

  // Ha böngészőn hash váltás történik, frissítsük le a state-et.
  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Smooth scroll handler hash linkekhez
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
      setActiveHash(href); // Aktív hash is frissül!
    }
    setOpen(false);
  };

  // Scroll to top handler for Home menu
  const handleScrollToTop = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (location.pathname === "/" && !window.location.hash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
      window.history.replaceState(null, "", "/");
      setActiveHash(""); // Üres hash
    }
    // If not on home or there’s hash, let Link handle the navigation as normal
  };

  // Helper to check if a link is active for public (Home/Services/About...)
  const isPublicLinkActive = (link: any) => {
    if (link.to === "/") {
      // Home link: csak akkor aktív, ha a path '/' és nincs hash
      return location.pathname === "/" && !activeHash;
    }
    if (link.to) {
      return location.pathname === link.to;
    } else if (link.href) {
      return (
        location.pathname === "/" &&
        activeHash === link.href // az új state-ből olvasunk!
      );
    }
    return false;
  };

  // Menü logika
  const navList = (
    <>
      {!isAuthenticated
        ? publicLinks.map((link) =>
            link.to ? (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className={`hover:text-teal-500 transition duration-200 block px-3 py-2 rounded-lg${
                    isPublicLinkActive(link)
                      ? " text-teal-600 font-bold underline underline-offset-4"
                      : ""
                  }`}
                  onClick={link.name === "Home"
                    ? handleScrollToTop
                    : () => setOpen(false)
                  }
                >
                  {link.name}
                </Link>
              </li>
            ) : (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`hover:text-teal-500 transition duration-200 block px-3 py-2 rounded-lg${
                    isPublicLinkActive(link)
                      ? " text-teal-600 font-bold underline underline-offset-4"
                      : ""
                  }`}
                  onClick={e => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            )
          )
        : adminLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`hover:text-teal-500 transition duration-200 block px-3 py-2 rounded-lg${
                  location.pathname === link.to
                    ? " text-teal-600 font-bold underline underline-offset-4"
                    : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
    </>
  );

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white/90 border-b border-zinc-100 backdrop-blur-lg shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="text-gray-900 font-black text-2xl tracking-tight font-sans select-none"
            onClick={() => setOpen(false)}
          >
            Medica<span className="text-teal-500">Pro</span>
          </Link>
        </div>

        {/* Desktop menü */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {navList}
        </ul>

        <div className="flex gap-2">
          {/* Menü gombok csak desktopon */}
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

          {/* Hamburger ikon mobilon */}
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
            <DrawerContent
              className="fixed inset-0 right-0 z-[100] bg-white p-0 m-0 flex flex-col w-full max-w-none h-full !rounded-none transition-transform duration-300"
              style={{ padding: 0, margin: 0 }}
            >
              <div className="flex flex-col h-full w-full">
                <DrawerHeader className="flex items-center justify-between px-6 pt-6 pb-4">
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
                      <span className="text-2xl">&times;</span>
                    </button>
                  </DrawerClose>
                </DrawerHeader>
                <ul className="flex flex-col text-lg grow gap-2 px-6 py-2 mt-2 mb-6">
                  {!isAuthenticated
                    ? publicLinks.map((link) =>
                        link.to ? (
                          <li key={link.name}>
                            <Link
                              to={link.to}
                              className={`block w-full py-3 px-4 text-gray-800 rounded-lg hover:bg-gray-100 font-medium transition${
                                isPublicLinkActive(link)
                                  ? " text-teal-600 underline underline-offset-4"
                                  : ""
                              }`}
                              onClick={link.name === "Home"
                                ? handleScrollToTop
                                : () => setOpen(false)
                              }
                            >
                              {link.name}
                            </Link>
                          </li>
                        ) : (
                          <li key={link.name}>
                            <a
                              href={link.href}
                              className={`block w-full py-3 px-4 text-gray-800 rounded-lg hover:bg-gray-100 font-medium transition${
                                isPublicLinkActive(link)
                                  ? " text-teal-600 underline underline-offset-4"
                                  : ""
                              }`}
                              onClick={e => handleSmoothScroll(e, link.href)}
                            >
                              {link.name}
                            </a>
                          </li>
                        )
                      )
                    : adminLinks.map((link) => (
                        <li key={link.name}>
                          <Link
                            to={link.to}
                            className={`block w-full py-3 px-4 text-gray-800 rounded-lg hover:bg-teal-50 font-semibold transition${
                              location.pathname === link.to
                                ? " text-teal-600 underline underline-offset-4"
                                : ""
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                </ul>
                <div className="mt-auto px-6 pb-8 pt-2 border-t border-gray-100">
                  {!isAuthenticated ? (
                    <Link
                      to="/login"
                      className="inline-flex items-center gap-2 bg-transparent border border-teal-500 text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 w-full justify-center transition"
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
                      className="inline-flex items-center gap-2 bg-transparent border border-red-400 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-100 w-full justify-center transition"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

