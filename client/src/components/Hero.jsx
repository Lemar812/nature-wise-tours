import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero({ title="Discover East Africa’s Wonders", subtitle, cta1='Explore Safaris', cta2='Request Quote', image, video }){
  const bg = image || 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc';
  const ref = useRef();

  return (
    <section className="relative h-[64vh] md:h-[72vh] overflow-hidden rounded-b-3xl">
      <div className="hero-layer" style={{ backgroundImage: `url(${bg})`, transform:'scale(1.02)' }} />
      <div className="hero-overlay" />
      <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-16 h-1 bg-[var(--brand-gold)] block rounded-md" />
            <span className="text-sm text-gray-300 uppercase tracking-wider">Luxury Safari Experiences</span>
          </div>

          <h1 className="text-4xl md:text-6xl leading-tight font-extrabold" style={{ textShadow: '0 18px 60px rgba(2,6,23,0.6)' }}>{title}</h1>
          {subtitle && <p className="mt-4 text-lg text-gray-300 max-w-2xl">{subtitle}</p>}

          <div className="mt-8 flex gap-4">
            <a href="/tours" className="btn-gold px-6 py-3 rounded-full">Explore Safaris</a>
            <a href="/booking" className="px-6 py-3 rounded-full border border-[var(--brand-green)] text-white">Request Quote</a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-300">
            <div><div className="text-[var(--brand-gold)] font-bold">Expert Guides</div><div className="text-sm">Local guides with deep park knowledge.</div></div>
            <div><div className="text-[var(--brand-gold)] font-bold">Tailored Packages</div><div className="text-sm">Custom itineraries for every traveler.</div></div>
            <div><div className="text-[var(--brand-gold)] font-bold">Responsible Travel</div><div className="text-sm">Supporting communities & conservation.</div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
