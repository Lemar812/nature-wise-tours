// client/src/components/WhyChoose.jsx
import React from 'react';

export default function WhyChoose() {
  const items = [
    { title: 'Local Experience', text: 'Years of on-ground guiding and logistics.' },
    { title: 'Luxury Lodges', text: 'Hand-picked premium lodges and camps.' },
    { title: 'Responsible Travel', text: 'We partner with communities & conservation.' },
  ];
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-extrabold mb-6 text-white">Why Choose Nature Wise</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="p-6 premium-card rounded-lg">
            <h4 className="font-bold text-[var(--brand-gold)]">{it.title}</h4>
            <p className="mt-2 text-gray-300">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
