import { Instagram, Twitter, Youtube } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["AI Designer", "Photo Editor", "Document Designer", "Templates"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact", "Status"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-line bg-white py-14">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-blue">
                <span className="h-2.5 w-2.5 rounded-sm bg-white" />
              </span>
              <span className="font-display text-[15px] font-semibold">Kong Visual</span>
            </div>
            <p className="mt-3 max-w-[220px] text-[13px] leading-relaxed text-brand-slate">
              Create amazing designs with just a few words.
            </p>
            <div className="mt-5 flex gap-3 text-brand-slate">
              <a href="#" aria-label="Instagram" className="hover:text-brand-blue">
                <Instagram size={17} />
              </a>
              <a href="#" aria-label="X" className="hover:text-brand-blue">
                <Twitter size={17} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-brand-blue">
                <Youtube size={17} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-slate">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[13.5px] text-brand-ink hover:text-brand-blue">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-line pt-6 text-[12.5px] text-brand-slate md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kong Visual. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-ink">Privacy</a>
            <a href="#" className="hover:text-brand-ink">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
