import React, { useEffect } from "react";
import AOS from "aos";
import { Users, Handshake, Leaf } from "../lib/icons";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  return (
    <div className="bg-[#1b1b1b] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 bg-[#141414]">
        <div
          className="container mx-auto px-6 max-w-4xl text-center"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-6">
            About Nature Wise Tours
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-light">
            Luxury safaris rooted in conservation, authenticity, and deep local
            knowledge of East Africa.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-28">
        <div
          className="container mx-auto px-6 max-w-5xl"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-green-500 mb-6">
            Our Story
          </h2>

          <div className="w-20 h-[3px] bg-[#e6b873] mb-10" />

          <p className="text-gray-300 text-lg leading-relaxed font-light max-w-4xl">
            Nature Wise Tours was founded with a passion for showcasing the
            incredible natural beauty and wildlife of East Africa. Our team of
            expert guides and travel consultants are dedicated to creating
            unforgettable safari experiences built on trust, professionalism,
            and intimate local knowledge.
          </p>
        </div>
      </section>

      {/* ================= OUR MISSION ================= */}
      <section className="py-24 bg-[#141414]">
        <div
          className="container mx-auto px-6 max-w-5xl"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-green-500 mb-6">
            Our Mission
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed font-light max-w-4xl">
            To provide authentic, responsible, and memorable safari experiences
            that connect travelers with the natural wonders of Tanzania and Kenya
            while actively supporting local communities and conservation efforts.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-6xl">

          <h2
            className="text-3xl md:text-4xl font-semibold text-green-500 text-center mb-20"
            data-aos="fade-up"
          >
            Why Choose Nature Wise
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Expert Guides */}
            <div
              className="bg-[#2a2a2a] rounded-2xl p-10 text-center
                         transition-all duration-300
                         hover:-translate-y-2
                         hover:shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full
                              bg-green-600/20 flex items-center justify-center">
                <Users size={28} className="text-green-500" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Expert Guides
              </h3>

              <p className="text-gray-300 font-light">
                Our safaris are led by experienced local professionals with deep
                understanding of wildlife behavior, ecosystems, and culture.
              </p>
            </div>

            {/* Personalized Service */}
            <div
              className="bg-[#2a2a2a] rounded-2xl p-10 text-center
                         transition-all duration-300
                         hover:-translate-y-2
                         hover:shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full
                              bg-green-600/20 flex items-center justify-center">
                <Handshake size={28} className="text-green-500" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Personalized Service
              </h3>

              <p className="text-gray-300 font-light">
                Every journey is carefully tailored to your preferences,
                interests, and travel style for a seamless luxury experience.
              </p>
            </div>

            {/* Sustainable Tourism */}
            <div
              className="bg-[#2a2a2a] rounded-2xl p-10 text-center
                         transition-all duration-300
                         hover:-translate-y-2
                         hover:shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full
                              bg-green-600/20 flex items-center justify-center">
                <Leaf size={28} className="text-green-500" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Sustainable Tourism
              </h3>

              <p className="text-gray-300 font-light">
                We are committed to eco-friendly practices, conservation, and
                meaningful support of local communities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CLOSING STATEMENT ================= */}
      <section className="py-24 bg-[#141414]">
        <div
          className="container mx-auto px-6 max-w-4xl text-center"
          data-aos="fade-up"
        >
          <p className="text-gray-300 text-lg font-light">
            Nature Wise Tours is more than a safari company — it is a gateway to
            Africa’s most extraordinary landscapes, wildlife, and cultures,
            delivered with integrity, care, and excellence.
          </p>
        </div>
      </section>

    </div>
  );
}
