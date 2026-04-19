import {
  FiInstagram,
  FiPhone,
  FiMail,
  FiMapPin,
  FiHeart,
} from "react-icons/fi";

const footerLinks = [
  {
    title: "Navigasi",
    links: [
      { label: "Beranda", href: "#hero" },
      { label: "Tentang", href: "#about" },
      { label: "Menu", href: "#menu" },
      { label: "Galeri", href: "#gallery" },
      { label: "Testimoni", href: "#testimonial" },
      { label: "Reservasi", href: "#reservation" },
      { label: "Kontak", href: "#contact" },
    ],
  },
  {
    title: "Menu Unggulan",
    links: [
      { label: "Ekspresso", href: "#menu" },
      { label: "Kopi Ruang Signature", href: "#menu" },
      { label: "darkslategrey Sugar tan", href: "#menu" },
      { label: "V60 Single Origin", href: "#menu" },
      { label: "Pour Over Flores", href: "#menu" },
      { label: "Homemade Pastry", href: "#menu" },
    ],
  },
  {
    title: "Informasi",
    links: [
      { label: "Tentang Kami", href: "#about" },
      { label: "Karir", href: "#contact" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
      { label: "FAQ", href: "#contact" },
    ],
  },
];

const socials = [
  {
    icon: FiInstagram,
    href: "https://instagram.com/kopiruang",
    label: "Instagram",
  },
  {
    icon: FiPhone,
    href: "https://wa.me/6281217832603",
    label: "WhatsApp",
  },
  {
    icon: FiMail,
    href: "mailto:hello@kopiruang.com",
    label: "Email",
  },
];

export default function Footer() {
  const handleNavClick = (href) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jetblack">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#hero")}
              className="block mb-4"
            >
              <img
                src="/logokopiruang3.png"
                alt="Kopi Ruang Logo"
                className="h-28 w-auto object-contain opacity-90"
              />
            </button>

            <p className="font-body text-tan text-sm leading-relaxed mb-6 max-w-xs">
              Specialty coffee café dengan fokus pada kualitas rasa dan suasana
              nyaman untuk kerja & hangout di Yogyakarta.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3 mb-8">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 bg-white/5 hover:bg-palmleaf border border-white/10 hover:border-palmleaf rounded-xl flex items-center justify-center text-tan hover:text-white transition-all duration-200"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <FiMapPin className="text-palmleaf mt-0.5 flex-shrink-0" />
                <span className="font-body text-tan text-sm group-hover:text-palmleaf transition-colors duration-200">
                  Jl. Kopi Ruang No. 12, Yogyakarta
                </span>
              </a>
              <a
                href="https://wa.me/6281217832603"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <FiPhone className="text-palmleaf flex-shrink-0" />
                <span className="font-body text-tan text-sm group-hover:text-palmleaf transition-colors duration-200">
                  +62 812-1783-2603
                </span>
              </a>
              <a
                href="mailto:hello@kopiruang.com"
                className="flex items-center gap-3 group"
              >
                <FiMail className="text-palmleaf flex-shrink-0" />
                <span className="font-body text-tan text-sm group-hover:text-palmleaf transition-colors duration-200">
                  hello@kopiruang.com
                </span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-body font-semibold text-parchment text-sm uppercase tracking-widest mb-5">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-body text-tan text-sm hover:text-palmleaf transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-darkslategrey text-sm text-center sm:text-left">
          © {currentYear} Kopi Ruang. All rights reserved.
        </p>
        <p className="font-body text-darkslategrey text-sm flex items-center gap-1">
          Made with <FiHeart className="text-palmleaf" /> in Yogyakarta
        </p>
      </div>
    </footer>
  );
}
