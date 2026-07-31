import PromptDemo from "./PromptDemo";

const beats = [
  { verb: "Type", detail: "Describe what you need in plain words." },
  { verb: "Generate", detail: "Kong Visual lays out type, color, and image." },
  { verb: "Refine", detail: "Adjust anything in the built-in editor." },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-brand-blueTint to-white" />

      <div className="wrap grid items-center gap-12 md:grid-cols-2 md:gap-10">
        <div>
          <span className="eyebrow">AI graphic design</span>
          <h1 className="mt-4 font-display text-[40px] font-semibold leading-[1.08] tracking-tight text-brand-ink md:text-[52px]">
            Create amazing designs with just a few words.
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-brand-slate">
            Tell Kong Visual what you're making — a flyer, a logo, a resume, an
            Instagram post — and get a finished, editable design back in
            seconds. No blank canvas, no design degree.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#start"
              className="rounded-full bg-brand-red px-6 py-3.5 text-[15px] font-semibold text-white shadow-card transition-transform hover:scale-[1.03]"
            >
              Start creating — free
            </a>
            <a
              href="#templates"
              className="text-[15px] font-semibold text-brand-blue transition-colors hover:text-brand-blueDark"
            >
              Browse templates →
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-brand-line pt-6">
            {beats.map((b) => (
              <div key={b.verb}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-blue">
                  {b.verb}
                </dt>
                <dd className="mt-1 text-[12.5px] leading-snug text-brand-slate">
                  {b.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <PromptDemo />
      </div>
    </section>
  );
}
