export default function ItineraryDetails({ itinerary }) {
  return (
    <div className="space-y-6">
      {itinerary.days.map((day, i) => (
        <div key={i}>
          <h4 className="font-semibold text-[var(--brand-gold)]">
            {day.day} – {day.title}
          </h4>
          <p className="text-gray-300 mt-1">
            {day.description}
          </p>
        </div>
      ))}
    </div>
  );
}
