import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiInstagram,
  FiSend,
  FiCheck,
  FiClock,
} from "react-icons/fi";
import { sendContact } from "../services/api";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactInfos = [
  {
    icon: FiMapPin,
    title: "Lokasi",
    lines: ["Jl. Kopi Ruang No. 12", "Yogyakarta, Indonesia"],
    link: "https://maps.google.com",
    linkLabel: "Lihat di Google Maps",
  },
  {
    icon: FiPhone,
    title: "Telepon & WhatsApp",
    lines: ["+62 812-1783-2603"],
    link: "https://wa.me/6281217832603",
    linkLabel: "Chat WhatsApp",
  },
  {
    icon: FiMail,
    title: "Email",
    lines: ["hello@kopiruang.com"],
    link: "mailto:hello@kopiruang.com",
    linkLabel: "Kirim Email",
  },
  {
    icon: FiClock,
    title: "Jam Buka",
    lines: [
      "Sen–Jum: 08.00–22.00",
      "Sabtu: 07.00–23.00",
      "Minggu: 07.00–21.00",
    ],
    link: null,
    linkLabel: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await sendContact(form);
      setSuccess(true);
      setForm(initialForm);
    } catch {
      setError("Gagal mengirim pesan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-parchment">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-palmleaf" />
            <p className="font-body text-palmleaf text-sm font-medium tracking-widest uppercase">
              Kontak
            </p>
            <div className="w-8 h-px bg-palmleaf" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-jetblack font-bold mb-4">
            Hubungi
            <span className="block text-palmleaf">Kopi Ruang</span>
          </h2>
          <p className="font-body text-darkslategrey text-lg max-w-xl mx-auto">
            Ada pertanyaan, saran, atau ingin berkolaborasi? Kami selalu senang
            mendengar dari kamu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfos.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-tan/20"
                >
                  <div className="w-10 h-10 bg-palmleaf/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-palmleaf" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-jetblack text-sm mb-1">
                      {info.title}
                    </p>
                    {info.lines.map((line) => (
                      <p
                        key={line}
                        className="font-body text-darkslategrey text-sm"
                      >
                        {line}
                      </p>
                    ))}
                    {info.link && (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-palmleaf text-sm hover:underline mt-1 inline-block"
                      >
                        {info.linkLabel} →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Social Media */}
            <div className="bg-jetblack rounded-2xl p-6">
              <p className="font-body text-tan text-sm mb-4">
                Ikuti kami di sosial media
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/kopiruang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-palmleaf rounded-xl flex items-center justify-center text-tan hover:text-white transition-all duration-200"
                >
                  <FiInstagram />
                </a>
                <a
                  href="https://wa.me/6281217832603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-palmleaf rounded-xl flex items-center justify-center text-tan hover:text-white transition-all duration-200"
                >
                  <FiPhone />
                </a>
                <a
                  href="mailto:hello@kopiruang.com"
                  className="w-10 h-10 bg-white/10 hover:bg-palmleaf rounded-xl flex items-center justify-center text-tan hover:text-white transition-all duration-200"
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            {success ? (
              <div className="bg-jetblack rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center gap-6">
                <div className="w-20 h-20 bg-palmleaf/20 rounded-full flex items-center justify-center">
                  <FiCheck className="text-palmleaf text-4xl" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-parchment font-bold mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="font-body text-tan">
                    Terima kasih telah menghubungi kami. Kami akan membalas
                    dalam 1x24 jam.
                  </p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-outline text-sm"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-jetblack rounded-3xl p-8 md:p-10 flex flex-col gap-5"
              >
                {/* Nama & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-tan text-sm mb-2 block">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-parchment text-sm placeholder-darkslategrey focus:outline-none focus:border-palmleaf transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-body text-tan text-sm mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-parchment text-sm placeholder-darkslategrey focus:outline-none focus:border-palmleaf transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Subjek */}
                <div>
                  <label className="font-body text-tan text-sm mb-2 block">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Pertanyaan tentang menu, kolaborasi, dll."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-parchment text-sm placeholder-darkslategrey focus:outline-none focus:border-palmleaf transition-colors duration-200"
                  />
                </div>

                {/* Pesan */}
                <div>
                  <label className="font-body text-tan text-sm mb-2 block">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tuliskan pesan kamu di sini..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-parchment text-sm placeholder-darkslategrey focus:outline-none focus:border-palmleaf transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="font-body text-red-400 text-sm">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Maps Placeholder */}
        <div className="mt-12 bg-jetblack/10 border border-tan/20 rounded-3xl overflow-hidden h-64 flex items-center justify-center">
          <div className="text-center">
            <FiMapPin className="text-palmleaf text-3xl mx-auto mb-3" />
            <p className="font-body text-darkslategrey">
              Jl. Kopi Ruang No. 12, Yogyakarta
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-palmleaf text-sm hover:underline mt-2 inline-block"
            >
              Buka di Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
