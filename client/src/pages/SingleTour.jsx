// client/src/pages/SingleTour.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function SingleTour(){
  const { id } = useParams();
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="premium-card p-0 overflow-hidden">
          <div className="card-figure h-96"><img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80" alt="tour"/></div>
        </div>
        <div>
          <h1 className="text-3xl font-display mb-4">Serengeti Classic — Tour {id}</h1>
          <p className="text-gray-300 mb-6">Full description, highlights, inclusions, and map.</p>
          <a href="/booking" className="inline-block btn-gold px-6 py-3 rounded-full">Book This Tour</a>
        </div>
      </div>
    </div>
  );
}
