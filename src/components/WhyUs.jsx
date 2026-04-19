import {
  FiWifi,
  FiStar,
  FiHeart,
  FiCoffee,
  FiUsers,
  FiAward,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiCoffee,
    title: "Biji Kopi Lokal Premium",
    description:
      "Kami bermitra langsung dengan petani kopi pilihan dari Toraja, Gayo, dan Flores. Setiap biji dipilih dengan cermat untuk menghadirkan cita rasa terbaik di cangkir kamu.",
    highlight: "15+ Origin",
  },
  {
    icon: FiWifi,
    title: "Ruang Kerja Nyaman",
    description:
      "WiFi super cepat, colokan listrik di setiap meja, kursi ergonomis, dan suasana tenang yang mendukung produktivitas kamu seharian penuh.",
    highlight: "Free WiFi",
  },
  {
    icon: FiStar,
    title: "Rating 4.8★ Google",
    description:
      "Kepercayaan lebih dari ribuan pelanggan setia kami tercermin dalam rating tertinggi di Yogyakarta. Kualitas adalah janji kami kepada setiap tamu.",
    highlight: "4.8★ Rating",
  },
  {
    icon: FiHeart,
    title: "Dibuat dengan Passion",
    description:
      "Setiap cangkir kopi adalah karya seni. Barista kami menuangkan dedikasi penuh dalam setiap proses, dari grinding hingga penyajian yang sempurna.",
    highlight: "Handcrafted",
  },
  {
    icon: FiUsers,
    title: "Komunitas yang Hangat",
    description:
      "Kopi Ruang bukan sekadar kafe. Kami adalah rumah bagi komunitas mahasiswa, remote worker, dan coffee enthusiast yang saling menginspirasi.",
    highlight: "200+ / Hari",
  },
  {
    icon: FiAward,
    title: "Desain Minimal & Estetik",
    description:
      "Interior yang dirancang dengan cermat menciptakan atmosfer cozy yang sempurna untuk kerja, meeting santai, atau sekadar me-time dengan secangkir kopi.",
    highlight: "Aesthetic",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-parchment">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-palmleaf" />
            <p className="font-body text-palmleaf text-sm font-medium tracking-widest uppercase">
              Mengapa Kopi Ruang
            </p>
            <div className="w-8 h-px bg-palmleaf" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-jetblack font-bold mb-4">
            Pengalaman Kopi yang
            <span className="block text-palmleaf">Tak Terlupakan</span>
          </h2>
          <p className="font-body text-darkslategrey text-lg max-w-xl mx-auto leading-relaxed">
            Kami hadir bukan hanya untuk menyajikan kopi, tetapi untuk
            menciptakan momen berharga dalam setiap kunjungan kamu.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-tan/20"
              >
                {/* Icon & Highlight */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-palmleaf/10 rounded-xl flex items-center justify-center group-hover:bg-palmleaf group-hover:text-white transition-all duration-300">
                    <Icon className="text-palmleaf text-xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-body text-xs text-palmleaf border border-palmleaf/30 bg-palmleaf/5 px-3 py-1 rounded-full font-medium">
                    {reason.highlight}
                  </span>
                </div>

                {/* Text */}
                <h3 className="font-heading text-xl text-jetblack font-semibold mb-3">
                  {reason.title}
                </h3>
                <p className="font-body text-darkslategrey text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-jetblack rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading text-3xl md:text-4xl text-parchment font-bold mb-3">
              Siap Merasakan
              <span className="text-palmleaf"> Perbedaannya?</span>
            </h3>
            <p className="font-body text-tan text-lg">
              Kunjungi kami hari ini dan nikmati pengalaman kopi terbaik di
              Yogyakarta.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <button
              href="https://wa.me/6281217832603"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Hubungi Kami
            </button>

            <button
              onClick={() => {
                const el = document.querySelector("#reservation");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline text-center"
            >
              Reservasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
