import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Galeri", href: "#gallery" },
  { label: "Testimoni", href: "#testimonial" },
  { label: "Reservasi", href: "#reservation" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-jetblack shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="font-heading text-2xl font-bold text-parchment"
        >
          <img
            src="/logokopiruang3.png"
            alt="Kopi Ruang Logo"
            className="h-12 w-auto object-contain"
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-tan hover:text-palmleaf text-sm font-body font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button Desktop */}
        <button
          onClick={() => handleNavClick("#reservation")}
          className="hidden lg:block btn-primary text-sm"
        >
          Reservasi Meja
        </button>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-parchment text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-jetblack border-t border-darkslategrey px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-tan hover:text-palmleaf text-left font-body font-medium transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#reservation")}
            className="btn-primary text-sm text-center mt-2"
          >
            Reservasi Meja
          </button>
        </div>
      )}
    </nav>
  );
}
