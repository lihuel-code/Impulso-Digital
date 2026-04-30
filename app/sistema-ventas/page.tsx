import { ServiceHero } from "@/components/ServiceHero";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Testimonials } from "@/components/Testimonials";
import {
  Megaphone, MousePointerClick, Database, Handshake,
  AlertTriangle, TrendingDown, EyeOff, Sparkles, Zap, ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Sistema de ventas para empresas de servicios — Impulso Digital",
  description:
    "Sistema integral de captación y cierre de clientes: Google Ads + landing optimizada + CRM en Google Sheets + proceso de seguimiento.",
};

export default function SistemaVentasPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Sistema de ventas · Solución integral"
        title={
          <>
            Un sistema que convierte tu inversión en marketing en{" "}
            <span className="text-brand-500">clientes reales</span>.
          </>
        }
        description="Captación, conversión y seguimiento integrados en una sola estructura. Diseñado para empresas que quieren dejar de improvisar y crecer con método."
        highlights={[
          { icon: Zap, label: "Implementación en 2-3 semanas" },
          { icon: ShieldCheck, label: "Sin licencias mensuales de software" },
          { icon: Sparkles, label: "Proceso comercial replicable" },
        ]}
      />

      {/* Problem */}
      <section className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap">
          <SectionHeader
            eyebrow="El problema"
            title="No es generar leads. Es no convertirlos."
            description="La mayoría de las empresas con inversión publicitaria activa pierden más oportunidades de las que cierran. El cuello de botella casi nunca está en la captación."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { icon: AlertTriangle, title: "Leads sin respuesta rápida", text: "Las consultas que no se atienden en minutos pierden hasta 80% de su valor." },
              { icon: TrendingDown,  title: "Falta de seguimiento sostenido", text: "El 80% de los cierres ocurren después del 5º contacto. Casi nadie llega." },
              { icon: EyeOff,        title: "Sin visibilidad real", text: "No saben qué canal convierte mejor ni dónde se está perdiendo el dinero." },
            ].map((p, i) => (
              <div key={i} className="p-7 rounded-2xl bg-white border border-ink-100">
                <p.icon className="text-red-500 mb-4" size={24} />
                <h3 className="display text-xl text-ink-900 mb-2">{p.title}</h3>
                <p className="text-ink-500 leading-relaxed text-[15px]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / What's included */}
      <section className="section">
        <div className="wrap">
          <SectionHeader
            eyebrow="La solución"
            title="Sistema completo de captación y cierre."
            description="Una sola estructura que conecta inversión publicitaria, conversión y proceso comercial. Todo trabaja para un mismo objetivo: clientes, no consultas."
          />

          <div className="mt-12 md:mt-16">
            <FeatureGrid
              cols={4}
              features={[
                { icon: Megaphone,         title: "Generación de leads",   description: "Campañas en Google Ads enfocadas en intención real de compra." },
                { icon: MousePointerClick, title: "Landing optimizada",    description: "Una página clara, rápida y diseñada para convertir, no para decorar." },
                { icon: Database,          title: "CRM en Google Sheets",  description: "Sistema de seguimiento liviano, sin licencias mensuales, editable por todo el equipo." },
                { icon: Handshake,         title: "Proceso de cierre",     description: "Un flujo definido que acompaña al cliente hasta la decisión final." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Cómo funciona"
              title="De la confirmación al sistema funcionando."
              description="Un proceso ordenado que no requiere que vos te ocupes de los detalles técnicos. Nosotros implementamos, vos validás."
            />
          </div>
          <div>
            <ProcessTimeline
              steps={[
                { title: "Onboarding e implementación", description: "Definimos objetivos, accesos y configuración técnica.", duration: "Días 1-3" },
                { title: "Setup y puesta en marcha", description: "Campañas, landing y CRM activos. Primeros leads en circulación.", duration: "Días 4-14" },
                { title: "Optimización continua", description: "Ajustes semanales basados en datos reales. Mejora mes a mes.", duration: "Día 15 en adelante" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="section">
        <div className="wrap">
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>Diferencial</p>
            <h2 className="display text-3xl md:text-6xl mt-5 leading-[1.05] text-ink-900">
              No es marketing.<br />
              <span className="italic">Es un sistema de ventas</span><span className="text-brand-500">.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-500 max-w-2xl mx-auto leading-relaxed">
              No solo generamos leads. Ordenamos el proceso comercial completo,
              enfocados en lo único que importa: el cliente cerrado, no el clic.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactSection
        service="sistema-ventas"
        title="Listo para construir tu sistema de ventas."
        subtitle="Te armamos una propuesta concreta con planes, tiempos e inversión estimada para tu negocio."
      />
    </>
  );
}
