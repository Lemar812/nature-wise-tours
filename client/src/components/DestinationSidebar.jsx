import { useEffect, useState } from "react";

const sections = [
  { id: "tanzania", label: "Tanzania Safaris" },
  { id: "kilimanjaro", label: "Kilimanjaro Trekking" },
  { id: "zanzibar", label: "Zanzibar Holidays" },
  { id: "kenya", label: "Kenya Safaris" },
];

export default function DestinationSidebar() {
  const [active, setActive] = useState("tanzania");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="
        hidden lg:block w-72 shrink-0
        sticky top-28 self-start
        h-fit
      "
    >
      <div
        className="
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-6
        "
      >
        <p className="text-xs tracking-widest text-gray-400 mb-6">
          DESTINATIONS
        </p>

        <nav className="relative space-y-2">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                relative block px-4 py-3 rounded-lg
                text-sm transition-all duration-300
                ${
                  active === item.id
                    ? "text-[var(--brand-gold)] bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {active === item.id && (
                <span
                  className="
                    absolute left-0 top-1/2 -translate-y-1/2
                    w-1 h-6 rounded-full
                    bg-[var(--brand-gold)]
                  "
                />
              )}
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
