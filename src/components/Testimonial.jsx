import { useState, useEffect } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getTestimonials } from "../services/api";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FiStar
          key={star}
          className={`text-sm ${
            star <= rating
              ? "text-palmleaf fill-palmleaf"
              : "text-darkslategrey"
          }`}
          style={{ fill: star <= rating ? "#C8873A" : "none" }}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ item, isActive }) {
  return (
    <div
      className={`transition-all duration-500 ${
        isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
      }`}
    >
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
        {/* Quote Mark */}
        <p className="font-heading text-6xl text-palmleaf leading-none mb-4">
          "
        </p>

        {/* Review */}
        <p className="font-body text-tan text-lg leading-relaxed mb-8">
          {item.review}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-12 h-12 bg-palmleaf/20 rounded-full flex items-center justify-center">
              <span className="font-heading text-palmleaf text-lg font-bold">
                {item.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-body text-parchment font-semibold">
                {item.name}
              </p>
              <p className="font-body text-darkslategrey text-sm">
                Pelanggan Setia
              </p>
            </div>
          </div>
          <StarRating rating={item.rating} />
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getTestimonials();
        setTestimonials(res.data.data);
      } catch {
        // fallback data jika API gagal
        setTestimonials([
          {
            _id: "1",
            name: "Rizky Aditya",
            rating: 5,
            review:
              "Kopi terenak yang pernah saya coba! Tempatnya nyaman banget buat kerja sambil ngopi.",
          },
          {
            _id: "2",
            name: "Sari Dewi",
            rating: 5,
            review:
              "Signature drink-nya juara! WiFi kenceng, kursinya nyaman, pokoknya recommended.",
          },
          {
            _id: "3",
            name: "Budi Santoso",
            rating: 5,
            review:
              "Suasananya estetik banget, cocok buat foto-foto juga. Kopinya enak dan harganya reasonable.",
          },
          {
            _id: "4",
            name: "Andini Putri",
            rating: 4,
            review:
              "darkslategrey Sugar Laatte-nya addictive! Pasti balik lagi kesini.",
          },
          {
            _id: "5",
            name: "Fajar Nugroho",
            rating: 5,
            review:
              "Best specialty coffee in town. Baristanya juga ramah dan knowledge tentang kopi.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  // Auto slide
  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials]);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonial" className="section-padding bg-parchment">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-palmleaf" />
            <p className="font-body text-palmleaf text-sm font-medium tracking-widest uppercase">
              Testimoni
            </p>
            <div className="w-8 h-px bg-palmleaf" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-jetblack font-bold mb-4">
            Apa Kata
            <span className="block text-palmleaf">Pelanggan Kami</span>
          </h2>
          <p className="font-body text-darkslategrey text-lg max-w-xl mx-auto">
            Lebih dari ribuan pelanggan telah mempercayakan momen terbaik mereka
            bersama Kopi Ruang.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <div className="text-center">
            <p className="font-heading text-7xl font-bold text-jetblack">4.8</p>
            <StarRating rating={5} />
            <p className="font-body text-darkslategrey text-sm mt-2">
              Rating Google Maps
            </p>
          </div>
          <div className="hidden sm:block w-px h-24 bg-tan" />
          <div className="flex flex-col gap-2 w-48">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <span className="font-body text-xs text-darkslategrey w-2">
                  {star}
                </span>
                <div className="flex-1 h-2 bg-tan/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-palmleaf rounded-full"
                    style={{
                      width: star === 5 ? "85%" : star === 4 ? "10%" : "5%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Slider */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-2 border-palmleaf border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="bg-jetblack rounded-3xl p-8 md:p-12">
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {testimonials.slice(0, 3).map((item, index) => (
                <TestimonialCard
                  key={item._id}
                  item={item}
                  isActive={index === current % 3}
                />
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 h-2 bg-palmleaf"
                        : "w-2 h-2 bg-darkslategrey hover:bg-tan"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-darkslategrey text-tan hover:border-palmleaf hover:text-palmleaf transition-colors duration-200 flex items-center justify-center"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-palmleaf text-white hover:bg-darkslategrey transition-colors duration-200 flex items-center justify-center"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
