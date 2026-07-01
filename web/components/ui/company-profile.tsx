import { Globe, Play } from "lucide-react";

// Halide design tokens (defined on :root by the hero; literal fallbacks keep
// this section correct even if it renders without the hero mounted).
const SILVER = "var(--silver, #e0e0e0)";
const ACCENT = "var(--accent, #ff3c00)";
const BG = "var(--bg, #0a0a0a)";
const DISPLAY = "var(--font-syncopate), sans-serif";

// External stock imagery ported from the source build. Illustrative placeholders,
// not verified YLS facilities — swap for assets/ imagery before publishing.
const GLOBAL_REACH_IMG =
  "https://lh3.googleusercontent.com/aida/AP1WRLvfmC_Umiahn_6moSlu0PYUqjd5qcVb5iwWGhWtwdiQ9TBbwod4PSJtpPOFm000W8tcJtydbYP3H2Dlqb1jY30lg4Q7DiDIG1zCbTXEP7r0wjtbW9bS7TQ3eCa0sWmKxOOc5dCEdKwqbFUcODVg5oZV9jLMRIap43xgWHJ_NR1ykEpp-ViGwbEzZzoFxXabpTqer6FOEh7-zQCX09d3ISt0mkg-iftnxkuKi7ARmQkaXb5RiDkmpPkIY1ga";
const OVERVIEW_IMG =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800";
const BLUEPRINT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0BGeyk9-bQ0uhcMnHqtK1zaD6kA5owXn1LrbdxZYt-pkGj3aWrwjh5Oadnait0uUTDtFppmBeXJp1Z02zORBSXys-8pGpSVMkxqPjpz411IPHV7jrfRc9gfohjRaa3FeWAqBatudb5VhpAWFNWCyWrzetyuxfe7CFRVA5tD0XCqopIC_lDHDpgm8_1fxnttgDz1wPZ01eOoXxSWo2uO2T7s0thVNQ3ZBh6RWvDnzvlonGo5mnrRqyIYpw1lztKUH_Z4ONA_nnfmwB";

// Real office hubs from company.md (§ commercial + overseas offices).
const HUBS = [
  { region: "EU Operations", city: "Madrid, Spain" },
  { region: "NA Operations", city: "CDMX, Mexico" },
  { region: "Asia Operations", city: "Guangzhou · Ningbo · Hong Kong" },
];

// Certifications YLS holds (company.md). Status label standardized to "Certified"
// rather than the source's unreviewed per-cert wording — see CLAUDE.md §7.
const CERTS = ["ISO 9001", "ISO 14001", "ISO 45001", "IATF 16949", "RoHS", "REACH"];

export function CompanyProfile() {
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
            [ Who We Are ]
          </p>
          <h2
            className="text-4xl font-bold uppercase md:text-6xl"
            style={{ fontFamily: DISPLAY, color: SILVER }}
          >
            Company Profile
          </h2>
          <div className="mt-6 h-px w-24" style={{ backgroundColor: ACCENT }} />
        </div>

        <p className="max-w-3xl text-sm font-light leading-relaxed text-neutral-400 md:text-base">
          Founded in 2020 (with roots in rare-earth oxide production dating to
          1999), YLS Rare Earth is a vertically integrated manufacturer of
          high-performance NdFeB magnets — controlling the chain from rare-earth
          oxide through metal, magnet and recycling. Headquartered in Guangzhou
          with production bases in Guangxi, Sichuan and Jiangxi, YLS supplies the
          automotive &amp; EV, wind power, robotics and consumer-electronics
          markets.
        </p>

        {/* Card grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Global Reach */}
          <div
            className="group flex min-h-[280px] flex-col border border-white/10 p-8 transition-colors hover:border-white/25 md:col-span-2"
            style={{
              backgroundImage: `linear-gradient(rgba(10,10,10,0.72), rgba(10,10,10,0.82)), url("${GLOBAL_REACH_IMG}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="mb-12 flex items-start justify-between">
              <h3
                className="text-2xl font-bold uppercase md:text-3xl"
                style={{ fontFamily: DISPLAY, color: SILVER }}
              >
                Global Reach
              </h3>
              <Globe
                className="h-8 w-8 text-neutral-600 transition-colors group-hover:text-[#ff3c00]"
                strokeWidth={1}
              />
            </div>
            <div className="mt-auto grid grid-cols-1 gap-8 border-t border-white/10 pt-6 sm:grid-cols-3">
              {HUBS.map((hub) => (
                <div key={hub.region}>
                  <div className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500">
                    {hub.region}
                  </div>
                  <div className="font-mono text-sm text-neutral-200">
                    {hub.city}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Overview — video placeholder */}
          <div className="group relative flex min-h-[280px] flex-col overflow-hidden border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 grayscale transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url("${OVERVIEW_IMG}")` }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative flex flex-grow items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-[#ff3c00] group-hover:bg-[#ff3c00]">
                <Play
                  className="ml-1 h-6 w-6 text-white"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </div>
            </div>
            <div className="relative bg-gradient-to-t from-black/90 to-transparent p-6">
              <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-neutral-300">
                YLS Rare Earth: Company Overview
              </h3>
            </div>
          </div>

          {/* Quality Standards */}
          <div
            className="border border-white/10 p-8 md:col-span-3"
            style={{
              backgroundImage: `linear-gradient(rgba(10,10,10,0.86), rgba(10,10,10,0.92)), url("${BLUEPRINT_IMG}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-4">
              <div className="md:col-span-1">
                <h3
                  className="mb-2 text-xl font-bold uppercase md:text-2xl"
                  style={{ fontFamily: DISPLAY, color: SILVER }}
                >
                  Quality Standards
                </h3>
                <p className="text-sm font-light text-neutral-400">
                  Uncompromising compliance.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:col-span-3 md:grid-cols-3">
                {CERTS.map((cert) => (
                  <div
                    key={cert}
                    className="border border-white/10 bg-white/[0.03] p-4 text-center"
                  >
                    <div className="mb-1 font-mono text-base font-bold text-neutral-100">
                      {cert}
                    </div>
                    <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-500">
                      Certified
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
