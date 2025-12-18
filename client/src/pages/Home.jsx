import React, { useEffect } from "react";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  return (
    <>
      <div className="bg-[#1b1b1b] text-white overflow-hidden">

        {/* ================= HERO (NAVBAR ATTACHED FIX) ================= */}
        <section
          className="relative min-h-screen flex items-center justify-center text-center pt-32"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&auto=format&fit=crop&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-4xl px-6" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover East Africa’s Wonders
            </h1>

            <p className="text-gray-200 text-lg md:text-xl mb-10">
              Expertly guided safari adventures across Tanzania and Kenya’s most
              spectacular national parks and wildlife reserves.
            </p>

            <a
              href="/destinations"
              className="inline-block px-10 py-3 rounded-full bg-[#e6b873] text-black font-semibold
                         transition-all duration-300 hover:scale-105
                         hover:shadow-[0_12px_40px_rgba(230,184,115,0.35)]"
            >
              Explore Our Safaris
            </a>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
            <div className="w-7 h-12 rounded-full border-2 border-white/60 flex justify-center">
              <span className="scroll-dot mt-2 w-1.5 h-1.5 bg-white rounded-full block" />
            </div>
          </div>
        </section>

        {/* ================= ICON FEATURES ================= */}
        <section className="container mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">
          {[
            { title: "Luxury Lodges", text: "Handpicked camps and lodges blending comfort with wilderness.", icon: "🏕️" },
            { title: "Expert Guides", text: "Local professionals with deep wildlife and cultural knowledge.", icon: "🦁" },
            { title: "Tailored Safaris", text: "Every journey customized to your pace, style, and interests.", icon: "🧭" },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="bg-[#2a2a2a] rounded-2xl p-10 text-center
                         transition-all duration-300 hover:-translate-y-3
                         hover:bg-[#303030] hover:shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
            >
              <div className="relative mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-[#e6b873]/30 blur-md animate-iconPulse" />
                <div className="relative w-16 h-16 rounded-full bg-[#e6b873]/20 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-green-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </section>

{/* ================= STEP 6: LUXURY TESTIMONIALS ================= */}
<section className="py-32 bg-[#141414]">
  <div className="container mx-auto px-6 max-w-6xl">

    <div className="text-center mb-20">
      <h2
        className="text-3xl md:text-4xl font-bold text-green-500 mb-4"
        data-aos="fade-up"
      >
        Trusted by Discerning Travelers
      </h2>

      <p
        className="max-w-2xl mx-auto text-gray-300"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Every journey is designed with precision, care, and deep local expertise.
        Here’s what our guests say about traveling with Nature Wise Tours.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          text:
            "From our first call to the final sunset in the Serengeti, everything felt effortless. The lodges, guides, and pacing were absolute perfection.",
          name: "Sarah Mitchell",
          country: "United Kingdom",
        },
        {
          text:
            "This was not just a safari — it was a curated experience. Exceptional guides, seamless logistics, and unforgettable wildlife moments.",
          name: "Daniel Roth",
          country: "Germany",
        },
        {
          text:
            "We’ve traveled extensively, but Nature Wise delivered one of the most refined and meaningful journeys we’ve ever experienced.",
          name: "Emily & James Carter",
          country: "United States",
        },
      ].map((t, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 150}
          className="
            bg-[#2a2a2a] rounded-2xl p-10
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_25px_70px_rgba(0,0,0,0.65)]
          "
        >
          {/* Stars */}
          <div className="flex justify-center mb-6 text-[#e6b873] text-lg">
            ★★★★★
          </div>

          {/* Quote */}
          <p className="text-gray-200 leading-relaxed italic mb-8">
            “{t.text}”
          </p>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-[#e6b873]/50 mx-auto mb-6" />

          {/* Client */}
          <div className="text-center">
            <div className="text-green-400 font-semibold">
              {t.name}
            </div>
            <div className="text-gray-400 text-sm tracking-wide">
              {t.country}
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


        {/* ================= STEP 8 CTA (UNCHANGED) ================= */}
        <section className="relative py-28 bg-gradient-to-b from-[#141414] to-[#0f0f0f]">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-aos="fade-up">
              Your Safari Story Starts Here
            </h2>

            <p className="text-gray-300 text-lg mb-12" data-aos="fade-up" data-aos-delay="100">
              Limited availability each season. Speak directly with our safari specialists.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/booking"
                className="px-10 py-4 rounded-full bg-[#e6b873] text-black font-semibold
                           transition-all duration-300 hover:scale-105"
              >
                Start Planning My Safari
              </a>

              <a
                href="/contact"
                className="px-10 py-4 rounded-full border border-white/40 text-white
                           transition-all duration-300 hover:bg-white hover:text-black"
              >
                Talk to a Safari Expert
              </a>
            </div>
          </div>
        </section>

        {/* ================= ANIMATIONS ================= */}
        <style>{`
          .scroll-dot {
            animation: scrollDot 1.6s infinite ease-in-out;
          }
          @keyframes scrollDot {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(16px); opacity: 0.25; }
            100% { transform: translateY(0); opacity: 1; }
          }

          
          @keyframes iconPulse {
            0% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.3); opacity: 0.2; }
            100% { transform: scale(1); opacity: 0.5; }
          }

          .animate-iconPulse {
            animation: iconPulse 2.6s infinite ease-in-out;
          }
        `}</style>

      </div>
    </>
  );
}
