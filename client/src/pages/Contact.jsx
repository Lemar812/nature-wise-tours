import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Tiktok,
  Whatsapp,
} from "../lib/icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const whatsappMessage = `
Hello Nature Wise Tours 👋

I would like to get in touch.

👤 Name: ${name}
📧 Email: ${email}
📌 Subject: ${subject || "N/A"}

💬 Message:
${message}
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
  };

  return (
    <div className="bg-[#1b1b1b] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="pt-40 pb-24 text-center container mx-auto px-6"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get in Touch
        </h1>

        <p
          className="text-gray-300 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Speak directly with our safari specialists. We’re here to design your
          perfect East African journey.
        </p>

        <div
          className="w-24 h-1 bg-[var(--brand-gold)] mx-auto mt-8 rounded-full"
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </section>

      {/* ================= MAIN GRID ================= */}
      <section className="container mx-auto px-6 pb-28 grid md:grid-cols-2 gap-14">

        {/* ================= CONTACT INFO ================= */}
        <div
          data-aos="fade-right"
          className="bg-black/30 rounded-2xl p-10 backdrop-blur-md border border-white/10
                     transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-[var(--brand-green)] mb-8">
            Contact Information
          </h3>

          <ul className="space-y-6 text-gray-300">
            <li className="flex gap-4 items-start">
              <MapPin size={20} className="text-[var(--brand-gold)] mt-1" />
              <span>Clock Tower, Arusha 23000, Tanzania</span>
            </li>

            <li className="flex gap-4 items-center">
              <Phone size={20} className="text-[var(--brand-gold)]" />
              <span>+255 741 950 553</span>
            </li>

            <li className="flex gap-4 items-center">
              <Phone size={20} className="text-[var(--brand-gold)]" />
              <span>+255 757 881 824</span>
            </li>

            <li className="flex gap-4 items-center">
              <Mail size={20} className="text-[var(--brand-gold)]" />
              <span>info@naturewisetours.com</span>
            </li>
          </ul>

          {/* SOCIALS */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-[var(--brand-green)] mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61581299813730" target="_blank">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/naturewise.tours" target="_blank">
                <Instagram />
              </a>
              <a href="https://www.tiktok.com/@naturewise.tours" target="_blank">
                <Tiktok />
              </a>
              <a href="https://wa.me/255741950553" target="_blank">
                <Whatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* ================= CONTACT FORM ================= */}
        <div
          data-aos="fade-left"
          className="relative bg-black/30 rounded-2xl p-10 backdrop-blur-md border border-white/10
                     transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-[var(--brand-green)] mb-8">
            Send Us a Message
          </h3>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-lg bg-black/40 border border-white/10
                           focus:border-[var(--brand-gold)]
                           focus:ring-1 focus:ring-[var(--brand-gold)]
                           outline-none transition-all duration-300"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-lg bg-black/40 border border-white/10
                           focus:border-[var(--brand-gold)]
                           focus:ring-1 focus:ring-[var(--brand-gold)]
                           outline-none transition-all duration-300"
              />

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-lg bg-black/40 border border-white/10
                           focus:border-[var(--brand-gold)]
                           focus:ring-1 focus:ring-[var(--brand-gold)]
                           outline-none transition-all duration-300"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-lg bg-black/40 border border-white/10
                           focus:border-[var(--brand-gold)]
                           focus:ring-1 focus:ring-[var(--brand-gold)]
                           outline-none resize-none transition-all duration-300"
              />

              <button
                type="submit"
                className="px-10 py-4 rounded-full font-semibold
                           bg-[var(--brand-gold)] text-black
                           transition-all duration-300
                           hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30
                           active:scale-95"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-400">
                You’ll be redirected to WhatsApp to complete your message.
              </p>
            </form>
          ) : (
            <div className="text-center py-20" data-aos="zoom-in">
              <div className="text-3xl mb-4 text-[var(--brand-gold)]">✓</div>
              <h4 className="text-2xl font-semibold mb-2">
                Opening WhatsApp…
              </h4>
              <p className="text-gray-300">
                Please send the message in WhatsApp to complete your inquiry.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="bg-[#141414] py-24">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-6">
            Visit Our Office
          </h3>

          <p className="text-gray-300 mb-10">
            Located in the heart of Arusha — the gateway to Tanzania’s greatest
            safari destinations.
          </p>

          <div className="w-full h-[360px] rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="Nature Wise Tours Location"
              src="https://www.google.com/maps?q=Clock+Tower+Arusha+Tanzania&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
