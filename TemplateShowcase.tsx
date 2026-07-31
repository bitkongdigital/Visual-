"use client";

import { useState } from "react";

type Template = {
  name: string;
  category: string;
  bg: string;
  accent: string;
  schematic: "poster" | "card" | "square" | "document" | "invite";
};

const categories = ["All", "Business", "Church", "Weddings", "Social", "Education"];

const templates: Template[] = [
  { name: "Sunday Service Program", category: "Church", bg: "#0A1A3C", accent: "#E9B44C", schematic: "document" },
  { name: "Birthday Flyer", category: "Business", bg: "#123524", accent: "#E9B44C", schematic: "poster" },
  { name: "Studio Business Card", category: "Business", bg: "#F3F6FF", accent: "#0B5FFF", schematic: "card" },
  { name: "Wedding Invitation", category: "Weddings", bg: "#FBF7F2", accent: "#B08968", schematic: "invite" },
  { name: "Product Instagram Post", category: "Social", bg: "#0B5FFF", accent: "#FFFFFF", schematic: "square" },
  { name: "Graduate Resume", category: "Education", bg: "#FFFFFF", accent: "#0B5FFF", schematic: "document" },
];

function Schematic({ t }: { t: Template }) {
  const line = t.bg === "#FFFFFF" || t.bg === "#FBF7F2" ? "rgba(10,26,60,0.14)" : "rgba(255,255,255,0.22)";
  return (
    <div className="absolute inset-3 flex flex-col gap-2">
      <div className="h-2.5 w-2/3 rounded-sm" style={{ background: t.accent }} />
      <div className="h-1.5 w-1/3 rounded-sm" style={{ background: line }} />
      <div className="mt-auto flex items-end justify-between">
        <div className="h-8 w-8 rounded-sm border" style={{ borderColor: line }} />
        <div className="h-4 w-10 rounded-full" style={{ background: line }} />
      </div>
    </div>
  );
}

export default function TemplateShowcase() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? templates : templates.filter((t) => t.category === active);

  return (
    <section id="templates" className="border-t border-brand-line bg-brand-blueTint py-20 md:py-28">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <span className="eyebrow">Templates</span>
            <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-brand-ink md:text-[36px]">
              Hundreds of starting points, already laid out.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                  active === c
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-brand-line bg-white text-brand-slate hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {shown.map((t) => (
            <div key={t.name} className="group cursor-pointer">
              <div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-brand-line shadow-card transition-transform group-hover:-translate-y-1"
                style={{ background: t.bg }}
              >
                <Schematic t={t} />
              </div>
              <p className="mt-2 text-[12.5px] font-medium text-brand-ink">{t.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-brand-slate">
                {t.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
