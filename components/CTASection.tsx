import { Button } from "./Button";

type CTASectionProps = {
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({
  title,
  description,
  primaryCta = { label: "Hablar con alguien", href: "#contacto" },
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-3xl bg-brand-50 border border-ink-100 p-10 md:p-16">
          {/* Decorative gradient */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl">
            <h2 className="display text-3xl md:text-5xl mb-5 leading-tight text-ink-900">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-ink-500 mb-8 leading-relaxed">
                {description}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              <Button href={primaryCta.href} variant="primary" arrow className="!bg-brand-500 !text-white hover:!bg-brand-600">
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="ghost" arrow className="!text-ink-700 hover:!text-brand-500">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
