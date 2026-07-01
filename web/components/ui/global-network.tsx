import { WorldMap } from "@/components/ui/map";

// Illustrative global routes — placeholder copy/geography, not YLS-verified
// customer or shipping data. Replace with company.md-sourced facts before publishing.
const ROUTES = [
  {
    start: { lat: 64.2008, lng: -149.4937, label: "Fairbanks" },
    end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
  },
  {
    start: { lat: 64.2008, lng: -149.4937, label: "Fairbanks" },
    end: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
  },
  {
    start: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
    end: { lat: 38.7223, lng: -9.1393, label: "Lisbon" },
  },
  {
    start: { lat: 51.5074, lng: -0.1278, label: "London" },
    end: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: 43.1332, lng: 131.9113, label: "Vladivostok" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
  },
];

export function GlobalNetwork() {
  return (
    <section
      className="w-full px-6 py-24 md:py-32"
      style={{ backgroundColor: "var(--bg, #0a0a0a)" }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <p
          className="mb-5 font-mono text-[0.7rem] uppercase tracking-[0.35em]"
          style={{ color: "var(--accent, #ff3c00)" }}
        >
          [ Global Distribution ]
        </p>
        <h2
          className="text-4xl font-bold uppercase md:text-6xl"
          style={{
            fontFamily: "var(--font-syncopate), sans-serif",
            color: "var(--silver, #e0e0e0)",
          }}
        >
          Global Network
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-neutral-400 md:text-base">
          A worldwide logistics network linking production and delivery across
          every continent — connecting our facilities to partners and markets
          around the globe.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-6xl">
        <WorldMap lineColor="#ff3c00" dots={ROUTES} />
      </div>
    </section>
  );
}
