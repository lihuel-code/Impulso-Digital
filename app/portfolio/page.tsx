import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ContactSection } from "@/components/ContactSection";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "Portfolio de sitios web — Impulso Digital",
  description: "Explorá algunos de los sitios web que diseñamos y desarrollamos para empresas de servicios, enfocados en performance y conversión.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[400px] bg-faint-grid opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        
        <div className="wrap relative">
          <SectionHeader
            eyebrow="Trabajos realizados"
            title="Sitios diseñados para generar resultados."
            description="Acá podés ver una selección de los proyectos web que desarrollamos. Cada uno está pensado estratégicamente para el nicho específico de nuestros clientes."
            align="center"
          />
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap">
          <PortfolioGrid showViewAllButton={false} />
        </div>
      </section>

      <ContactSection
        service="sitios-web"
        title="¿Querés que tu sitio sea el próximo?"
        subtitle="Hablemos sobre tu proyecto y armamos una propuesta adaptada a lo que tu negocio necesita para crecer."
      />
    </>
  );
}
