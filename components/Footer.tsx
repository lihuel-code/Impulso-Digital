import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100">
      <div className="wrap py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-5">
            <Logo className="h-8 w-8" />
            <span className="font-display text-xl font-semibold text-white">
              Impulso<span className="text-brand-500">.</span>
            </span>
          </div>
          <p className="text-ink-200 max-w-md leading-relaxed">
            Sistemas de generación de clientes para empresas de servicios. 
            Captamos, convertimos y escalamos tu canal comercial.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-300 mb-4">
            Servicios
          </p>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/google-ads" className="hover:text-brand-400 transition-colors">Campañas Google Ads</Link></li>
            <li><Link href="/sitios-web" className="hover:text-brand-400 transition-colors">Sitios web</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-300 mb-4">
            Contacto
          </p>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center gap-2.5"><Mail size={14} className="text-brand-400" /> gestion@impulsodigitalweb.com.ar</li>
            <li className="flex items-center gap-2.5"><Phone size={14} className="text-brand-400" /> +54 9 11 3398-0499</li>
            <li className="flex items-center gap-2.5"><MapPin size={14} className="text-brand-400" /> Buenos Aires, Argentina</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-300">
          <p>© {new Date().getFullYear()} Impulso Digital. Todos los derechos reservados.</p>
          <p>Hecho para empresas que crecen con método.</p>
        </div>
      </div>
    </footer>
  );
}
