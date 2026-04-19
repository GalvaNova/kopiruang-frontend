import { useState } from "react";
import { FiX, FiZoomIn } from "react-icons/fi";

const galleryItems = [
  {
    id: 1,
    title: "Ekspresso Bar",
    category: "Interior",
    image: "/images/gallery/espressobar.png",
    emoji: "☕",
    bg: "from-darkslategrey/40 to-jetblack/60",
    size: "large",
  },
  {
    id: 2,
    title: "Pour Over Station",
    category: "Brewing",
    image: "/images/gallery/pouroverst.png",
    emoji: "⚗️",
    bg: "from-palmleaf/30 to-darkslategrey/50",
    size: "small",
  },
  {
    id: 3,
    title: "Cozy Corner",
    category: "Interior",
    image: "/images/gallery/cozy.png",
    emoji: "🪑",
    bg: "from-jetblack/40 to-darkslategrey/60",
    size: "small",
  },
  {
    id: 4,
    title: "Signature tan Art",
    category: "Menu",
    image: "/images/gallery/tanart.png",
    emoji: "🎨",
    bg: "from-palmleaf/40 to-jetblack/50",
    size: "small",
  },
  {
    id: 5,
    title: "Working Space",
    category: "Interior",
    image: "/images/gallery/workingspace.png",
    emoji: "💻",
    bg: "from-darkslategrey/30 to-palmleaf/40",
    size: "large",
  },
  {
    id: 6,
    title: "Homemade Pastry",
    category: "Menu",
    image: "/images/gallery/homemade.png",
    emoji: "🥐",
    bg: "from-palmleaf/50 to-darkslategrey/40",
    size: "small",
  },
  {
    id: 7,
    title: "Coffee Beans",
    category: "Brewing",
    image: "/images/gallery/coffeebean.png",
    emoji: "🫘",
    bg: "from-jetblack/50 to-palmleaf/30",
    size: "small",
  },
  {
    id: 8,
    title: "Outdoor Seating",
    image: "/images/gallery/outdoor.png",
    category: "Interior",
    emoji: "🌿",
    bg: "from-darkslategrey/40 to-jetblack/50",
    size: "small",
  },
];

const filters = ["Semua", "Interior", "Menu", "Brewing"];

function GalleryCard({ item, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => onClick(item)}
      className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
        item.size === "large" ? "row-span-2" : ""
      }`}
    >
      {/* Image atau Fallback */}
      {item.image && !imgError ? (
        <img
          src={item.image}
          alt={item.title}
          onError={() => setImgError(true)}
          className="w-full h-full min-h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div
          className={`w-full h-full min-h-48 bg-gradient-to-br ${item.bg} flex items-center justify-center`}
        >
          <span className="text-6xl">{item.emoji}</span>
        </div>
      )}

      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-jetblack/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
        <FiZoomIn className="text-white text-2xl" />
        <p className="font-heading text-white text-lg font-semibold">
          {item.title}
        </p>
        <span className="font-body text-palmleaf text-sm">{item.category}</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeFilter === "Semua"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeFilter);

  return (
    <section id="gallery" className="section-padding bg-jetblack">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-palmleaf" />
            <p className="font-body text-palmleaf text-sm font-medium tracking-widest uppercase">
              Galeri
            </p>
            <div className="w-8 h-px bg-palmleaf" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-parchment font-bold mb-4">
            Intip Suasana
            <span className="block text-palmleaf">Kopi Ruang</span>
          </h2>
          <p className="font-body text-tan text-lg max-w-xl mx-auto">
            Setiap sudut dirancang untuk memberikan kenyamanan dan estetika yang
            mendukung aktivitas kamu.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-body text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-palmleaf border-palmleaf text-white"
                  : "border-darkslategrey text-tan hover:border-palmleaf hover:text-palmleaf"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-48 gap-4">
          {filtered.map((item) => (
            <GalleryCard key={item.id} item={item} onClick={setSelected} />
          ))}
        </div>

        {/* Note */}
        <p className="text-center font-body text-darkslategrey text-sm mt-8">
          Ikuti perjalanan kami di Instagram{" "}
          <button
            href="https://instagram.com/kopiruang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-palmleaf hover:underline"
          >
            @kopiruang
          </button>
        </p>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-jetblack/95 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-lg w-full bg-darkslategrey/20 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-jetblack/80 rounded-full flex items-center justify-center text-parchment hover:bg-palmleaf transition-colors duration-200"
            >
              <FiX />
            </button>

            {/* Image */}
            <div className="h-72 overflow-hidden">
              {selected.image ? (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`h-full bg-gradient-to-br ${selected.bg} flex items-center justify-center`}
                >
                  <span className="text-8xl">{selected.emoji}</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-6">
              <p className="font-body text-palmleaf text-sm uppercase tracking-widest mb-1">
                {selected.category}
              </p>
              <h3 className="font-heading text-2xl text-parchment font-semibold">
                {selected.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
