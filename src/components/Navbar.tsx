import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Atom } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/technology", label: "Technology" },
  { to: "/facility", label: "Facility" },
  { to: "/traceability", label: "Traceability" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 focus-ring">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="text-ion"
          >
            <Atom className="w-6 h-6" strokeWidth={1.75} />
          </motion.span>
          <span className="font-display text-lg tracking-wide">GammaGuard</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors focus-ring ${
                    isActive ? "text-ion" : "text-muted hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/verify/GG-2026-004471"
          className="rounded-full bg-ion/10 border border-ion/40 px-4 py-2 text-sm font-medium text-ion hover:bg-ion/20 transition-colors focus-ring"
        >
          Verify a Product
        </Link>
      </nav>
    </header>
  );
}
