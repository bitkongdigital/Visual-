"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Do I need any design experience?",
    a: "No. Describe what you need in a sentence and Kong Visual produces a finished layout. The editor is there if you want to adjust anything by hand.",
  },
  {
    q: "What can I export?",
    a: "PNG, JPG, and SVG for images; PDF for print-ready files; and DOCX or PPTX when your design is a document or a slide.",
  },
  {
    q: "Can I keep my own colors and fonts across designs?",
    a: "Yes. Save a brand kit once and every new prompt will use it by default, without you re-entering it.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. You can generate and export a limited number of designs each month at no cost, with paid plans for higher volume and premium templates.",
  },
  {
    q: "Can I upload my own photos?",
    a: "Yes. Drop in your own images and Kong Visual will place, crop, and enhance them as part of the layout.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-brand-line bg-brand-blueTint py-20 md:py-28">
      <div className="wrap max-w-2xl">
        <span className="eyebrow">Questions</span>
        <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-brand-ink md:text-[36px]">
          Good to know.
        </h2>

        <div className="mt-10 divide-y divide-brand-line rounded-xl2 border border-brand-line bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-brand-ink">{f.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-brand-blue transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-[13.5px] leading-relaxed text-brand-slate">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
