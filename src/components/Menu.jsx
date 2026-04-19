import { useState, useEffect } from "react";
import { getMenu } from "../services/api";

const categories = [
  { key: "all", label: "Semua" },
  { key: "espresso", label: "Espresso" },
  { key: "manual-brew", label: "Manual Brew" },
  { key: "signature", label: "Signature" },
  { key: "non-coffee", label: "Non Coffee" },
  { key: "pastry", label: "Pastry" },
];

function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

function MenuCard({ item }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
      {/* Image */}
      <div className="h-52 overflow-hidden relative">
        {item.image && !imgError ? (
          <img
            src={item.image}
            alt={item.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-darkslategrey/20 to-palmleaf/20 flex items-center justify-center">
            <span className="text-5xl">☕</span>
          </div>
        )}

        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {item.isBestSeller && (
            <span className="bg-palmleaf text-white text-xs font-body font-medium px-3 py-1 rounded-full">
              Best Seller
            </span>
          )}
          {!item.isBestSeller && <span />}
          <span className="bg-jetblack/70 text-parchment text-xs font-body px-3 py-1 rounded-full capitalize">
            {item.category.replace("-", " ")}
          </span>
        </div>

        {/* Unavailable Overlay */}
        {!item.isAvailable && (
          <div className="absolute inset-0 bg-jetblack/60 flex items-center justify-center">
            <span className="text-parchment font-body text-sm">
              Tidak Tersedia
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-lg text-jetblack font-semibold leading-tight">
            {item.name}
          </h3>
          <p className="font-body text-palmleaf font-semibold text-sm whitespace-nowrap">
            {formatPrice(item.price)}
          </p>
        </div>
        <p className="font-body text-darkslategrey text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError(null);
        const category = activeCategory === "all" ? null : activeCategory;
        const res = await getMenu(category);
        setMenus(res.data.data);
      } catch (err) {
        setError("Gagal memuat menu. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, [activeCategory]);

  return (
    <section id="menu" className="section-padding bg-jetblack">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-palmleaf" />
            <p className="font-body text-palmleaf text-sm font-medium tracking-widest uppercase">
              Menu Kami
            </p>
            <div className="w-8 h-px bg-palmleaf" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-parchment font-bold mb-4">
            Pilihan untuk Setiap
            <span className="block text-palmleaf">Selera & Mood</span>
          </h2>
          <p className="font-body text-tan text-lg max-w-xl mx-auto">
            Dari jetblack klasik hingga signature drink eksklusif, semua dibuat
            dengan biji kopi lokal pilihan terbaik.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`font-body text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-palmleaf border-palmleaf text-white"
                  : "border-darkslategrey text-tan hover:border-palmleaf hover:text-palmleaf"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-2 border-palmleaf border-t-transparent rounded-full animate-spin" />
            <p className="font-body text-tan mt-4">Memuat menu...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="font-body text-red-400">{error}</p>
            <button
              onClick={() => setActiveCategory(activeCategory)}
              className="btn-outline mt-4 text-sm"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {!loading && !error && menus.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-tan">Tidak ada menu tersedia.</p>
          </div>
        )}

        {!loading && !error && menus.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menus.map((item) => (
              <MenuCard key={item._id} item={item} />
            ))}
          </div>
        )}

        {/* CTA */}
        {!loading && !error && (
          <div className="text-center mt-12">
            <p className="font-body text-tan mb-4">
              Ingin memesan langsung? Kunjungi kami atau hubungi via WhatsApp.
            </p>

            <button
              href="https://wa.me/6281217832603"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Pesan via WhatsApp
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
