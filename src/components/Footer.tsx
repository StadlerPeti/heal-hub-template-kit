
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { LogIn, LogOut, Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const publicLinks = [
  { name: "Főoldal", to: "/" },
  { name: "Szolgáltatások", href: "#services" },
  { name: "Rólunk", href: "#about" },
  { name: "Kapcsolat", href: "#contact" },
];

const adminLinks = [
  { name: "Dashboard", to: "/dashboard" },
  { name: "Dokumentum feltöltés", to: "/upload" },
];

const policyLinks = [
  { name: "Adatvédelem", href: "#" },
  { name: "ÁSZF", href: "#" },
  { name: "Impresszum", href: "#" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook size={20} />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram size={20} />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin size={20} />,
  },
];

const Footer = () => {
  const { isAuthenticated } = useAuth();
  const menuLinks = isAuthenticated ? adminLinks : publicLinks;

  return (
    <footer className="bg-zinc-900 py-16 shadow-xl border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* LOGO + MINI LEÍRÁS */}
          <div className="flex flex-col gap-3">
            <span className="text-white font-black text-3xl tracking-tight font-sans flex items-center gap-2">
              Medi<span className="text-teal-400">Pro</span>
            </span>
            <span className="block text-zinc-400 font-medium">
              Magyarország vezető magán egészségügyi központja.<br />Szakértelem, bizalom, innováció.
            </span>
            <div className="flex gap-4 mt-3">
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-teal-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* MENÜPONTOK */}
          <div className="flex flex-col sm:flex-row gap-10 justify-end">
            <div>
              <h3 className="text-zinc-200 text-lg font-semibold mb-3">Menü</h3>
              <nav className="flex flex-col gap-2">
                {menuLinks.map((link) =>
                  link.to ? (
                    <Link
                      key={link.name}
                      to={link.to}
                      className="text-zinc-400 hover:text-teal-400 transition font-medium"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-zinc-400 hover:text-teal-400 transition font-medium"
                    >
                      {link.name}
                    </a>
                  )
                )}
              </nav>
            </div>
            <div>
              <h3 className="text-zinc-200 text-lg font-semibold mb-3">Jogi</h3>
              <nav className="flex flex-col gap-2">
                {policyLinks.map((policy) => (
                  <a
                    key={policy.name}
                    href={policy.href}
                    className="text-zinc-400 hover:text-teal-400 transition font-medium"
                  >
                    {policy.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* ALSÓ SOR: Kapcsolat, copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-800 pt-8 gap-6">
          <div className="flex items-center gap-3 text-zinc-400">
            <Mail size={18} className="inline mr-2" /> Kapcsolat:{" "}
            <a href="mailto:info@medicapro.hu" className="hover:text-teal-400">info@medicapro.hu</a>
          </div>
          <div className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} MediPro Clinic. Minden jog fenntartva.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
