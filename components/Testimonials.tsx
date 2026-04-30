import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "En tres meses pasamos de no saber de dónde iban a salir los próximos clientes a tener un flujo previsible de consultas. Cambió la forma en que planificamos el negocio.",
    author: "Lucía R.",
    role: "Directora",
    company: "Estudio jurídico",
    initials: "LR",
  },
  {
    quote:
      "Lo que más valoro es la claridad. Cada mes sé exactamente qué pasó con la inversión, qué funcionó y qué se ajustó. No hay humo ni promesas inflacionarias.",
    author: "Martín G.",
    role: "Socio",
    company: "Consultora contable",
    initials: "MG",
  },
  {
    quote:
      "Veníamos probando con freelancers sin un sistema claro. Ahora tenemos campañas, landing y seguimiento alineados. Las consultas que llegan ya están calificadas.",
    author: "Florencia A.",
    role: "Gerenta comercial",
    company: "Clínica odontológica",
    initials: "FA",
  },
];

export function Testimonials({
  items = DEFAULT_TESTIMONIALS,
}: {
  items?: Testimonial[];
}) {
  return (
    <section className="section bg-ink-50/50 border-y border-ink-100">
      <div className="wrap">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow">Testimonios</p>
            <h2 className="display text-3xl md:text-5xl mt-4 text-ink-900">
              Lo que dicen quienes ya confían en nosotros.
            </h2>
          </div>
          <p className="text-ink-500 max-w-sm">
            Resultados reales de empresas de servicios que decidieron ordenar su
            canal comercial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <article
              key={i}
              className="relative p-7 rounded-2xl bg-white border border-ink-100 hover:border-brand-200 transition-colors"
            >
              <Quote
                className="absolute top-6 right-6 text-brand-100"
                size={28}
                strokeWidth={1.5}
              />
              <p className="text-ink-700 leading-relaxed mb-8 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-ink-100">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white font-display font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-ink-900 text-sm">{t.author}</p>
                  <p className="text-xs text-ink-400">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
