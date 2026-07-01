import { MapPin, DoorOpen, CalendarPlus } from "lucide-react";

// Halide design tokens (see company-profile.tsx for rationale on the fallbacks).
const SILVER = "var(--silver, #e0e0e0)";
const ACCENT = "var(--accent, #ff3c00)";
const BG = "var(--bg, #0a0a0a)";
const DISPLAY = "var(--font-syncopate), sans-serif";

// Placeholder line-up ported from the source build — no confirmed events exist
// in company.md yet. Fill in real name/date/location/booth as they're booked.
const EXHIBITIONS = [
  "Global Magnetics Industry Event",
  "EV & Automotive Expo",
  "Industrial Automation Summit",
];

export function Exhibitions() {
  return (
    <section
      className="w-full border-t border-white/10 px-6 py-24 md:py-32"
      style={{ backgroundColor: BG }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12">
          <p
            className="mb-5 font-mono text-[0.7rem] uppercase tracking-[0.35em]"
            style={{ color: ACCENT }}
          >
            [ Meet Us ]
          </p>
          <h2
            className="text-4xl font-bold uppercase md:text-6xl"
            style={{ fontFamily: DISPLAY, color: SILVER }}
          >
            Upcoming Global Exhibitions
          </h2>
          <div className="mt-6 h-px w-24" style={{ backgroundColor: ACCENT }} />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {EXHIBITIONS.map((name) => (
            <div
              key={name}
              className="group flex flex-col border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-[#ff3c00]/60"
            >
              <div className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-neutral-500">
                To Be Announced · 2026
              </div>
              <h3
                className="mb-6 text-xl font-bold uppercase md:text-2xl"
                style={{ fontFamily: DISPLAY, color: SILVER }}
              >
                {name}
              </h3>
              <div className="mb-8 space-y-2">
                <div className="flex items-center gap-2 text-neutral-400">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-neutral-600"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-light">To be announced</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <DoorOpen
                    className="h-4 w-4 shrink-0 text-neutral-600"
                    strokeWidth={1.5}
                  />
                  <span className="font-mono text-xs">Booth · Details soon</span>
                </div>
              </div>
              <button
                type="button"
                className="mt-auto flex w-full items-center justify-center gap-2 border border-white/20 py-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-neutral-200 transition-all hover:bg-[#ff3c00] hover:text-black group-hover:border-[#ff3c00]"
              >
                Schedule Meeting
                <CalendarPlus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
