import { ServiceHero } from "@/components/ServiceHero";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Testimonials } from "@/components/Testimonials";
import {
  Layout, Smartphone, Gauge, Search, Code2, BarChart3,
  Zap, ShieldCheck, Sparkles, Eye, MousePointer2, Layers,
} from "lucide-react";

export const metadata = {
  title: "Sitios web profesionales para empresas de servicios — Impulso Digital",
  description:
    "Sitios web diseñados para generar consultas, no solo para verse lindos. Diseño orientado a conversión, velocidad, mobile-first y SEO técnico.",
};

export default function SitiosWebPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Sitios web · Diseño orientado a conversión"
        title={
          <>
            Tu sitio web debería{" "}
            <span className="text-brand-500">vender</span>, no solo verse bien.
          </>
        }
        description="Diseñamos sitios pensados estratégicamente para generar consultas. Cada sección, cada palabra y cada botón están al servicio de un objetivo: convertir visitantes en clientes."
        highlights={[
          { icon: Zap, label: "Lanzamiento en 2-4 semanas" },
          { icon: Smartphone, label: "Mobile-first y responsive" },
          { icon: Gauge, label: "Performance optimizada" },
        ]}
      />

      {/* Problem */}
      <section className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap">
          <SectionHeader
            eyebrow="El problema"
            title="La mayoría de los sitios no convierten."
            description="Tener una web no alcanza. Si los visitantes llegan y se van sin dejar consulta, el problema casi nunca es de tráfico — es del sitio."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { icon: Eye,        title: "Sitios bonitos pero vacíos", text: "Diseño visualmente atractivo sin estrategia comercial. Lindo pero ineficaz." },
              { icon: MousePointer2, title: "Visitantes que no actúan", text: "Llegan, miran, se van. No queda claro qué hacer ni cómo contactar." },
              { icon: Gauge,      title: "Lentos y mal optimizados", text: "Carga lenta, mala experiencia mobile, pésimo SEO técnico. Google los penaliza." },
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

      {/* What we do */}
      <section className="section">
        <div className="wrap">
          <SectionHeader
            eyebrow="Nuestra solución"
            title="Sitios diseñados para producir resultados."
            description="No vendemos plantillas. Diseñamos cada sitio según los objetivos comerciales del negocio, con foco obsesivo en conversión y performance."
          />

          <div className="mt-12 md:mt-16">
            <FeatureGrid
              cols={3}
              features={[
                { icon: Layout,    title: "Diseño orientado a conversión", description: "Estructura, jerarquía visual y copy diseñados para generar consultas." },
                { icon: Smartphone,title: "Mobile-first y responsive",     description: "Más del 70% del tráfico es mobile. Tu sitio funciona perfecto en cualquier pantalla." },
                { icon: Gauge,     title: "Performance optimizada",        description: "Carga rápida, Lighthouse 90+, sin elementos pesados que ahuyenten visitantes." },
                { icon: Search,    title: "SEO técnico cuidado",           description: "Estructura semántica, metadatos, sitemap y schemas para que Google te encuentre." },
                { icon: BarChart3, title: "Métricas e integraciones",      description: "Google Analytics, formularios conectados a tu CRM o email, tracking de eventos." },
                { icon: Code2,     title: "Construido con tecnología moderna", description: "Next.js, React y stack profesional. Mantenible, seguro y escalable." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Two-column: types of sites */}
      <section className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap">
          <SectionHeader
            eyebrow="Tipos de proyectos"
            title="Adaptamos el sitio al objetivo del negocio."
            align="left"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-ink-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-500 mb-5">
                <Layers size={22} />
              </div>
              <h3 className="display text-2xl text-ink-900 mb-3">Landing page</h3>
              <p className="text-ink-500 mb-6 leading-relaxed">
                Una sola página enfocada en un objetivo: capturar leads. Ideal
                para campañas de Google Ads o lanzamientos puntuales.
              </p>
              <ul className="space-y-2 text-sm text-ink-700">
                {["Diseño centrado en un solo CTA", "Tiempo de carga ultra-rápido", "Integración directa con campañas pagas", "Tracking completo de conversiones"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-ink-900 text-white border border-ink-900">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-brand-300 mb-5">
                <Sparkles size={22} />
              </div>
              <h3 className="display text-2xl mb-3">Sitio institucional</h3>
              <p className="text-ink-200 mb-6 leading-relaxed">
                Múltiples páginas para empresas que necesitan presentar
                servicios, equipo, blog y casos de éxito en una estructura ordenada.
              </p>
              <ul className="space-y-2 text-sm text-ink-100">
                {["Múltiples secciones organizadas", "Blog/recursos opcional", "Sistema de contenido editable", "SEO técnico avanzado"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-brand-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="section">
        <div className="wrap grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Proceso"
              title="Cómo construimos tu sitio."
              description="Un proceso colaborativo donde sos parte de las decisiones clave, sin que tengas que ocuparte de los aspectos técnicos."
            />
          </div>
          <div>
            <ProcessTimeline
              steps={[
                { title: "Estrategia y wireframes", description: "Definimos objetivos, mensajes clave y estructura de cada sección.", duration: "Semana 1" },
                { title: "Diseño visual", description: "Diseñamos la identidad visual del sitio. Vos aprobás antes de pasar a desarrollo.", duration: "Semana 2" },
                { title: "Desarrollo", description: "Construimos el sitio con tecnología moderna. Optimizado para velocidad y SEO.", duration: "Semanas 3-4" },
                { title: "Lanzamiento y soporte", description: "Configuramos analytics, formularios y dominio. Acompañamos los primeros meses.", duration: "A partir del lanzamiento" },
              ]}
            />
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactSection
        service="sitios-web"
        title="Construyamos un sitio que convierta."
        subtitle="Contanos sobre tu negocio y armamos una propuesta con scope, tiempos e inversión adaptada al proyecto."
      />
    </>
  );
}
