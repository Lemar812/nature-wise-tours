import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Whatsapp,
} from "../lib/icons";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const travelDates = form.travelDates.value;
    const travelers = form.travelers.value;
    const destination = form.destination.value;
    const preferences = form.preferences.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const whatsappMessage = `
Hello Nature Wise Tours 👋

I would like to request a safari booking.

📅 Travel Dates: ${travelDates}
👥 Number of Travelers: ${travelers}
📍 Destination Interest: ${destination}

📝 Safari Preferences:
${preferences || "Not specified"}

📧 Email: ${email}
📞 Phone / WhatsApp: ${phone || "Not provided"}
`;

    const whatsappURL = `https://wa.me/255741950553?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      form.reset();
    }, 4000);
  }

  return (
    <div className="bg-[#1b1b1b] text-white">

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-40 pb-24 text-center container mx-auto px-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Plan Your Safari
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Share your travel preferences and our safari specialists will design a
          tailor-made East African journey for you.
        </p>

        <div className="w-24 h-1 bg-[var(--brand-gold)] mx-auto mt-8 rounded-full" />
      </motion.section>

      {/* ================= FORM ================= */}
      <section className="container mx-auto px-6 pb-28 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="bg-black/30 rounded-2xl p-10 backdrop-blur-md border border-white/10"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >

                {/* Travel Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">
                      Travel Dates
                    </label>
                    <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg p-4 focus-within:border-[var(--brand-gold)] transition">
                      <Calendar size={18} />
                      <input
                        name="travelDates"
                        type="text"
                        placeholder="Preferred dates"
                        className="bg-transparent outline-none w-full"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-300">
                      Number of Travelers
                    </label>
                    <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg p-4 focus-within:border-[var(--brand-gold)] transition">
                      <Users size={18} />
                      <input
                        name="travelers"
                        type="number"
                        min="1"
                        placeholder="e.g. 2"
                        className="bg-transparent outline-none w-full"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Destination Interest
                  </label>
                  <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg p-4 focus-within:border-[var(--brand-gold)] transition">
                    <MapPin size={18} />
                    <select
                      name="destination"
                      className="bg-transparent outline-none w-full"
                    >
                      <option>Tanzania Safari</option>
                      <option>Kenya Safari</option>
                      <option>Zanzibar Beach Extension</option>
                      <option>Combination Trip</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Safari Preferences
                  </label>
                  <div className="flex items-start gap-3 bg-black/40 border border-white/10 rounded-lg p-4 focus-within:border-[var(--brand-gold)] transition">
                    <MessageSquare size={18} className="mt-1" />
                    <textarea
                      name="preferences"
                      rows="4"
                      placeholder="Tell us about your expectations, budget range, and interests"
                      className="bg-transparent outline-none w-full resize-none"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">
                      Email
                    </label>
                    <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg p-4 focus-within:border-[var(--brand-gold)] transition">
                      <Mail size={18} />
                      <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="bg-transparent outline-none w-full"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-300">
                      Phone / WhatsApp
                    </label>
                    <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg p-4 focus-within:border-[var(--brand-gold)] transition">
                      <Phone size={18} />
                      <input
                        name="phone"
                        type="text"
                        placeholder="+255…"
                        className="bg-transparent outline-none w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6 flex flex-col sm:flex-row gap-6 items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="
                      px-10 py-4 rounded-full font-semibold
                      bg-[var(--brand-gold)] text-black
                      shadow-lg shadow-yellow-500/20
                    "
                  >
                    Submit Booking Request
                  </motion.button>

                  <p className="text-sm text-gray-400">
                    You’ll be redirected to WhatsApp to send your request.
                  </p>
                </div>
              </motion.form>
            ) : (
              /* ================= SUCCESS STATE ================= */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <h3 className="text-3xl font-bold mb-4">
                  Opening WhatsApp…
                </h3>

                <p className="text-gray-300 max-w-xl mx-auto mb-8">
                  Please send the message in WhatsApp to complete your booking
                  request. Our safari specialists will respond shortly.
                </p>

                <motion.a
                  whileHover={{ scale: 1.06 }}
                  href="https://wa.me/255741950553"
                  target="_blank"
                  className="
                    inline-flex items-center gap-3 px-10 py-4 rounded-full
                    bg-[var(--brand-gold)] text-black font-semibold
                  "
                >
                  <Whatsapp size={18} />
                  Message Us on WhatsApp
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
