import { HomeHero } from "@/components/HomeHero";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { CaseStudies } from "@/components/CaseStudies";
import { ContactSection } from "@/components/ContactSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Workflow, Target, Globe, ShieldCheck, Gauge, MessagesSquare } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Trust strip */}
      <section className="border-y border-ink-100 bg-ink-50/40">
        <div className="wrap py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
          {[
            { icon: ShieldCheck, label: "Procesos transparentes" },
            { icon: Gauge,       label: "Optimización continua" },
            { icon: MessagesSquare, label: "Trato directo" },
            { icon: Target,      label: "Foco en resultados" },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-ink-600">
              <Icon size={18} className="text-brand-500 shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="section">
        <div className="wrap">
          <SectionHeader
            eyebrow="Nuestros servicios"
            title="Tres formas de ordenar tu canal comercial."
            description="Pueden funcionar por separado o combinarse en un sistema completo. Cada uno está diseñado para resolver un problema concreto del negocio."
          />

          <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-5 md:gap-6">
            <ServiceCard
              number="01 / Sistema completo"
              icon={Workflow}
              title="Sistema de ventas"
              description="Captación + conversión + seguimiento integrados. Para empresas que quieren un sistema comercial predecible de extremo a extremo."
              bullets={[
                "Generación de leads multi-canal",
                "Landing optimizada para conversión",
                "CRM en Google Sheets sin licencias",
                "Proceso de seguimiento definido",
              ]}
              href="/sistema-ventas"
              featured
            />
            <ServiceCard
              number="02 / Captación"
              icon={Target}
              title="Campañas Google Ads"
              description="Aparecé cuando tus clientes te están buscando. Generación de leads calificados con presupuesto controlado y escalable."
              bullets={[
                "Configuración estratégica desde cero",
                "Segmentación por intención de compra",
                "Optimización semanal continua",
                "Reportes mensuales claros",
              ]}
              href="/google-ads"
            />
            <ServiceCard
              number="03 / Presencia"
              icon={Globe}
              title="Sitios web"
              description="Tu presencia online diseñada para generar consultas, no solo para verse linda. Páginas pensadas estratégicamente."
              bullets={[
                "Diseño orientado a conversión",
                "Velocidad y SEO técnico cuidado",
                "Mobile-first y accesible",
                "Métricas y formularios integrados",
              ]}
              href="/sitios-web"
            />
          </div>
        </div>
      </section>

      <CaseStudies />
      <Testimonials />

      <ContactSection
        service="general"
        title="Hablemos de tu negocio."
        subtitle="¿Tenés una idea, una duda o querés ver una propuesta concreta para tu empresa? Escribinos y agendamos una primera llamada."
      />
    </>
  );
}
