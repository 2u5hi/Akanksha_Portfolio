"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f5]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          style={{ fontFamily: "var(--font-playfair)" }}
          className="text-[#2c3e50] font-semibold text-lg tracking-wide"
        >
          AW
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-[#7a7a7a] hover:text-[#c97b6b] transition-colors text-sm tracking-widest uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/akanksha_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-sm tracking-widest uppercase px-5 py-2 border border-[#c97b6b] text-[#c97b6b] hover:bg-[#c97b6b] hover:text-white rounded-full transition-all duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#2c3e50] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2c3e50] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2c3e50] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#faf8f5] border-t border-[#e8c4b8]/40 px-6 pb-6 pt-4 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-[#2c3e50] text-sm tracking-widest uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/akanksha_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-sm tracking-widest uppercase text-[#c97b6b]"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
