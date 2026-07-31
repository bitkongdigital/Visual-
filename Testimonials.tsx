const quotes = [
  {
    name: "Amara O.",
    role: "Events Coordinator, Grace Fellowship",
    quote:
      "I used to spend Saturday nights formatting the Sunday program. Now I type what's happening and it's ready before I finish my coffee.",
  },
  {
    name: "Daniel K.",
    role: "Owner, Union Coffee Roasters",
    quote:
      "Our menu, our Instagram posts, our roll-up banner for the market — all from the same few prompts, and they finally look like they belong together.",
  },
  {
    name: "Priya R.",
    role: "Freelance Marketer",
    quote:
      "Clients ask for three flyer options by end of day. Kong Visual gets me there without touching a template library for an hour first.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-brand-line py-20 md:py-28">
      <div className="wrap">
        <span className="eyebrow">Who it's for</span>
        <h2 className="mt-3 max-w-lg font-display text-[30px] font-semibold tracking-tight text-brand-ink md:text-[36px]">
          Built for people who need a design finished, not a hobby to learn.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-xl2 border border-brand-line p-7"
            >
              <blockquote className="text-[14.5px] leading-relaxed text-brand-ink">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-blueTint font-display text-[13px] font-semibold text-brand-blue">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-brand-ink">{q.name}</p>
                  <p className="text-[12px] text-brand-slate">{q.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
