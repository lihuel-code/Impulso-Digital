import { Button } from "./Button";
import { Search, ArrowRight, Sparkles } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden isolate">
      {/* Background Video (Subtle Loop) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none -z-10"
        src="/hero-bg.mp4"
      />

      {/* Background atmospherics */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-faint-grid opacity-50 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="wrap relative">
        <div className="reveal max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-ink-100 shadow-soft mb-8">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-brand-500 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-500" />
            </span>
            <span className="text-xs font-medium text-ink-700">
              Sistemas de captación para empresas de servicios
            </span>
          </div>

          {/* Display headline */}
          <h1 className="display text-[2.5rem] sm:text-6xl md:text-7xl text-ink-900 leading-[1.02] tracking-tight mb-7">
            Convertimos tu negocio<br />
            en un{" "}
            <span className="relative inline-block">
              <span className="relative z-10">imán de clientes</span>
              <span className="absolute bottom-1.5 left-0 right-0 h-3 md:h-4 bg-accent-100/80 -z-0 -skew-x-3" />
            </span>
            <span className="text-brand-500">.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed mb-10">
            Generamos un flujo previsible de oportunidades comerciales para tu
            empresa de servicios. Dos servicios que se combinan o funcionan
            por separado: <span className="text-ink-900 font-medium">Google Ads</span> y{" "}
            <span className="text-ink-900 font-medium">Sitios web</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Button href="#servicios" variant="primary" arrow>
              Ver servicios
            </Button>
            <Button href="https://wa.me/5491133980499" variant="ghost" arrow>
              Hablar con alguien
            </Button>
          </div>
        </div>

        {/* Decorative search bar mockup */}
        <div className="mt-16 md:mt-24 relative">
          <div className="relative max-w-3xl mx-auto">
            <div className="flex items-center gap-3 px-5 py-4 md:px-6 md:py-5 bg-white rounded-2xl border border-ink-100 shadow-card">
              <Search className="text-brand-500 shrink-0" size={20} />
              <span className="flex-1 text-ink-500 text-base md:text-lg">
                servicios profesionales en mi zona
                <span className="inline-block w-0.5 h-5 ml-1 bg-brand-500 align-middle animate-blink" />
              </span>
              <span className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold">
                <Sparkles size={12} />
                Tu negocio aparece acá
              </span>
            </div>

            {/* Result chips */}
            <div className="mt-3 grid grid-cols-3 gap-2 md:gap-3 text-center">
              <div className="px-3 py-3 md:py-4 rounded-xl bg-ink-50 border border-ink-100 text-xs md:text-sm">
                <p className="text-ink-400 mb-1 text-[10px] md:text-xs uppercase tracking-wider">01. Aparece</p>
                <p className="font-semibold text-ink-900">tu anuncio</p>
              </div>
              <div className="px-3 py-3 md:py-4 rounded-xl bg-brand-50 border border-brand-100 text-xs md:text-sm">
                <p className="text-brand-500 mb-1 text-[10px] md:text-xs uppercase tracking-wider font-semibold">02. Visitan</p>
                <p className="font-semibold text-ink-900">tu landing</p>
              </div>
              <div className="px-3 py-3 md:py-4 rounded-xl bg-ink-900 border border-ink-900 text-xs md:text-sm">
                <p className="text-accent-400 mb-1 text-[10px] md:text-xs uppercase tracking-wider font-semibold">03. Se convierten</p>
                <p className="font-semibold text-white">en clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
