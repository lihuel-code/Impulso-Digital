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
  Map,
  BarChart3,
  CheckCircle2,
  XCircle
} from "lucide-react";

export const metadata = {
  title: "Primero en tu Zona · Google Ads para negocios con local | Impulso Digital",
  description:
    "Aparecé arriba en Google y en el mapa cuando te buscan cerca de tu local. Campaña local + ficha de Google + medición de llamadas, rutas y WhatsApp. Desde $150.000/mes.",
};

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
            <p className="text-base font-bold text-ink-900">Tu negocio</p>
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

export default function PrimeroEnTuZonaPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Google Ads Local · Negocios con local"
        service="primero-en-tu-zona"
        title={
          <>
            Primero en <br />
            tu zona<span className="text-red-500">.</span>
          </>
        }
        description="Cuando alguien busca lo que vendés cerca de tu local, aparecés arriba en Google y en el mapa. Y cada llamada, cada “cómo llegar” y cada WhatsApp queda medido."
        highlights={[
          { icon: Search, label: "Campaña de búsqueda local" },
          { icon: MapPin, label: "Ficha de Google optimizada" },
          { icon: BarChart3, label: "Medición de llamadas y WhatsApp" },
        ]}
      />

      {/* Visual / Promise */}
      <section className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="La oportunidad"
              title="Aparecés exactamente donde te buscan."
              description="La diferencia entre esperar a que te encuentren y estar presente en el momento y lugar exacto en el que necesitan tu servicio."
            />
            <ul className="mt-8 space-y-4">
              {[
                { icon: Search, title: "Intención activa", desc: "Aparecés solo ante personas que buscan activamente tu solución." },
                { icon: MapPin, title: "Radio geográfico", desc: "Segmentamos la campaña alrededor de tu negocio." },
                { icon: TrendingUp, title: "Totalmente medible", desc: "Sabés exactamente cuántas consultas generó la inversión." },
              ].map((o, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-500 shrink-0">
                    <o.icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900 mb-0.5">{o.title}</p>
                    <p className="text-ink-500 text-[15px]">{o.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative justify-self-center lg:justify-self-end">
            <SerpCard />
            <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-brand-600 text-white text-xs font-semibold shadow-card z-10">
              Posición #1
            </div>
          </div>
        </div>
      </section>

      {/* Process / Cómo funciona */}
      <section id="proceso" className="section">
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
                { title: "Aparecés", description: "Una campaña de búsqueda con tu ubicación te muestra arriba y en el mapa, solo a gente cerca de tu local.", duration: "Paso 1" },
                { title: "Te contactan", description: "El anuncio lleva a una acción concreta: llamar, pedir la ruta o escribirte por WhatsApp.", duration: "Paso 2" },
                { title: "Lo medís", description: "Reporte mensual de una página: cuánto invertiste, cuántas consultas llegaron y cuánto costó cada una.", duration: "Paso 3" },
              ]}
            />
            <div className="mt-10">
              <a href="https://wa.me/5491133980499" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors">
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap">
          <SectionHeader
            eyebrow="Qué incluye"
            title="Una campaña. Un objetivo. Todo medido."
            description="Todo lo necesario para generar resultados desde el primer día."
          />
          <div className="mt-12">
            <FeatureGrid
              cols={3}
              features={[
                { icon: Map, title: "Campaña de búsqueda local", description: "Segmentada por radio alrededor de tu local, con recurso de ubicación." },
                { icon: MapPin, title: "Ficha de Google optimizada", description: "Categorías, servicios, fotos y respuestas de tu Perfil de Empresa." },
                { icon: MessageCircle, title: "Medición de consultas", description: "Llamadas, solicitudes de ruta y clics a WhatsApp, registrados." },
                { icon: TrendingUp, title: "Optimización semanal", description: "Palabras negativas, pujas, horarios y anuncios, todas las semanas." },
                { icon: BarChart3, title: "Reporte de una página", description: "Invertiste X, llegaron Y consultas, cada una costó Z. Sin humo." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="section">
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-7 md:p-10 rounded-2xl bg-white border-l-4 border-l-brand-500 border-y border-r border-ink-100">
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
            <div className="p-7 md:p-10 rounded-2xl bg-white border-l-4 border-l-red-500 border-y border-r border-ink-100">
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

      {/* Precios */}
      <section id="precios" className="section bg-ink-50/40 border-y border-ink-100">
        <div className="wrap">
          <SectionHeader
            eyebrow="Planes e inversión"
            title="Dos opciones. Nada más."
            description="La inversión transparente y clara desde el primer momento."
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {/* opción A */}
            <div className="flex flex-col p-8 md:p-10 rounded-3xl bg-white border border-ink-100 shadow-sm">
              <h3 className="display text-3xl text-ink-900 mb-2">Campaña local</h3>
              <p className="text-ink-500 mb-6">Ya tenés dónde recibir las consultas.</p>
              
              <div className="mb-8">
                <p className="display text-4xl font-semibold text-ink-900">$150.000<span className="text-base text-ink-400 font-sans font-normal">/mes</span></p>
              </div>

              <p className="text-ink-700 leading-relaxed flex-1">
                Todo lo de arriba: campaña, ficha de Google, medición, optimización semanal y reporte mensual.
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
              <p className="text-blue-100 mb-6">Una página con un solo objetivo: que te contacten.</p>
              
              <div className="mb-4">
                <p className="display text-4xl font-semibold text-white">$300.000<span className="text-base text-blue-200 font-sans font-normal"> el primer mes</span></p>
              </div>

              <p className="text-sm text-blue-200 mb-8">Después, $150.000/mes. La landing la pagás una sola vez.</p>

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
            <div className="p-6 rounded-2xl bg-white border border-ink-100">
              <p className="leading-relaxed text-ink-600 text-sm">
                <span className="font-semibold text-ink-900 block mb-1">Inversión en Google, aparte.</span> Sugerida desde
                $150.000/mes (piso $100.000). La pagás directo a Google con tu tarjeta: tu cuenta, tu plata, todo a la vista.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-ink-100">
              <p className="leading-relaxed text-ink-600 text-sm">
                <span className="font-semibold text-ink-900 block mb-1">Alta de $150.000, bonificada al 100%</span> firmando 3
                meses. Sin permanencia, se abona con el primer mes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="eyebrow text-red-500">Lo que no prometemos</p>
            <h2 className="display text-3xl md:text-4xl text-ink-900 mb-5">
              Nadie puede garantizarte el primer lugar. Nosotros tampoco.
            </h2>
            <p className="text-lg text-ink-500 leading-relaxed">
              Google no vende posiciones fijas, y desconfiá de quien te las prometa. Lo que sí prometemos: el mes 1
              calibra la campaña, los meses 2 y 3 bajan el costo por consulta, y todos los meses ves exactamente qué
              generó cada peso invertido.
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
                a: "No, y nadie puede. Garantizamos datos transparentes: vas a ver qué generó cada peso, todos los meses, en un reporte de una página.",
              },
              {
                q: "¿Puedo probar un solo mes?",
                a: "Podés, abonando el alta de $150.000. Pero un mes solo tira la calibración a la basura: por eso firmando 3 meses el alta es gratis.",
              },
            ].map((faq, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900 text-lg [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-brand-500 transition group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-ink-500 pr-10">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        service="primero-en-tu-zona"
        title="¿Tu local aparece cuando te buscan cerca?"
        subtitle="Hacé la prueba: buscá tu rubro en Google. Si el que aparece es tu competidor, hablemos."
      />
    </>
  );
}
