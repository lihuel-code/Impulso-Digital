import { ContactForm } from "./ContactForm";
import { Mail, Phone, Clock } from "lucide-react";

type ContactSectionProps = {
  service: string;
  title?: string;
  subtitle?: string;
};

export function ContactSection({
  service,
  title,
  subtitle,
}: ContactSectionProps) {
  return (
    <section id="contacto" className="section relative overflow-hidden bg-brand-50 border-y border-ink-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-brand-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="wrap relative grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: contact info */}
        <div>
          <p className="eyebrow !text-brand-600">Contacto directo</p>
          <h2 className="display text-3xl md:text-5xl mt-5 mb-6 text-ink-900 leading-[1.05]">
            {title || "Contanos qué necesitás resolver."}
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed mb-10 max-w-md">
            {subtitle || 
              "Te respondemos personalmente. Sin intermediarios, sin formularios eternos, sin agendar tres reuniones para una consulta."
            }
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-ink-100 text-brand-500 shadow-soft shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-400 font-semibold mb-1">Email</p>
                <a href="mailto:gestion@impulsodigitalweb.com.ar" className="text-ink-900 font-medium hover:text-brand-500 transition-colors">
                  gestion@impulsodigitalweb.com.ar
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-ink-100 text-brand-500 shadow-soft shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-400 font-semibold mb-1">Teléfono</p>
                <a href="tel:+5491133980499" className="text-ink-900 font-medium hover:text-brand-500 transition-colors">
                  +54 9 11 3398-0499
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-ink-100 text-brand-500 shadow-soft shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-400 font-semibold mb-1">Horario de respuesta</p>
                <p className="text-ink-800 font-medium">Lun a Vie · 9 a 19h</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-card p-7 md:p-10">
            <ContactForm
              service={service}
              title="Pedir propuesta"
              subtitle="Te respondemos en menos de 24 horas hábiles."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
