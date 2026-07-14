import { HomeHero } from "@/components/HomeHero";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { CaseStudies } from "@/components/CaseStudies";
import { ContactSection } from "@/components/ContactSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Target, Globe, ShieldCheck, Gauge, MessagesSquare, MapPin } from "lucide-react";

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
      <section id="servicios" className="section relative overflow-hidden isolate">
        {/* Background atmospherics – same vibe as HomeHero */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none -z-10"
          src="/hero-bg.mp4"
        />
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[500px] bg-faint-grid opacity-40 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="wrap relative">
          <SectionHeader
            eyebrow="Nuestros servicios"
            title="Dos formas de ordenar tu canal comercial."
            description="Pueden funcionar por separado o combinarse en un sistema completo. Cada uno está diseñado para resolver un problema concreto del negocio."
          />

          <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ServiceCard
              number="01 / Captación"
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
              number="02 / Presencia"
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
            <ServiceCard
              number="03 / Local"
              icon={MapPin}
              title="Google Ads Local"
              description="Aparecé arriba en Google y en el mapa cuando te buscan cerca de tu local. Campaña local + ficha de Google."
              bullets={[
                "Campaña de búsqueda local",
                "Ficha de Google optimizada",
                "Medición de llamadas y rutas",
                "Reportes mensuales claros",
              ]}
              href="/primero-en-tu-zona"
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
