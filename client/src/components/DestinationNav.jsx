export default function DestinationNav() {
  const items = [
    { id: "tanzania", label: "Tanzania Safaris" },
    { id: "kilimanjaro", label: "Kilimanjaro Trekking" },
    { id: "zanzibar", label: "Zanzibar Holidays" },
    { id: "kenya", label: "Kenya Safaris" },
  ];

  return (
    <aside className="
      hidden lg:block
      w-72
      sticky top-32
      h-fit
      px-8
    ">
      <h3 className="text-sm tracking-widest text-gray-400 mb-8">
        DESTINATIONS
      </h3>

      <ul className="space-y-5">
        {items.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="
                block text-lg
                text-gray-400
                hover:text-[var(--brand-gold)]
                transition-all
                relative pl-4
              "
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-transparent group-hover:bg-[var(--brand-gold)] transition" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
