import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiUsers,
  FiUser,
  FiPhone,
  FiMail,
  FiMessageSquare,
  FiCheck,
} from "react-icons/fi";
import { createReservation } from "../services/api";

const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  guests: 1,
  note: "",
};

export default function Reservation() {
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
      await createReservation(form);
      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      setError(
        "Gagal membuat reservasi. Silakan coba lagi atau hubungi kami via WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  // Get today's date for min date input
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reservation" className="section-padding bg-jetblack">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-palmleaf" />
            <p className="font-body text-palmleaf text-sm font-medium tracking-widest uppercase">
              Reservasi
            </p>
            <div className="w-8 h-px bg-palmleaf" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-parchment font-bold mb-4">
            Pesan Meja
            <span className="block text-palmleaf">Sekarang</span>
          </h2>
          <p className="font-body text-tan text-lg max-w-xl mx-auto">
            Pastikan tempat duduk terbaik untuk kamu dan teman-teman. Reservasi
            mudah, cepat, dan gratis!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Jam Operasional */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="text-palmleaf text-xl" />
                <h3 className="font-heading text-parchment text-xl font-semibold">
                  Jam Operasional
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  { day: "Senin — Jumat", time: "08.00 — 22.00" },
                  { day: "Sabtu", time: "07.00 — 23.00" },
                  { day: "Minggu", time: "07.00 — 21.00" },
                ].map((item) => (
                  <li
                    key={item.day}
                    className="flex items-center justify-between"
                  >
                    <span className="font-body text-tan text-sm">
                      {item.day}
                    </span>
                    <span className="font-body text-parchment text-sm font-medium">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Reservasi */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FiCalendar className="text-palmleaf text-xl" />
                <h3 className="font-heading text-parchment text-xl font-semibold">
                  Info Reservasi
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Reservasi dibuka H-7 hingga H-1",
                  "Maksimal 20 orang per reservasi",
                  "Konfirmasi via WhatsApp dalam 1x24 jam",
                  "Pembatalan maksimal H-1 sebelum jadwal",
                ].map((info) => (
                  <li key={info} className="flex items-start gap-2">
                    <span className="mt-1 w-4 h-4 bg-palmleaf/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiCheck className="text-palmleaf text-xs" />
                    </span>
                    <span className="font-body text-tan text-sm">{info}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Alternative */}
            <div className="bg-palmleaf/10 border border-palmleaf/30 rounded-2xl p-6">
              <p className="font-body text-tan text-sm mb-3">
                Lebih mudah via WhatsApp?
              </p>
              <button
                href="https://wa.me/6281217832603?text=Halo%20Kopi%20Ruang%2C%20saya%20ingin%20reservasi%20meja"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm text-center block"
              >
                Chat WhatsApp Sekarang
              </button>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            {success ? (
              // Success State
              <div className="bg-white/5 border border-palmleaf/30 rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center gap-6">
                <div className="w-20 h-20 bg-palmleaf/20 rounded-full flex items-center justify-center">
                  <FiCheck className="text-palmleaf text-4xl" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-parchment font-bold mb-2">
                    Reservasi Berhasil!
                  </h3>
                  <p className="font-body text-tan">
                    Terima kasih! Kami akan mengkonfirmasi reservasi kamu via
                    WhatsApp dalam 1x24 jam.
                  </p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-outline text-sm"
                >
                  Buat Reservasi Lain
                </button>
              </div>
            ) : (
              // Form
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col gap-5"
              >
                {/* Row 1 — Nama & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-tan text-sm mb-2 flex items-center gap-2">
                      <FiUser className="text-palmleaf" /> Nama Lengkap
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
                    <label className="font-body text-tan text-sm mb-2 flex items-center gap-2">
                      <FiPhone className="text-palmleaf" /> Nomor WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="081234567890"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-parchment text-sm placeholder-darkslategrey focus:outline-none focus:border-palmleaf transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Row 2 — Email */}
                <div>
                  <label className="font-body text-tan text-sm mb-2 flex items-center gap-2">
                    <FiMail className="text-palmleaf" /> Email (Opsional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-parchment text-sm placeholder-darkslategrey focus:outline-none focus:border-palmleaf transition-colors duration-200"
                  />
                </div>

                {/* Row 3 — Tanggal & Jam */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-tan text-sm mb-2 flex items-center gap-2">
                      <FiCalendar className="text-palmleaf" /> Tanggal
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      min={today}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-parchment text-sm focus:outline-none focus:border-palmleaf transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-body text-tan text-sm mb-2 flex items-center gap-2">
                      <FiClock className="text-palmleaf" /> Jam
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-jetblack border border-white/10 rounded-xl px-4 py-3 font-body text-parchment text-sm focus:outline-none focus:border-palmleaf transition-colors duration-200"
                    >
                      <option value="" disabled>
                        Pilih jam
                      </option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t} WIB
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4 — Jumlah Tamu */}
                <div>
                  <label className="font-body text-tan text-sm mb-2 flex items-center gap-2">
                    <FiUsers className="text-palmleaf" /> Jumlah Tamu
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setForm((p) => ({
                          ...p,
                          guests: Math.max(1, p.guests - 1),
                        }))
                      }
                      className="w-10 h-10 rounded-full border border-white/10 text-parchment hover:border-palmleaf hover:text-palmleaf transition-colors duration-200 flex items-center justify-center font-body text-lg"
                    >
                      −
                    </button>
                    <span className="font-heading text-2xl text-parchment w-8 text-center">
                      {form.guests}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setForm((p) => ({
                          ...p,
                          guests: Math.min(20, p.guests + 1),
                        }))
                      }
                      className="w-10 h-10 rounded-full border border-white/10 text-parchment hover:border-palmleaf hover:text-palmleaf transition-colors duration-200 flex items-center justify-center font-body text-lg"
                    >
                      +
                    </button>
                    <span className="font-body text-darkslategrey text-sm">
                      orang (maks. 20)
                    </span>
                  </div>
                </div>

                {/* Row 5 — Catatan */}
                <div>
                  <label className="font-body text-tan text-sm mb-2 flex items-center gap-2">
                    <FiMessageSquare className="text-palmleaf" /> Catatan
                    (Opsional)
                  </label>
                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Contoh: meja dekat jendela, ada acara ulang tahun, dll."
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
                      Memproses...
                    </>
                  ) : (
                    "Konfirmasi Reservasi"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
