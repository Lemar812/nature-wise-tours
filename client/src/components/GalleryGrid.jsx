// client/src/components/GalleryGrid.jsx
import React, { useState } from 'react';
import Lightbox from './Lightbox';

export default function GalleryGrid({ images = [] }) {
  const [open, setOpen] = useState(null);
  if (!images.length) images = [
    'https://imagefa.st/images/2025/12/11/-A-golden-sunset-over-the-wild-Africas-untamed.jpg',
    'https://imagefa.st/images/2025/12/11/Great_Tanzania-on-Instagram_-Exceptional-game.jpg',
    'https://imagefa.st/images/2025/12/11/Kenya-Safaris.jpg'
  ];
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button key={i} onClick={() => setOpen(src)} className="h-56 w-full rounded-lg overflow-hidden premium-card bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>
      <Lightbox src={open} onClose={() => setOpen(null)} />
    </section>
  );
}
