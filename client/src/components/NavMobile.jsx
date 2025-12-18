// client/src/components/NavMobile.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavMobile({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute right-0 top-0 w-72 h-full bg-[#0b0b0d] p-6 shadow-xl">
        <button className="mb-6 text-gray-200" onClick={onClose}>Close ✕</button>
        <nav className="flex flex-col gap-3">
          <Link to="/" onClick={onClose} className="text-lg text-white">Home</Link>
          <Link to="/tours" onClick={onClose} className="text-lg text-white">Tours</Link>
          <Link to="/gallery" onClick={onClose} className="text-lg text-white">Gallery</Link>
          <Link to="/booking" onClick={onClose} className="text-lg text-white">Book</Link>
        </nav>
      </div>
    </div>
  );
}
