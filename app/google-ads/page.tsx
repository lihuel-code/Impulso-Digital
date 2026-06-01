import { ServiceHero } from "@/components/ServiceHero";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Testimonials } from "@/components/Testimonials";
import {
  Search, Crosshair, SlidersHorizontal, RefreshCw, Star,
  TrendingUp, BarChart3, ShieldCheck, Zap, Target,
} from "lucide-react";

export const metadata = {
  title: "Campañas Google Ads para empresas de servicios — Impulso Digital",
  description:
    "Aparecé cuando tus clientes te buscan. Gestión de campañas Google Ads enfocadas en generación de leads calificados con inversión escalable.",
};

export default function GoogleAdsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Campañas Google Ads · Generación de leads"
        service="google-ads"
        title={
          <>
            Generación de clientes a través de{" "}
            <span className="text-brand-500">Google</span>.
          </>
        }
        description="Aparecé cuando tus clientes te están buscando. Gestión profesional de campañas de Google Ads enfocadas en generar leads calificados, no clics inútiles."
        highlights={[
          { icon: Zap, label: "Primeras consultas en 7-10 días" },
          { icon: Target, label: "Solo leads con intención de compra" },
          { icon: BarChart3, label: "Reportes mensuales claros" },
        ]}
      />

      {/* Problem */}
      <section className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap">
          <SectionHeader
            eyebrow="El problema"
            title="El flujo de clientes no debería ser una incógnita."
            description="Dos realidades habituales en empresas de servicios: ausencia de un canal previsible y, cuando se invierte, falta de método para que esa inversión rinda."
          />

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <div className="p-7 md:p-8 rounded-2xl bg-white border-l-4 border-l-red-500 border-y border-r border-ink-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-3">Sin canal activo</p>
              <h3 className="display text-2xl text-ink-900 mb-3">Meses sin consultas previsibles</h3>
              <p className="text-ink-500 leading-relaxed">
                El negocio depende de referencias o contactos directos sin un sistema escalable. Cada mes empieza desde cero.
              </p>
            </div>
            <div className="p-7 md:p-8 rounded-2xl bg-white border-l-4 border-l-accent-400 border-y border-r border-ink-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-500 mb-3">Invirtiendo sin método</p>
              <h3 className="display text-2xl text-ink-900 mb-3">Plata gastada, resultados borrosos</h3>
              <p className="text-ink-500 leading-relaxed">
                Campañas sin segmentación clara, sin optimización continua y sin medición real de qué generó cada peso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity (with visual) */}
      <section className="section">
        <div className="wrap grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="La oportunidad"
              title="Capturás clientes en el momento exacto."
              description="Google Ads aparece cuando alguien busca activamente lo que ofrecés. La diferencia entre esperar a que te encuentren y estar exactamente donde te necesitan."
            />
            <ul className="mt-8 space-y-4">
              {[
                { icon: Search,    title: "Intención activa",      desc: "Tu anuncio aparece cuando la persona busca tu solución." },
                { icon: Target,    title: "Segmentación precisa", desc: "Llegás solo a quienes califican por ubicación, perfil y momento." },
                { icon: TrendingUp,title: "Escalabilidad medible", desc: "Cada peso invertido es rastreable y ajustable según resultados." },
              ].map((o, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-500 shrink-0">
                    <o.icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900 mb-0.5">{o.title}</p>
                    <p className="text-ink-500 text-[15px]">{o.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual: animated mock search */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl border border-ink-100 shadow-card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6 text-xs text-ink-400">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-3 truncate">google.com/search</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-full border border-ink-100 mb-6">
                <Search size={16} className="text-brand-500" />
                <span className="text-ink-700 text-sm">
                  servicios profesionales <span className="bg-accent-100 px-1 rounded">cerca mío</span>
                </span>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-brand-50 border border-brand-100">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-500 text-white mb-2">ANUNCIO</span>
                  <p className="font-semibold text-ink-900 mb-1">Tu negocio aparece acá</p>
                  <p className="text-xs text-ink-500">Profesionales con experiencia. Consultá hoy.</p>
                </div>
                <div className="p-4 rounded-xl bg-ink-50/50">
                  <p className="font-medium text-ink-700 text-sm">Resultado orgánico</p>
                  <p className="text-xs text-ink-400">Otra empresa</p>
                </div>
                <div className="p-4 rounded-xl bg-ink-50/50">
                  <p className="font-medium text-ink-700 text-sm">Resultado orgánico</p>
                  <p className="text-xs text-ink-400">Otra empresa</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-brand-600 text-white text-xs font-semibold shadow-card">
              Posición #1
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap">
          <SectionHeader
            eyebrow="Qué incluye"
            title="Todo lo necesario para generar resultados."
            description="Desde la configuración inicial hasta la optimización mensual continua."
          />
          <div className="mt-12">
            <FeatureGrid
              cols={3}
              features={[
                { icon: SlidersHorizontal, title: "Configuración estratégica",   description: "Investigación de palabras clave, estructura de campañas y configuración de tracking." },
                { icon: Crosshair,         title: "Segmentación por intención", description: "Anuncios dirigidos solo a personas con intención real de compra. Exclusión de tráfico irrelevante." },
                { icon: RefreshCw,         title: "Optimización continua",      description: "Ajustes semanales de pujas, presupuesto y palabras clave. Reportes mensuales con insights." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section">
        <div className="wrap">
          <SectionHeader
            eyebrow="Planes e inversión"
            title="Inversión escalable según tus objetivos."
            description="La cantidad de campañas se define según estrategia y resultados, no por un número fijo."
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {/* Plan Base */}
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-ink-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-3">Plan Base</p>
              <h3 className="display text-3xl text-ink-900 mb-2">Validar el canal</h3>
              <p className="text-ink-500 mb-8">Para empezar con Google Ads de forma profesional sin inversión masiva.</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Hasta 3 frentes activos de captación",
                  "Configuración inicial y optimización mensual",
                  "Reportes de rendimiento",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-ink-700">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-ink-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-1">Desde</p>
                <p className="display text-3xl font-semibold text-ink-900">$300.000<span className="text-base text-ink-400 font-sans font-normal">/mes</span></p>
              </div>
            </div>

            {/* Plan Scale - featured */}
            <div className="relative p-8 md:p-10 rounded-3xl bg-brand-500 text-white shadow-card">
              <div className="absolute -top-3 right-8 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-brand-600 text-xs font-semibold shadow-card">
                <Star size={12} fill="currentColor" />
                Recomendado
              </div>
              
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-400 mb-3">Plan Scale</p>
              <h3 className="display text-3xl mb-2">Escalar volumen</h3>
              <p className="text-blue-100 mb-8">Para empresas que ya validaron Google Ads y quieren aumentar el alcance.</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Hasta 5–8 frentes activos",
                  "Cobertura ampliada (geográfica o por servicio)",
                  "Optimización semanal y reporting avanzado",
                  "Soporte prioritario",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-400 mb-1">Desde</p>
                <p className="display text-3xl font-semibold">$500.000–600.000<span className="text-base text-blue-200 font-sans font-normal">/mes</span></p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-ink-400 italic text-center">
            Valores en ARS. No incluyen el presupuesto destinado a pauta publicitaria.
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Proceso"
              title="Cómo trabajamos juntos."
              description="Tres fases claras desde el análisis inicial hasta la optimización continua."
            />
          </div>
          <div>
            <ProcessTimeline
              steps={[
                { title: "Análisis inicial", description: "Estudiamos tu negocio, competencia y palabras clave relevantes.", duration: "Semana 1" },
                { title: "Implementación", description: "Configuramos campañas, anuncios y tracking. Activamos las primeras consultas.", duration: "Semanas 2-3" },
                { title: "Optimización continua", description: "Ajustamos cada semana según resultados para mejorar el rendimiento mes a mes.", duration: "Continuo" },
              ]}
            />
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactSection
        service="google-ads"
        title="Aparecer cuando te buscan cambia el flujo de clientes."
        subtitle="Te armamos una propuesta concreta para Google Ads adaptada a tu industria y zona."
      />
    </>
  );
}
