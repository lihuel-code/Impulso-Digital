import Link from "next/link";
import { CheckCircle2, ArrowLeft, Calendar, Mail } from "lucide-react";

const SERVICE_LABELS: Record<string, string> = {
  "google-ads": "las campañas de Google Ads",
  "sitios-web": "el diseño de tu sitio web",
  "general": "tu proyecto",
};

type Props = {
  searchParams: { s?: string };
};

export const metadata = {
  title: "Gracias por tu consulta — Impulso Digital",
  description: "Recibimos tu mensaje. Te respondemos en menos de 24 horas hábiles.",
  robots: { index: false, follow: false },
};

export default function GraciasPage({ searchParams }: Props) {
  const service = searchParams?.s || "general";
  const label = SERVICE_LABELS[service] || "consulta general";

  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[400px] bg-faint-grid opacity-50 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="wrap relative max-w-2xl">
        <div className="reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 text-brand-500 mb-8">
            <CheckCircle2 size={32} strokeWidth={2} />
          </div>

          <p className="eyebrow">Mensaje recibido</p>
          <h1 className="display text-4xl md:text-6xl text-ink-900 leading-[1.05] tracking-tight mt-5 mb-6">
            Gracias por tu interés en{" "}
            <span className="text-brand-500 italic">{label}</span>.
          </h1>
          <p className="text-lg text-ink-500 leading-relaxed mb-10 max-w-xl">
            Recibimos tu mensaje. Vamos a estudiar tu situación y responderte
            personalmente en menos de 24 horas hábiles con una propuesta
            concreta o las preguntas que necesitemos para armarla.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="p-5 rounded-2xl bg-ink-50/50 border border-ink-100">
              <Mail size={18} className="text-brand-500 mb-3" />
              <p className="font-semibold text-ink-900 text-sm mb-1">Revisá tu email</p>
              <p className="text-ink-500 text-sm">Te enviaremos una confirmación en los próximos minutos.</p>
            </div>
            <div className="p-5 rounded-2xl bg-ink-50/50 border border-ink-100">
              <Calendar size={18} className="text-brand-500 mb-3" />
              <p className="font-semibold text-ink-900 text-sm mb-1">Próximo paso</p>
              <p className="text-ink-500 text-sm">Coordinaremos una llamada de 20 minutos para entender tu negocio.</p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-brand-500 transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
