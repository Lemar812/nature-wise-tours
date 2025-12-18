export default function DestinationSection({ id, title, subtitle, items }) {
  return (
    <section
      id={id}
      className="mb-40 scroll-mt-32"
    >
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <h2 className="text-4xl font-serif mb-4">{title}</h2>
        <p className="text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Itineraries */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="opacity-0 animate-fadeIn"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <ItineraryCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
