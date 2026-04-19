import { FiArrowRight, FiMapPin } from "react-icons/fi";

export default function Hero() {
  const handleClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-jetblack"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso via-darkslategrey/80 to-espresso/90 z-10" />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4B896 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-28 pb-12">
        {/* ROW 1 — Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Column Kiri — Headline, Subtext, CTA */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            {/* Headline */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-parchment font-bold leading-tight mb-6">
              Temukan Rasa
              <span className="block text-palmleaf">Terbaik Kopi</span>
              Lokal Indonesia
            </h1>

            {/* Subtext */}
            <p className="font-body text-tan text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Kopi Ruang menghadirkan pengalaman specialty coffee dari biji kopi
              lokal pilihan, dalam suasana nyaman yang dirancang untuk kerja dan
              hangout.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={() => handleClick("#menu")}
                className="btn-primary flex items-center gap-2 text-base px-8 py-4"
              >
                Lihat Menu Kami
                <FiArrowRight />
              </button>
              <button
                onClick={() => handleClick("#reservation")}
                className="btn-outline flex items-center gap-2 text-base px-8 py-4"
              >
                Reservasi Meja
              </button>
            </div>
          </div>

          {/* Column Kanan — Logo & Badge */}
          <div className="flex flex-col items-center justify-center gap-8 order-1 lg:order-2">
            {/* Logo */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-palmleaf/10 rounded-full blur-3xl scale-150" />
              <img
                src="/logokopiruang4.png"
                alt="Kopi Ruang Logo"
                className="relative h-56 md:h-72 lg:h-80 w-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-palmleaf/20 border border-palmleaf/40 text-palmleaf px-5 py-2.5 rounded-full text-sm font-body">
              <span className="w-2 h-2 bg-palmleaf rounded-full animate-pulse" />
              Specialty Coffee · Yogyakarta
            </div>
          </div>
        </div>

        {/* ROW 2 — Stats & Location */}
        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-palmleaf">
                200+
              </p>
              <p className="font-body text-tan text-sm mt-1">Customer / Hari</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-darkslategrey" />
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-palmleaf">
                4.8★
              </p>
              <p className="font-body text-tan text-sm mt-1">Rating Google</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-darkslategrey" />
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-palmleaf">
                100%
              </p>
              <p className="font-body text-tan text-sm mt-1">Kopi Lokal</p>
            </div>
          </div>

          {/* Location Badge */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-full">
            <FiMapPin className="text-palmleaf flex-shrink-0" />
            <span className="font-body text-tan text-sm">
              Yogyakarta, Indonesia
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <p className="text-tan text-xs font-body"></p>
        <div className="w-px h-12 bg-gradient-to-b from-latte to-transparent animate-pulse" />
      </div>
    </section>
  );
}
