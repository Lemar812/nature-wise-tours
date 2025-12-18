import { Link } from "react-router-dom";

export default function ItineraryCard({
  title = "Untitled Itinerary",
  days = "",
  price = "",
  features = [],
}) {
  return (
    <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10
                    hover:scale-[1.03] transition-all duration-500">

      {/* Days Badge */}
      {days && (
        <span className="absolute top-5 right-5 bg-[var(--brand-gold)] text-black
                         px-4 py-1 rounded-full text-sm font-semibold z-10">
          {days}
        </span>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-[var(--brand-green)] mb-6 pr-24">
        {title}
      </h3>

      {/* Features */}
      <ul className="space-y-3 text-gray-300 mb-6">
        {features.map((item, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="text-[var(--brand-gold)]">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      {price && (
        <p className="text-[var(--brand-green)] font-semibold mb-6">
          From ${price} per person
        </p>
      )}

      {/* CTA */}
      <Link
        to="/booking"
        className="
          inline-flex items-center justify-center
          bg-[var(--brand-gold)] text-black
          px-8 py-3 rounded-full font-semibold
          hover:scale-105 transition
          shadow-lg shadow-yellow-500/20
        "
      >
        Book Now
      </Link>
    </div>
  );
}
