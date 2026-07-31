import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-brand-line py-20 md:py-28">
      <div className="wrap flex flex-col items-center gap-6 rounded-xl2 bg-brand-blueDark px-8 py-16 text-center md:py-20">
        <span className="eyebrow text-brand-blue/80" style={{ color: "#7FA6FF" }}>
          Get in touch
        </span>
        <h2 className="max-w-xl font-display text-[28px] font-semibold leading-tight text-white md:text-[34px]">
          Questions about a plan, a template, or a bulk order? We reply within one business day.
        </h2>
        <a
          href="mailto:hello@kongvisual.com"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-brand-blueDark transition-transform hover:scale-[1.03]"
        >
          <Mail size={16} />
          hello@kongvisual.com
        </a>
      </div>
    </section>
  );
}
