import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-[#0c0920]/85 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
            : "bg-[#ede8ff]/80 backdrop-blur-xl border-b border-purple-200/30 shadow-lg shadow-purple-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <Link href="/">
          <motion.span
            whileHover={{ scale: 1.03 }}
            className={`font-black text-xl tracking-tight cursor-pointer ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Aditya<span className="text-gradient">.</span>
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <motion.span
                  whileHover={{ y: -1 }}
                  className={`text-sm font-medium transition-colors cursor-pointer relative ${
                    isActive
                      ? isDark ? "text-white" : "text-gray-900"
                      : isDark ? "text-white/50 hover:text-white/80" : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  )}
                </motion.span>
              </Link>
            );
          })}
          <button
            onClick={toggle}
            className={`p-2 rounded-full transition-colors ${isDark ? "hover:bg-white/5 text-white/60 hover:text-white" : "hover:bg-black/5 text-gray-500 hover:text-gray-800"}`}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={16} />
                </motion.div>
              ) : (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggle} className={`p-2 ${isDark ? "text-white/60" : "text-gray-500"}`} aria-label="Toggle theme">
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 ${isDark ? "text-white" : "text-gray-900"}`}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className={`absolute top-full left-0 right-0 backdrop-blur-xl py-6 px-6 flex flex-col gap-4 md:hidden shadow-lg ${
              isDark ? "bg-[#0c0920]/95 border-b border-white/5" : "bg-[#ede8ff]/95 border-b border-purple-200/30"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                <span className={`block text-lg font-medium py-2 border-b cursor-pointer ${
                  isDark ? "border-white/5" : "border-black/5"
                } ${location === link.href ? "text-gradient" : isDark ? "text-white/50" : "text-gray-500"}`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
