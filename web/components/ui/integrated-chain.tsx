import Image from "next/image";

// Halide design tokens (see company-profile.tsx for rationale on the fallbacks).
const SILVER = "var(--silver, #e0e0e0)";
const ACCENT = "var(--accent, #ff3c00)";
const BG = "var(--bg, #0a0a0a)";
const DISPLAY = "var(--font-syncopate), sans-serif";

// The three stages of YLS's vertically integrated chain (company.md §"Full Green
// Rare Earth Supply Chain": oxide → metal → magnet, with recycling looping back).
// Photos are real YLS equipment shots from assets/products/, but the mapping of
// each photo to its stage is representative — confirm with YLS before publishing.
const STAGES = [
  {
    step: "01",
    label: "Upstream",
    title: "Refining",
    image: "/process/raw-materials.jpg",
    alt: "Vacuum melting furnace at a YLS production facility",
    body: "Most magnet makers buy rare-earth inputs on a volatile open market. YLS controls its own supply — the founders established rare-earth oxide production in 1999, covering the chain from mining and separation through Pr/Nd metal.",
    locations: ["Guangxi", "Jiangxi"],
  },
  {
    step: "02",
    label: "Midstream",
    title: "Manufacturing",
    image: "/process/manufacturing.jpg",
    alt: "Rows of magnet production machinery on a YLS factory floor",
    body: "A 12-step production process runs entirely in-house — from melting and strip casting through jet milling, pressing, sintering and machining to surface treatment, inspection and magnetization.",
    locations: ["Sichuan"],
  },
  {
    step: "03",
    label: "Closed Loop",
    title: "Recycling",
    image: "/process/recycling.jpg",
    alt: "Rotary processing furnaces at a YLS recycling facility",
    body: "Rare-earth urban mining recovers magnets from end-of-life motors and electronics and remanufactures them into fresh material — a second, independent supply source that lowers each magnet's embedded carbon.",
    locations: ["Sichuan", "Shanghai (planned)"],
  },
];

export function IntegratedChain() {
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
            [ Vertically Integrated ]
          </p>
          <h2
            className="text-4xl font-bold uppercase md:text-6xl"
            style={{ fontFamily: DISPLAY, color: SILVER }}
          >
            From Oxide to Magnet
          </h2>
          <div className="mt-6 h-px w-24" style={{ backgroundColor: ACCENT }} />
        </div>

        <p className="max-w-3xl text-sm font-light leading-relaxed text-neutral-400 md:text-base">
          YLS owns or controls every step of the chain — rare-earth oxide to
          metal, metal to magnet, and end-of-life magnets back into the loop.
          That integration gives customers unusual stability in both supply and
          price, and puts YLS's magnets at the heart of electric vehicles, wind
          power, robotics and consumer electronics.
        </p>

        {/* Stage cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {STAGES.map((stage) => (
            <div
              key={stage.step}
              className="group relative flex flex-col overflow-hidden border border-white/10 bg-white/[0.02] p-8 hover:border-[#ff3c00]/60"
            >
              {/* Full-card image, clipped to the 112px thumbnail circle. The
                  circle center is deterministic: p-8 padding (32px) + the 24px
                  stage-title row + its mb-6 (24px) puts the thumbnail at
                  (32, 80), so the center is (88, 136). On hover the clip circle
                  grows past the card bounds, so the photo snaps from the
                  thumbnail to fill the card. */}
              <div className="pointer-events-none absolute inset-0 [clip-path:circle(56px_at_88px_136px)] group-hover:[clip-path:circle(150%_at_88px_136px)]">
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale group-hover:grayscale-0"
                />
                {/* Scrim shown with the expanded image to keep the text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/65 to-[#0a0a0a]/45 opacity-0 group-hover:opacity-100" />
              </div>

              {/* Stage title */}
              <div
                className="relative mb-6 text-right text-base font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: DISPLAY, color: SILVER }}
              >
                {stage.label}
              </div>
              {/* Centered thumbnail crop shown at rest (the full-card layer under
                  it samples the photo's top-left corner, which reads badly as a
                  thumbnail). Hidden while hovered so the expanded image shows. */}
              <div className="relative mb-10 h-28 w-28 overflow-hidden rounded-full border border-white/15 group-hover:opacity-0">
                <Image
                  src={stage.image}
                  alt=""
                  fill
                  sizes="112px"
                  className="object-cover grayscale"
                />
              </div>
              <h3
                className="relative mb-4 text-lg font-bold uppercase tracking-wide md:text-xl"
                style={{ fontFamily: DISPLAY, color: SILVER }}
              >
                {stage.title}
              </h3>
              <p className="relative text-sm font-light leading-relaxed text-neutral-400 group-hover:text-neutral-200">
                {stage.body}
              </p>
              {/* Production-base footer, pinned to the card bottom */}
              <div className="relative mt-auto pt-8">
                <div className="flex items-end justify-between gap-4 border-t border-[#ff3c00]/40 pt-4">
                  <div className="font-mono text-2xl" style={{ color: ACCENT }}>
                    {stage.step}
                  </div>
                  <div className="space-y-1 text-right">
                    {stage.locations.map((location) => (
                      <div
                        key={location}
                        className="whitespace-nowrap font-mono text-xs text-neutral-300 group-hover:text-neutral-100"
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
