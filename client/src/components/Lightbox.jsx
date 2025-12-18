// client/src/components/Lightbox.jsx
import React from 'react';

export default function Lightbox({ src, onClose }) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80" onClick={onClose}></div>
      <img src={src} alt="lightbox" className="max-h-[90vh] max-w-[90vw] relative z-50 rounded" />
      <button onClick={onClose} className="absolute top-6 right-6 z-50 text-white">✕</button>
    </div>
  );
}
