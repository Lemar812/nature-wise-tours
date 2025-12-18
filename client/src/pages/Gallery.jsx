import React, { useState, useEffect } from "react";

const GALLERY = [
  { id: 1, category: "Safari", src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { id: 2, category: "Wildlife", src: "https://images.unsplash.com/photo-1516426122078-c23e76319801" },
  { id: 3, category: "Zanzibar", src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e" },
  { id: 4, category: "Safari", src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2" },
  { id: 5, category: "Culture", src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e" },
  { id: 6, category: "Wildlife", src: "https://images.unsplash.com/photo-1549366021-9f761d450615" },
  { id: 7, category: "Zanzibar", src: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
  { id: 8, category: "Safari", src: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" },
];

const CATEGORIES = ["All", "Safari", "Wildlife", "Zanzibar", "Culture"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active);

  useEffect(() => {
    function esc(e) {
      if (e.key === "Escape") setLightbox(null);
    }
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <div className="bg-[#1b1b1b] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-24 text-center container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeUp">
          Safari Gallery
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto animate-fadeUp delay-100">
          A curated visual archive of East Africa’s wilderness, luxury,
          culture, and unforgettable moments.
        </p>

        <div className="w-24 h-[2px] bg-[var(--brand-gold)] mx-auto mt-8 rounded-full animate-fadeUp delay-200" />
      </section>

      {/* ================= FILTER ================= */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-4 animate-fadeUp delay-300">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`
                px-6 py-2 rounded-full text-sm
                transition-all duration-300 ease-out
                hover:scale-105 active:scale-95
                ${
                  active === cat
                    ? "bg-[var(--brand-gold)] text-black shadow-lg shadow-yellow-500/20"
                    : "border border-white/15 text-gray-300 hover:bg-white/10"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="container mx-auto px-6 pb-28">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {filtered.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setLightbox(img)}
              style={{ animationDelay: `${index * 80}ms` }}
              className="
                relative overflow-hidden rounded-2xl
                cursor-pointer group
                break-inside-avoid
                animate-fadeUp
              "
            >
              <img
                src={`${img.src}?q=80&auto=format&fit=crop&w=900`}
                alt={img.category}
                loading="lazy"
                className="
                  w-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
              />

              {/* Dark overlay */}
              <div className="
                absolute inset-0 bg-black/0
                group-hover:bg-black/60
                transition-all duration-500
              " />

              {/* Category label */}
              <div className="
                absolute bottom-6 left-6
                opacity-0 translate-y-4
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500
              ">
                <span className="text-sm uppercase tracking-widest text-[var(--brand-gold)]">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="
            fixed inset-0 z-[999]
            bg-black/90 backdrop-blur-md
            flex items-center justify-center
            px-6 animate-fadeUp
          "
        >
          <img
            src={`${lightbox.src}?q=90&auto=format&fit=crop&w=1600`}
            alt={lightbox.category}
            className="
              max-h-[85vh] w-auto rounded-2xl
              shadow-2xl animate-scaleFade
            "
          />
        </div>
      )}
    </div>
  );
}
