import { Button } from "./Button";
import { ContactForm } from "./ContactForm";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type ServiceHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  highlights: { icon: LucideIcon; label: string }[];
  service?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export function ServiceHero({
  eyebrow,
  title,
  description,
  highlights,
  service = "general",
  ctaPrimary = { label: "Pedir propuesta", href: "#contacto" },
  ctaSecondary = { label: "Cómo funciona", href: "#proceso" },
}: ServiceHeroProps) {
  return (
    <section className="relative pt-12 md:pt-16 pb-20 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none -z-10"
        src="/hero-bg.mp4"
      />

      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[500px] bg-faint-grid opacity-50 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">
          {/* Left: title + description */}
          <div className="reveal">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display text-4xl sm:text-5xl md:text-6xl text-ink-900 leading-[1.05] tracking-tight mt-6 mb-7">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed mb-9">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Button href={ctaPrimary.href} variant="primary" arrow>
                {ctaPrimary.label}
              </Button>
              <Button href={ctaSecondary.href} variant="ghost" arrow>
                {ctaSecondary.label}
              </Button>
            </div>

            {/* Highlights row */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink-100 shadow-soft text-sm text-ink-700"
                >
                  <h.icon size={14} className="text-brand-500" />
                  {h.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: inline contact form */}
          <div className="relative lg:mt-4">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-card border border-ink-100 p-7 md:p-8">
              <ContactForm
                service={service}
                title="Pedir propuesta"
                subtitle="Te respondemos en menos de 24 hs hábiles."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
