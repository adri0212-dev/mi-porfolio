"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 flex items-center justify-between transition-all duration-300 bg-plum ${
        scrolled ? "py-3 shadow-md" : "py-5"
      }`}
    >
      <a href="#" className="font-display text-xl font-bold text-cream">
        Adriana<span className="text-coral">.</span>
      </a>

      <div className="hidden md:flex items-center gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-cream/80 font-semibold text-sm px-4 py-2 rounded-full border-2 border-transparent hover:border-violet hover:bg-violet/20 hover:text-cream transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          className="bg-coral text-cream px-5 py-2 rounded-full font-semibold text-sm hover:bg-violet transition-colors ml-2"
        >     
          Contactame
        </a>
      </div>
    </nav>
  );
}