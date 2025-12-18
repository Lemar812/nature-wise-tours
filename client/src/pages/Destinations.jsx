import DestinationSidebar from "../components/DestinationSidebar";
import ItineraryCard from "../components/ItineraryCard";
import { itineraries } from "../data/itineraries";

export default function Destinations() {
  return (
    <div className="bg-[#1b1b1b] text-white">
      <div className="max-w-7xl mx-auto px-10 flex gap-12">

        {/* Sidebar */}
        <aside className="hidden lg:block w-64 pt-24">
          <div className="sticky top-32 max-h-[calc(100vh-8rem)]">
            <DestinationSidebar />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 py-24 space-y-40 pb-64">

          <section id="tanzania">
            <h2 className="text-4xl font-bold mb-12">Tanzania Safaris</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
              {itineraries.tanzania?.map((item, i) => (
                <ItineraryCard key={i} {...item} />
              ))}
            </div>
          </section>

          <section id="kilimanjaro">
            <h2 className="text-4xl font-bold mb-12">Kilimanjaro Trekking</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
              {itineraries.kilimanjaro?.map((item, i) => (
                <ItineraryCard key={i} {...item} />
              ))}
            </div>
          </section>

          <section id="zanzibar">
            <h2 className="text-4xl font-bold mb-12">Zanzibar Holidays</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
              {itineraries.zanzibar?.map((item, i) => (
                <ItineraryCard key={i} {...item} />
              ))}
            </div>
          </section>

          <section id="kenya">
            <h2 className="text-4xl font-bold mb-12">Kenya Safaris</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
              {itineraries.kenya?.map((item, i) => (
                <ItineraryCard key={i} {...item} />
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
