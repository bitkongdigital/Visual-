"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Product", href: "#features" },
  { label: "Templates", href: "#templates" },
  { label: "Stories", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/85 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-blue">
            <span className="h-3 w-3 rounded-sm bg-white" />
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight">
            Kong Visual
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-brand-slate transition-colors hover:text-brand-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#login"
            className="text-[14px] font-medium text-brand-ink transition-colors hover:text-brand-blue"
          >
            Log in
          </a>
          <a
            href="#start"
            className="rounded-full bg-brand-red px-5 py-2.5 text-[14px] font-semibold text-white shadow-card transition-transform hover:scale-[1.03]"
          >
            Start creating — free
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-9 w-9 place-items-center rounded-lg text-brand-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-line bg-white md:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 text-[15px] font-medium text-brand-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#login" className="py-2 text-[15px] font-medium text-brand-ink">
              Log in
            </a>
            <a
              href="#start"
              className="mt-2 rounded-full bg-brand-red px-5 py-3 text-center text-[15px] font-semibold text-white"
            >
              Start creating — free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
