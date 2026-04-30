import { TrendingUp } from "lucide-react";

type Case = {
  industry: string;
  challenge: string;
  result: string;
  metrics: { label: string; value: string }[];
};

const DEFAULT_CASES: Case[] = [
  {
    industry: "Estudio jurídico",
    challenge: "Sin canal previsible de captación. Dependía 100% de referencias.",
    result:
      "En 4 meses: estructura de campañas + landing + sistema de seguimiento.",
    metrics: [
      { label: "Leads/mes", value: "4 → 22" },
      { label: "Costo por lead", value: "−38%" },
      { label: "Cierres", value: "+3x" },
    ],
  },
  {
    industry: "Clínica odontológica",
    challenge: "Inversión en redes sin retorno claro. Consultas no calificadas.",
    result:
      "Reorientamos a Google Ads con segmentación por intención + agendamiento online.",
    metrics: [
      { label: "Consultas calificadas", value: "+140%" },
      { label: "Tasa de agendamiento", value: "+62%" },
      { label: "ROAS", value: "4.2x" },
    ],
  },
];

export function CaseStudies({ items = DEFAULT_CASES }: { items?: Case[] }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow">Casos de éxito</p>
          <h2 className="display text-3xl md:text-5xl mt-4 text-ink-900">
            Resultados que se pueden medir.
          </h2>
          <p className="mt-5 text-lg text-ink-500 leading-relaxed">
            Cada proyecto se diseña para producir números concretos. Estos son
            algunos ejemplos representativos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((c, i) => (
            <article
              key={i}
              className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-ink-50 to-white border border-ink-100 hover:border-brand-200 transition-all"
            >
              {/* Floating tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-ink-100 mb-6">
                <TrendingUp size={12} className="text-brand-500" />
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-700">
                  {c.industry}
                </span>
              </div>

              <h3 className="display text-xl md:text-2xl mb-3 text-ink-900 leading-tight">
                {c.challenge}
              </h3>
              <p className="text-ink-500 mb-8 leading-relaxed">{c.result}</p>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-ink-100">
                {c.metrics.map((m, k) => (
                  <div key={k}>
                    <p className="display text-2xl md:text-3xl font-semibold text-brand-500 leading-none">
                      {m.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-ink-400 mt-2 font-medium">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink-400 italic">
          Resultados representativos. Cada caso varía según industria, ticket y mercado.
        </p>
      </div>
    </section>
  );
}
