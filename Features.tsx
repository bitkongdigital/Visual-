import {
  Wand2,
  Layers,
  Image as ImageIcon,
  FileText,
  Palette,
  Share2,
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI Graphic Designer",
    body: "Describe a flyer, poster, or invitation. Kong Visual chooses the layout, type, color, and imagery for you.",
  },
  {
    icon: Layers,
    title: "Full Editor",
    body: "Drag, resize, layer, and align by hand whenever you want more control over the result.",
  },
  {
    icon: ImageIcon,
    title: "Photo Tools",
    body: "Remove backgrounds, enhance faces, erase objects, and upscale images without leaving the canvas.",
  },
  {
    icon: FileText,
    title: "Document Designer",
    body: "Turn a few details into a formatted invoice, letterhead, certificate, or resume.",
  },
  {
    icon: Palette,
    title: "Brand-Aware Output",
    body: "Save your colors and fonts once — every new design picks them up automatically.",
  },
  {
    icon: Share2,
    title: "Export Anywhere",
    body: "Download as PNG, SVG, PDF, or DOCX, sized correctly for print or for the platform you're posting to.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-brand-line py-20 md:py-28">
      <div className="wrap">
        <div className="max-w-lg">
          <span className="eyebrow">What you get</span>
          <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-brand-ink md:text-[36px]">
            One prompt. A complete design system underneath it.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl2 border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-7">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blueTint">
                <f.icon size={18} className="text-brand-blue" />
              </div>
              <h3 className="mt-4 font-display text-[16px] font-semibold text-brand-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-brand-slate">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
