import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Primero en tu Zona · Google Ads para negocios con local | Impulso Digital",
  description:
    "Tu negocio entre los primeros lugares de Google y en el mapa (Google Maps), cuando te buscan cerca de tu local. Y cada consulta que eso genera, contada.",
};

const WA = "https://wa.me/5491133980499?text=" + encodeURIComponent("Hola, quiero info de Primero en tu Zona.");

/* ------------------------------ íconos ------------------------------ */

function IconPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

function IconSearch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function IconWhatsApp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.9-.1 1.6Z" />
    </svg>
  );
}

function IconStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function IconPhone({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconDirections({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

/* ------------------------ tarjeta SERP (firma) ----------------------- */

function SerpCard() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#131519] p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] sm:p-5">
      {/* barra de búsqueda */}
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#1c1f24] px-4 py-2.5">
        <IconSearch className="h-4 w-4 shrink-0 text-[var(--muted)]" />
        <span className="truncate text-sm text-[var(--ink)]">kinesiólogo cerca de mí</span>
      </div>

      {/* resultado patrocinado: tu negocio */}
      <div className="mt-4 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-tint)] p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Patrocinado</p>
        <div className="mt-2 flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-[15px] font-semibold text-[var(--ink)]">Tu negocio</p>
              <div className="flex items-center gap-0.5 text-yellow-400 text-xs">
                <span>4,8</span>
                <IconStar className="h-3 w-3" />
                <span className="text-[var(--muted)] ml-0.5">(32)</span>
              </div>
            </div>
            <p className="mt-0.5 text-xs text-[var(--muted)]">A 1,2 km · Abierto ahora</p>
          </div>
          <IconPin className="mt-0.5 h-6 w-6 shrink-0 text-[var(--pin)]" />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Llamar", "Cómo llegar", "WhatsApp"].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[var(--accent-border)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* competidores, difuminados */}
      <div className="mt-3 space-y-3" aria-hidden="true">
        {[0, 1].map((i) => (
          <div key={i} className="rounded-xl border border-white/[0.06] p-4 opacity-50">
            <div className="h-2.5 w-32 rounded bg-white/15" />
            <div className="mt-2 h-2 w-44 rounded bg-white/[0.08]" />
          </div>
        ))}
      </div>

      <p className="mt-4 font-mono text-[11px] leading-relaxed text-[var(--muted)]">
        Cada “Llamar”, “Cómo llegar” y “WhatsApp” queda medido.
      </p>
    </div>
  );
}

/* ------------------------------ página ------------------------------ */

export default function PrimeroEnTuZonaPage() {
  return (
    <main
      className="bg-[var(--paper)] text-[var(--ink)] antialiased"
      style={
        {
          "--paper": "#0b0c0e",
          "--ink": "#f5f6f7",
          "--muted": "#9ba1a6",
          "--accent": "#8ab4f8",
          "--accent-border": "rgba(138,180,248,0.45)",
          "--accent-tint": "rgba(138,180,248,0.06)",
          "--pin": "#f28b82",
        } as CSSProperties
      }
    >
      {/* ================================ HERO ================================ */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-32">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
            Nuevo · Para negocios con local
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Primero en
            <br />
            tu zona
            <span className="text-[var(--pin)]">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            Tu negocio entre los primeros lugares de Google y en el mapa (Google Maps), cuando te
            buscan cerca de tu local. Y cada consulta que eso genera, contada.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WA}
              className="inline-flex items-center gap-2.5 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-[#0b0c0e] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] motion-reduce:transition-none"
            >
              <IconWhatsApp className="h-4 w-4" />
              Quiero aparecer en el mapa
            </a>
            <a
              href="#precios"
              className="text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Ver precios
            </a>
          </div>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <SerpCard />
        </div>
      </section>

      {/* ======================= ¿DÓNDE APARECE TU NEGOCIO? ===================== */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)] text-center mb-12">
            ¿Dónde aparece tu negocio?
          </p>
          
          <div className="grid gap-10 md:grid-cols-2">
            
            {/* Mockup A: Campaña Local (Mapa) */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[340px] rounded-xl border border-white/10 bg-[#131519] overflow-hidden shadow-2xl relative">
                {/* Simulated Map Header */}
                <div className="h-24 w-full relative overflow-hidden bg-[#1c1f24]">
                  {/* Decorative map lines */}
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="40" x2="100%" y2="20" stroke="white" strokeWidth="2" />
                      <line x1="50" y1="0" x2="80" y2="100%" stroke="white" strokeWidth="2" />
                      <line x1="150" y1="100%" x2="250" y2="0" stroke="white" strokeWidth="3" />
                    </svg>
                  </div>
                  {/* Big map pin */}
                  <IconPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-[var(--pin)] shadow-lg" />
                </div>
                
                {/* Maps Card */}
                <div className="p-4 bg-[#131519] border-t border-white/5 relative z-10 -mt-2 rounded-t-xl">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Patrocinado</p>
                  <div className="mt-1 flex items-center justify-between">
                    <div>
                      <p className="text-[15px] font-semibold text-[var(--ink)]">Tu negocio</p>
                      <div className="flex items-center gap-1 text-xs mt-0.5">
                        <span className="text-yellow-400">4,8</span>
                        <IconStar className="h-3 w-3 text-yellow-400" />
                        <span className="text-[var(--muted)]">(32)</span>
                        <span className="text-[var(--muted)] ml-1">· a 1,2 km</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] mt-0.5">Abierto ahora</p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <div className="flex-1 rounded-full border border-white/20 bg-white/5 py-2 flex justify-center items-center gap-1.5 text-xs font-medium text-[var(--ink)]">
                      <IconPhone className="h-3.5 w-3.5 text-[var(--accent)]" />
                      Llamar
                    </div>
                    <div className="flex-1 rounded-full border border-white/20 bg-white/5 py-2 flex justify-center items-center gap-1.5 text-xs font-medium text-[var(--ink)]">
                      <IconDirections className="h-3.5 w-3.5 text-[var(--accent)]" />
                      Cómo llegar
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-[var(--muted)] text-center max-w-[280px]">
                <strong className="text-[var(--ink)] font-semibold">Con la campaña local:</strong> Aparecés acá, en Google Maps y en la sección de mapa del buscador.
              </p>
            </div>

            {/* Mockup B: Campaña + Landing (Anuncio Search) */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[340px] rounded-xl border border-white/10 bg-[#131519] p-4 shadow-2xl mt-4 md:mt-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] mb-1">Patrocinado</p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px]">🌐</div>
                  <div>
                    <p className="text-xs text-[var(--ink)] leading-none">Tu Negocio</p>
                    <p className="text-[10px] text-[var(--muted)]">tunegocio.com.ar</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[var(--accent)] leading-tight mb-1.5 hover:underline cursor-pointer">
                  El Mejor Servicio en Tu Zona
                </h3>
                <p className="text-[13px] text-[var(--muted)] leading-relaxed line-clamp-2">
                  Atención profesional garantizada. Reservá tu turno online o vení directamente a nuestro local.
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 grid gap-2">
                  <div className="flex items-center gap-2 text-[11px] text-[var(--muted)]">
                    <IconPin className="h-3 w-3 text-[var(--muted)]" />
                    <span>Av. Principal 1234, a 1,2 km</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[var(--muted)]">
                    <IconPhone className="h-3 w-3 text-[var(--muted)]" />
                    <span>Llamar al 011-1234-5678</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[var(--muted)]">
                    <span className="text-yellow-400 font-semibold">4,8</span>
                    <IconStar className="h-3 w-3 text-yellow-400" />
                    <span>Reseñas de clientes</span>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-[var(--muted)] text-center max-w-[280px]">
                <strong className="text-[var(--ink)] font-semibold">Con campaña + landing:</strong> Además competís por los primeros anuncios de texto del buscador.
              </p>
            </div>
            
          </div>

          <p className="mt-12 text-center text-sm font-medium text-[var(--accent)]">
            Esa es la diferencia real entre las dos opciones de abajo.
          </p>
        </div>
      </section>

      {/* ============================ ALCANCE / RADIO =========================== */}
      <section className="border-t border-white/[0.06] overflow-hidden relative">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 grid md:grid-cols-2 items-center gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Alcance Local</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Vos elegís el radio.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)] max-w-md">
              El anuncio solo se muestra a gente dentro de tu zona, en el momento en que busca lo que vendés.
            </p>
          </div>

          <div className="relative flex items-center justify-center h-64">
            {/* Concentric circles SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="160" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 6" opacity="0.1" />
              <circle cx="200" cy="200" r="110" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
              <circle cx="200" cy="200" r="60" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
              <circle cx="200" cy="200" r="60" fill="var(--accent)" opacity="0.05" />
            </svg>
            <IconPin className="h-10 w-10 text-[var(--pin)] relative z-10 drop-shadow-2xl" />
            
            {/* Labels */}
            <div className="absolute top-[20%] right-[10%] text-[10px] font-mono text-[var(--muted)] opacity-50">5 km</div>
            <div className="absolute top-[32%] right-[22%] text-[10px] font-mono text-[var(--muted)] opacity-70">3 km</div>
            <div className="absolute top-[42%] right-[32%] text-[10px] font-mono text-[var(--accent)]">1 km</div>
          </div>
        </div>
      </section>

      {/* ============================ CÓMO FUNCIONA =========================== */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Cómo funciona</p>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "Aparecés",
                d: "La campaña te muestra en el mapa y en el buscador, solo a gente cerca de tu local.",
              },
              {
                n: "02",
                t: "Te contactan",
                d: "El anuncio lleva a una acción concreta: llamar, pedir la ruta o escribirte por WhatsApp.",
              },
              {
                n: "03",
                t: "Lo medís",
                d: "Reporte mensual de una página: cuánto invertiste, cuántas consultas llegaron y cuánto costó cada una.",
              },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-mono text-sm text-[var(--accent)]">{s.n}</p>
                <h2 className="mt-3 text-xl font-semibold">{s.t}</h2>
                <p className="mt-2 leading-relaxed text-[var(--muted)]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= QUÉ INCLUYE ============================ */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Qué incluye</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Una campaña. Un objetivo. Todo medido.
          </h2>
          <ul className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {[
              ["Campaña de búsqueda local", "Segmentada por radio alrededor de tu local."],
              ["Ficha de Google optimizada", "Fotos, servicios y datos de tu Perfil de Empresa."],
              ["Optimización continua", "Ajuste de palabras y anuncios todas las semanas."],
            ].map(([t, d], i) => (
              <li key={t} className="grid gap-2 py-5 sm:grid-cols-[64px_240px_1fr] sm:items-baseline sm:gap-6">
                <span className="font-mono text-xs text-[var(--muted)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-semibold">{t}</h3>
                <p className="text-[var(--muted)]">{d}</p>
              </li>
            ))}
            
            {/* Ítem de medición visual */}
            <li className="grid gap-2 py-6 sm:grid-cols-[64px_240px_1fr] sm:items-start sm:gap-6">
              <span className="font-mono text-xs text-[var(--muted)]">04</span>
              <h3 className="font-semibold">Medición transparente</h3>
              <div>
                <div className="flex flex-wrap gap-3 mb-3">
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium">
                    <IconPhone className="h-4 w-4 text-[var(--accent)]" />
                    Llamadas
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium">
                    <IconDirections className="h-4 w-4 text-[var(--accent)]" />
                    Cómo llegar
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium">
                    <IconWhatsApp className="h-4 w-4 text-[var(--accent)]" />
                    WhatsApp
                  </div>
                </div>
                <p className="text-[var(--muted)] text-sm">Todo lo que genera la campaña, contado uno por uno.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================= PARA QUIÉN ============================= */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.08] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Es para vos si</p>
            <ul className="mt-5 space-y-4 leading-relaxed">
              <li>Atendés en un local o consultorio a la calle.</li>
              <li>Tu ticket justifica la inversión: salud, estética, automotor, hogar, servicios profesionales.</li>
              <li>Tenés capacidad para atender más consultas de las que hoy recibís.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/[0.08] p-7 text-[var(--muted)]">
            <p className="font-mono text-xs uppercase tracking-[0.22em]">No es para vos si</p>
            <ul className="mt-5 space-y-4 leading-relaxed">
              <li>Vendés ticket bajo con margen chico, como gastronomía al paso.</li>
              <li>Hoy no das abasto: más consultas serían un problema, no una solución.</li>
              <li>Esperás resultados definitivos en la primera semana.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =============================== PRECIOS ============================== */}
      <section id="precios" className="scroll-mt-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Precios</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Dos opciones. Nada más.</h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* opción A */}
            <div className="flex flex-col rounded-2xl border border-white/[0.08] p-7">
              <h3 className="text-lg font-semibold">Campaña local</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Tu ficha de negocio apareciendo en el mapa de Google (Maps y sección de mapa del buscador), para gente cerca de tu local.
              </p>
              <p className="mt-6 text-4xl font-semibold tracking-tight">
                $150.000<span className="text-base font-normal text-[var(--muted)]"> /mes</span>
              </p>
              <p className="mt-5 flex-1 leading-relaxed text-[var(--muted)]">
                Todo lo de arriba: campaña, ficha de Google, medición, optimización semanal y reporte mensual.
              </p>
              <p className="mt-4 text-[11px] leading-relaxed text-[var(--muted)] opacity-80 border-t border-white/10 pt-4">
                * No compite por los primeros anuncios de texto del buscador.
              </p>
              <a
                href={WA}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] motion-reduce:transition-none"
              >
                <IconWhatsApp className="h-4 w-4" />
                Empezar por acá
              </a>
            </div>

            {/* opción B */}
            <div className="relative flex flex-col rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-tint)] p-7">
              <span className="absolute -top-3 left-7 rounded-full bg-[var(--accent)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0b0c0e]">
                Recomendado
              </span>
              <h3 className="text-lg font-semibold">Campaña + landing</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Aparecés en el mapa y además competís por los primeros lugares del buscador, con una landing hecha para que te contacten.
              </p>
              <p className="mt-6 text-4xl font-semibold tracking-tight">
                $300.000<span className="text-base font-normal text-[var(--muted)]"> el primer mes</span>
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">Después, $150.000/mes. La landing la pagás una sola vez.</p>
              <p className="mt-5 flex-1 leading-relaxed text-[var(--muted)]">
                Todo lo de la campaña local, más una landing enfocada en que llamen o escriban por WhatsApp.
              </p>
              <a
                href={WA}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-[#0b0c0e] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] motion-reduce:transition-none"
              >
                <IconWhatsApp className="h-4 w-4" />
                Quiero el sistema completo
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-4 rounded-2xl border border-white/[0.08] p-6 sm:grid-cols-2">
            <p className="leading-relaxed text-[var(--muted)]">
              <span className="font-semibold text-[var(--ink)]">Inversión en Google, aparte.</span> Sugerida desde
              $150.000/mes (piso $100.000). La pagás directo a Google con tu tarjeta: tu cuenta, tu plata, todo a la
              vista.
            </p>
            <p className="leading-relaxed text-[var(--muted)]">
              <span className="font-semibold text-[var(--ink)]">Alta de $150.000, bonificada al 100%</span> firmando 3
              meses. Sin permanencia, se abona con el primer mes.
            </p>
          </div>
        </div>
      </section>

      {/* ========================= LO QUE NO PROMETEMOS ======================= */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--pin)]">Lo que no prometemos</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Nadie puede garantizarte la primera posición. Nosotros tampoco.
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--muted)]">
              Google no vende posiciones fijas. Tu ubicación varía (primero, segundo, tercero) según la competencia, 
              tu presupuesto y la calidad de tu ficha. Lo que sí prometemos: el mes 1 calibra la campaña, 
              los meses 2 y 3 bajan el costo por consulta, y todos los meses ves exactamente qué generó cada peso invertido.
            </p>
          </div>

          <div className="mt-12 max-w-3xl divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {[
              [
                "¿Por qué la gestión cuesta más que la inversión mínima?",
                "Porque el fee incluye la ficha de Google, la medición de cada consulta y la optimización semanal. Cuando el costo por consulta cierra, la inversión se escala y el fee queda igual.",
              ],
              [
                "¿Me garantizan aparecer primero?",
                "No, y nadie puede. Depende de la opción: con campaña local pura, aparecés en el mapa. Con campaña + landing, competís también por los primeros anuncios. En ambas garantizamos datos transparentes: vas a ver qué generó cada peso.",
              ],
              [
                "¿Puedo probar un solo mes?",
                "Podés, abonando el alta de $150.000. Pero un mes solo tira la calibración a la basura: por eso firmando 3 meses el alta es gratis.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                  {q}
                  <span className="font-mono text-[var(--accent)] transition group-open:rotate-45 motion-reduce:transition-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-[var(--muted)]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CTA FINAL ============================= */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8">
          <IconPin className="mx-auto h-8 w-8 text-[var(--pin)]" />
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Tu local aparece cuando te buscan cerca?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
            Hacé la prueba: buscá tu rubro en Google. Si el que aparece es tu competidor, hablemos.
          </p>
          <a
            href={WA}
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-[var(--ink)] px-7 py-3.5 text-sm font-semibold text-[#0b0c0e] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] motion-reduce:transition-none"
          >
            <IconWhatsApp className="h-4 w-4" />
            Averiguarlo por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
