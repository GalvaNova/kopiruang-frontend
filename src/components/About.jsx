import { FiCheck } from "react-icons/fi";

const values = [
  {
    title: "Biji Kopi Lokal Premium",
    description:
      "Kami bermitra langsung dengan petani kopi terbaik dari Toraja, Gayo, dan Flores untuk menghadirkan cita rasa autentik.",
  },
  {
    title: "Tempat Nyaman & WiFi Cepat",
    description:
      "Dirancang khusus untuk remote worker dan mahasiswa yang butuh ruang produktif dengan suasana cozy.",
  },
  {
    title: "Desain Minimal & Estetik",
    description:
      "Setiap sudut Kopi Ruang dirancang dengan detail estetika yang tinggi, nyaman untuk bekerja maupun bersantai.",
  },
  {
    title: "Barista Berpengalaman",
    description:
      "Tim barista kami terlatih secara profesional untuk menghadirkan secangkir kopi terbaik di setiap penyajian.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-parchment">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-palmleaf" />
          <p className="font-body text-palmleaf text-sm font-medium tracking-widest uppercase">
            Tentang Kami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text Content */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-jetblack font-bold leading-tight mb-6">
              Lebih dari Sekadar
              <span className="block text-palmleaf">Secangkir Kopi</span>
            </h2>

            <p className="font-body text-darkslategrey text-lg leading-relaxed mb-6">
              Kopi Ruang lahir dari kecintaan mendalam terhadap kopi lokal
              Indonesia. Kami percaya bahwa kopi terbaik bukan hanya soal rasa,
              tetapi juga tentang pengalaman — dari biji hingga cangkir, dari
              petani hingga meja kamu.
            </p>

            <p className="font-body text-darkslategrey leading-relaxed mb-10">
              Berlokasi di Yogyakarta, kami hadir sebagai ruang ketiga yang
              nyaman — bukan rumah, bukan kantor — tempat ide-ide besar lahir
              ditemani aroma kopi yang menenangkan.
            </p>

            {/* Values List */}
            <ul className="flex flex-col gap-4">
              {values.map((val) => (
                <li key={val.title} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 bg-palmleaf rounded-full flex items-center justify-center">
                    <FiCheck className="text-white text-xs" />
                  </span>
                  <div>
                    <p className="font-body font-semibold text-jetblack">
                      {val.title}
                    </p>
                    <p className="font-body text-darkslategrey text-sm mt-1">
                      {val.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Visual Card */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-jetblack rounded-3xl p-10 text-center relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-palmleaf/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-darkslategrey/20 rounded-full" />

              <p className="font-heading text-7xl font-bold text-palmleaf mb-2">
                5+
              </p>
              <p className="font-body text-tan text-lg mb-8">
                Tahun Pengalaman
              </p>

              <div className="border-t border-darkslategrey/40 pt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="font-heading text-3xl font-bold text-parchment">
                    50+
                  </p>
                  <p className="font-body text-tan text-sm mt-1">Varian Menu</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-parchment">
                    15+
                  </p>
                  <p className="font-body text-tan text-sm mt-1">Origin Kopi</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-parchment">
                    200+
                  </p>
                  <p className="font-body text-tan text-sm mt-1">
                    Customer/Hari
                  </p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-parchment">
                    4.8★
                  </p>
                  <p className="font-body text-tan text-sm mt-1">
                    Google Rating
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-11 -left-5 bg-palmleaf text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="font-heading text-2xl font-bold">100%</p>
              <p className="font-body text-sm">Kopi Lokal Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
