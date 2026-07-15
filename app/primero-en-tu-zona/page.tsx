import { ServiceHero } from "@/components/ServiceHero";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ContactSection } from "@/components/ContactSection";
import {
  MapPin,
  TrendingUp,
  Search,
  MessageCircle,
  Star,
  Phone,
  Navigation,
  Map,
  BarChart3,
  CheckCircle2,
  XCircle
} from "lucide-react";

export const metadata = {
  title: "Primero en tu Zona · Google Ads para negocios con local | Impulso Digital",
  description:
    "Tu negocio entre los primeros lugares de Google y en el mapa (Google Maps), cuando te buscan cerca de tu local. Y cada consulta que eso genera, contada.",
};

/* ----------------------------- MOCKUPS ----------------------------- */

function LocalMockup() {
  return (
    <div className="w-full max-w-[340px] rounded-xl border border-ink-100 bg-white overflow-hidden shadow-card relative">
      <div className="h-24 w-full relative overflow-hidden bg-ink-50">
        {/* Decorative map lines */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="40" x2="100%" y2="20" stroke="currentColor" className="text-brand-500" strokeWidth="2" />
            <line x1="50" y1="0" x2="80" y2="100%" stroke="currentColor" className="text-brand-500" strokeWidth="2" />
            <line x1="150" y1="100%" x2="250" y2="0" stroke="currentColor" className="text-brand-500" strokeWidth="3" />
          </svg>
        </div>
        <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-red-500 fill-red-100 drop-shadow-md" />
      </div>
      <div className="p-4 bg-white border-t border-ink-100 relative z-10 -mt-2 rounded-t-xl">
        <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400 font-bold mb-1">Patrocinado</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[15px] font-semibold text-ink-900">Tu negocio</p>
            <div className="flex items-center gap-1 text-xs mt-0.5">
              <span className="text-yellow-500 font-semibold">4,8</span>
              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
              <span className="text-ink-500">(32)</span>
              <span className="text-ink-500 ml-1">· a 1,2 km</span>
            </div>
            <p className="text-xs text-ink-500 mt-0.5">Abierto ahora</p>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="flex-1 rounded-full border border-ink-200 bg-white py-2 flex justify-center items-center gap-1.5 text-xs font-semibold text-brand-600 shadow-soft">
            <Phone className="h-3.5 w-3.5 text-brand-500" />
            Llamar
          </div>
          <div className="flex-1 rounded-full border border-ink-200 bg-white py-2 flex justify-center items-center gap-1.5 text-xs font-semibold text-brand-600 shadow-soft">
            <Navigation className="h-3.5 w-3.5 text-brand-500" />
            Cómo llegar
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchMockup() {
  return (
    <div className="w-full max-w-[340px] rounded-xl border border-ink-100 bg-white p-4 shadow-card">
      <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400 font-bold mb-1">Patrocinado</p>
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 rounded-full bg-ink-100 flex items-center justify-center text-[10px] text-ink-600">🌐</div>
        <div>
          <p className="text-xs text-ink-900 font-medium leading-none">Tu Negocio</p>
          <p className="text-[10px] text-ink-500">tunegocio.com.ar</p>
        </div>
      </div>
      <h3 className="text-lg font-medium text-brand-600 leading-tight mb-1.5 hover:underline cursor-pointer">
        El Mejor Servicio en Tu Zona
      </h3>
      <p className="text-[13px] text-ink-500 leading-relaxed line-clamp-2">
        Atención profesional garantizada. Reservá tu turno online o vení directamente a nuestro local.
      </p>
      <div className="mt-3 pt-3 border-t border-ink-100 grid gap-2">
        <div className="flex items-center gap-2 text-[11px] text-ink-500">
          <MapPin className="h-3 w-3 text-ink-400" />
          <span>Av. Principal 1234, a 1,2 km</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-ink-500">
          <Phone className="h-3 w-3 text-ink-400" />
          <span>Llamar al 011-1234-5678</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-ink-500">
          <span className="text-yellow-500 font-semibold">4,8</span>
          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <span>Reseñas de clientes</span>
        </div>
      </div>
    </div>
  );
}

function SerpCard() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-ink-100 bg-white p-4 shadow-card sm:p-5 relative">
      <div className="flex items-center gap-3 rounded-full border border-ink-100 bg-ink-50 px-4 py-2.5 mb-6">
        <Search className="h-4 w-4 shrink-0 text-brand-500" />
        <span className="truncate text-sm text-ink-700 font-medium">kinesiólogo cerca de mí</span>
      </div>

      <div className="mt-4 rounded-xl border-2 border-brand-500 bg-brand-50 p-4 relative overflow-hidden">
        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-500 text-white mb-2 tracking-wider">
          PATROCINADO
        </span>
        <div className="mt-1 flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-[15px] font-semibold text-ink-900">Tu negocio</p>
              <div className="flex items-center gap-1 text-xs mt-0.5">
                <span className="text-yellow-500 font-semibold">4,8</span>
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-ink-500">(32)</span>
              </div>
            </div>
            <p className="mt-0.5 text-xs text-ink-500 font-medium">A 1,2 km · Abierto ahora</p>
          </div>
          <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-red-500 fill-red-100" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Llamar", "Cómo llegar", "WhatsApp"].map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-white border border-brand-200 px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-soft"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-3" aria-hidden="true">
        {[0, 1].map((i) => (
          <div key={i} className="rounded-xl border border-ink-100 bg-ink-50/50 p-4 opacity-70">
            <div className="h-2.5 w-32 rounded bg-ink-200" />
            <div className="mt-2 h-2 w-44 rounded bg-ink-100" />
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-xs font-medium text-ink-400">
        Cada "Llamar", "Cómo llegar" y "WhatsApp" queda medido.
      </p>
    </div>
  );
}

/* ------------------------------ PÁGINA ------------------------------ */

export default function PrimeroEnTuZonaPage() {
  return (
    <>
      {/* ================================ HERO ================================ */}
      <ServiceHero
        eyebrow="Nuevo · Para negocios con local"
        service="primero-en-tu-zona"
        title={
          <>
            Destacá en <br />
            tu zona<span className="text-red-500">.</span>
          </>
        }
        description="Tu negocio entre los primeros lugares de Google y en el mapa (Google Maps), cuando te buscan cerca de tu local. Y cada consulta que eso genera, contada."
        highlights={[
          { icon: Search, label: "Aparecé cuando buscan" },
          { icon: MapPin, label: "Destacate en el mapa" },
          { icon: BarChart3, label: "Medición 100% exacta" },
        ]}
      />

      {/* ======================= ¿DÓNDE APARECE TU NEGOCIO? ===================== */}
      <section className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap">
          <SectionHeader
            eyebrow="La oportunidad"
            title="¿Dónde aparece tu negocio?"
            description="La diferencia real entre estar presente solo en el mapa o competir por la atención total en el buscador."
          />
          
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            
            {/* Mockup A */}
            <div className="flex flex-col items-center">
              <LocalMockup />
              <p className="mt-6 text-sm text-ink-500 text-center max-w-[280px]">
                <strong className="text-ink-900 font-semibold block mb-1">Con la campaña local:</strong>
                Aparecés acá, en Google Maps y en la sección de mapa del buscador.
              </p>
            </div>

            {/* Mockup B */}
            <div className="flex flex-col items-center">
              <SearchMockup />
              <p className="mt-6 text-sm text-ink-500 text-center max-w-[280px]">
                <strong className="text-ink-900 font-semibold block mb-1">Con campaña + landing:</strong>
                Además competís por los primeros anuncios de texto del buscador.
              </p>
            </div>
            
          </div>

          <p className="mt-12 text-center text-sm font-medium text-brand-600 bg-brand-50 border border-brand-100 py-3 px-6 rounded-full inline-block mx-auto flex items-center justify-center">
            Esa es la diferencia real entre las dos opciones de abajo.
          </p>
        </div>
      </section>

      {/* ============================ ALCANCE / SERP =========================== */}
      <section className="section overflow-hidden">
        <div className="wrap grid md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-brand-500 font-bold mb-3">Alcance Local</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink-900 mb-5">
              Vos elegís el radio.
            </h2>
            <p className="text-lg leading-relaxed text-ink-500 mb-10">
              El anuncio solo se muestra a gente dentro de tu zona, en el momento en que busca lo que vendés. No desperdiciamos impresiones en otras localidades.
            </p>
            <SerpCard />
          </div>

          <div className="relative flex items-center justify-center h-80 w-full max-w-sm mx-auto">
            {/* Concentric circles SVG (Light Mode) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="160" stroke="currentColor" className="text-brand-300" strokeWidth="2" strokeDasharray="4 8" />
              <circle cx="200" cy="200" r="110" stroke="currentColor" className="text-brand-400" strokeWidth="2" strokeDasharray="4 8" />
              <circle cx="200" cy="200" r="60" stroke="currentColor" className="text-brand-500" strokeWidth="2" strokeDasharray="4 8" />
              <circle cx="200" cy="200" r="60" fill="currentColor" className="text-brand-500" opacity="0.05" />
            </svg>
            <MapPin className="h-12 w-12 text-red-500 fill-red-100 relative z-10 drop-shadow-xl" />
            
            {/* Labels */}
            <div className="absolute top-[18%] right-[5%] text-[10px] font-mono text-ink-400 bg-white/80 px-1 rounded">5 km</div>
            <div className="absolute top-[30%] right-[18%] text-[10px] font-mono text-ink-500 bg-white/80 px-1 rounded">3 km</div>
            <div className="absolute top-[42%] right-[32%] text-[10px] font-mono text-brand-600 font-bold bg-white/80 px-1 rounded">1 km</div>
          </div>
        </div>
      </section>

      {/* ============================ CÓMO FUNCIONA =========================== */}
      <section id="proceso" className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Cómo funciona"
              title="De la búsqueda a la consulta."
              description="Un flujo simple diseñado para maximizar el contacto de clientes potenciales en tu zona."
            />
          </div>
          <div>
            <ProcessTimeline
              steps={[
                { title: "Aparecés", description: "La campaña te muestra en el mapa y en el buscador, solo a gente cerca de tu local.", duration: "Paso 1" },
                { title: "Te contactan", description: "El anuncio lleva a una acción concreta: llamar, pedir la ruta o escribirte por WhatsApp.", duration: "Paso 2" },
                { title: "Lo medís", description: "Reporte mensual de una página: cuánto invertiste, cuántas consultas llegaron y cuánto costó cada una.", duration: "Paso 3" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ============================= QUÉ INCLUYE ============================ */}
      <section className="section">
        <div className="wrap">
          <SectionHeader
            eyebrow="Qué incluye"
            title="Una campaña. Un objetivo. Todo medido."
            description="Las herramientas indispensables para dominar tu radio de cobertura."
          />
          <div className="mt-12">
            <FeatureGrid
              cols={3}
              features={[
                { icon: Map, title: "Campaña de búsqueda local", description: "Segmentada por radio alrededor de tu local." },
                { icon: MapPin, title: "Ficha de Google optimizada", description: "Fotos, servicios y datos de tu Perfil de Empresa." },
                { icon: TrendingUp, title: "Optimización continua", description: "Ajuste de palabras y anuncios todas las semanas." },
              ]}
            />
            
            {/* Ítem de medición visual */}
            <div className="mt-8 p-6 md:p-8 rounded-2xl bg-brand-50 border border-brand-100">
              <h3 className="font-semibold text-ink-900 mb-4">Medición transparente</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2 rounded-lg border border-white bg-white px-4 py-2.5 text-sm font-medium shadow-sm text-ink-700">
                  <Phone className="h-4 w-4 text-brand-500" />
                  Llamadas
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white bg-white px-4 py-2.5 text-sm font-medium shadow-sm text-ink-700">
                  <Navigation className="h-4 w-4 text-brand-500" />
                  Cómo llegar
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white bg-white px-4 py-2.5 text-sm font-medium shadow-sm text-ink-700">
                  <MessageCircle className="h-4 w-4 text-brand-500" />
                  WhatsApp
                </div>
              </div>
              <p className="text-ink-600 text-sm">Todo lo que genera la campaña, contado uno por uno.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PARA QUIÉN ============================= */}
      <section className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-7 md:p-10 rounded-2xl bg-white border-l-4 border-l-brand-500 border-y border-r border-ink-100 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500 mb-4 flex items-center gap-2">
                <CheckCircle2 size={16} /> Es para vos si
              </p>
              <ul className="space-y-4 text-ink-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                  Atendés en un local o consultorio a la calle.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                  Tu ticket justifica la inversión: salud, estética, automotor, hogar, servicios.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                  Tenés capacidad para atender más consultas de las que hoy recibís.
                </li>
              </ul>
            </div>
            <div className="p-7 md:p-10 rounded-2xl bg-white border-l-4 border-l-red-500 border-y border-r border-ink-100 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-4 flex items-center gap-2">
                <XCircle size={16} /> No es para vos si
              </p>
              <ul className="space-y-4 text-ink-500 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  Vendés ticket bajo con margen chico, como gastronomía al paso.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  Hoy no das abasto: más consultas serían un problema, no una solución.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  Esperás resultados definitivos en la primera semana.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== PRECIOS ============================== */}
      <section id="precios" className="section">
        <div className="wrap">
          <SectionHeader
            eyebrow="Precios"
            title="Dos opciones. Nada más."
            description="La inversión transparente y clara desde el primer momento."
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {/* opción A */}
            <div className="flex flex-col p-8 md:p-10 rounded-3xl bg-white border border-ink-100 shadow-sm">
              <h3 className="display text-3xl text-ink-900 mb-2">Campaña local</h3>
              <p className="text-ink-500 mb-6 min-h-[40px]">
                Tu ficha de negocio apareciendo en el mapa de Google (Maps y sección de mapa del buscador), para gente cerca de tu local.
              </p>
              
              <div className="mb-6">
                <p className="display text-4xl font-semibold text-ink-900">$150.000<span className="text-base text-ink-400 font-sans font-normal">/mes</span></p>
              </div>

              <p className="text-ink-700 leading-relaxed flex-1">
                Todo lo de arriba: campaña, ficha de Google, medición, optimización semanal y reporte mensual.
              </p>

              <p className="mt-4 text-xs leading-relaxed text-ink-400 border-t border-ink-100 pt-4">
                * No compite por los primeros anuncios de texto del buscador.
              </p>

              <a
                href="https://wa.me/5491133980499"
                target="_blank" rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center w-full px-5 py-3 rounded-full bg-brand-50 text-brand-600 font-medium hover:bg-brand-100 transition-colors"
              >
                Empezar por acá
              </a>
            </div>

            {/* opción B */}
            <div className="relative flex flex-col p-8 md:p-10 rounded-3xl bg-brand-500 text-white shadow-card">
              <div className="absolute -top-3 right-8 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-brand-600 text-xs font-semibold shadow-card">
                <Star size={12} fill="currentColor" />
                Recomendado
              </div>
              
              <h3 className="display text-3xl mb-2">Campaña + landing</h3>
              <p className="text-blue-100 mb-6 min-h-[40px]">
                Aparecés en el mapa y además competís por los primeros lugares del buscador, con una landing hecha para que te contacten.
              </p>
              
              <div className="mb-4">
                <p className="display text-4xl font-semibold text-white">$300.000<span className="text-base text-blue-200 font-sans font-normal"> el primer mes</span></p>
              </div>

              <p className="text-sm text-blue-200 mb-6">Después, $150.000/mes. La landing la pagás una sola vez.</p>

              <p className="text-white leading-relaxed flex-1">
                Todo lo de la campaña local, más una landing enfocada en que llamen o escriban por WhatsApp.
              </p>

              <a
                href="https://wa.me/5491133980499"
                target="_blank" rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center w-full px-5 py-3 rounded-full bg-white text-brand-600 font-medium hover:bg-white/90 transition-colors"
              >
                Quiero el sistema completo
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-2xl bg-ink-50/50 border border-ink-100">
              <p className="leading-relaxed text-ink-600 text-sm">
                <span className="font-semibold text-ink-900 block mb-1">Inversión en Google, aparte.</span> Sugerida desde
                $150.000/mes (piso $100.000). La pagás directo a Google con tu tarjeta: tu cuenta, tu plata, todo a la vista.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-ink-50/50 border border-ink-100">
              <p className="leading-relaxed text-ink-600 text-sm">
                <span className="font-semibold text-ink-900 block mb-1">Alta de $150.000, bonificada al 100%</span> firmando 3
                meses. Sin permanencia, se abona con el primer mes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= LO QUE NO PROMETEMOS ======================= */}
      <section className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="eyebrow text-red-500">Lo que no prometemos</p>
            <h2 className="display text-3xl md:text-4xl text-ink-900 mb-5">
              Nadie puede garantizarte la primera posición. Nosotros tampoco.
            </h2>
            <p className="text-lg text-ink-500 leading-relaxed">
              Google no vende posiciones fijas. Tu ubicación varía (primero, segundo, tercero) según la competencia, tu presupuesto y la calidad de tu ficha. Lo que sí prometemos: el mes 1 calibra la campaña, los meses 2 y 3 bajan el costo por consulta, y todos los meses ves exactamente qué generó cada peso invertido.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-ink-100 border-y border-ink-100">
            {[
              {
                q: "¿Por qué la gestión cuesta más que la inversión mínima?",
                a: "Porque el fee incluye la ficha de Google, la medición de cada consulta y la optimización semanal. Cuando el costo por consulta cierra, la inversión se escala y el fee queda igual.",
              },
              {
                q: "¿Me garantizan aparecer primero?",
                a: "No, y nadie puede. Depende de la opción: con campaña local pura, aparecés en el mapa. Con campaña + landing, competís también por los primeros anuncios. En ambas garantizamos datos transparentes: vas a ver qué generó cada peso.",
              },
              {
                q: "¿Puedo probar un solo mes?",
                a: "Podés, abonando el alta de $150.000. Pero un mes solo tira la calibración a la basura: por eso firmando 3 meses el alta es gratis.",
              },
            ].map((faq, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900 text-lg [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500">
                  {faq.q}
                  <span className="text-brand-500 transition group-open:rotate-45 text-2xl leading-none motion-reduce:transition-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-ink-500 pr-10">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CTA FINAL ============================= */}
      <ContactSection
        service="primero-en-tu-zona"
        title="¿Tu local aparece cuando te buscan cerca?"
        subtitle="Hacé la prueba: buscá tu rubro en Google. Si el que aparece es tu competidor, hablemos."
      />
    </>
  );
}
