import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Primero en tu Zona · Google Ads para negocios con local | Impulso Digital",
  description:
    "Aparecé arriba en Google y en el mapa cuando te buscan cerca de tu local. Campaña local + ficha de Google + medición de llamadas, rutas y WhatsApp. Desde $150.000/mes.",
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

/* ------------------------ tarjeta SERP (firma) ----------------------- */
/* Recreación de una búsqueda local de Google en modo oscuro, con el
   negocio del prospecto como resultado patrocinado. Es la promesa,
   dibujada. */

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
            <p className="text-[15px] font-semibold text-[var(--ink)]">Tu negocio</p>
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
          // Tokens de la página. Para cambiar el acento, tocá solo estas dos líneas.
          "--paper": "#0b0c0e",
          "--ink": "#f5f6f7",
          "--muted": "#9ba1a6",
          "--accent": "#8ab4f8", // azul de Google en modo oscuro: el mundo del que habla la página
          "--accent-border": "rgba(138,180,248,0.45)",
          "--accent-tint": "rgba(138,180,248,0.06)",
          "--pin": "#f28b82", // rojo suave del pin de Maps
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
            Cuando alguien busca lo que vendés cerca de tu local, aparecés arriba en Google y en el mapa. Y cada
            llamada, cada “cómo llegar” y cada WhatsApp queda medido.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WA}
              className="inline-flex items-center gap-2.5 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-[#0b0c0e] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] motion-reduce:transition-none"
            >
              <IconWhatsApp className="h-4 w-4" />
              Quiero aparecer primero
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

      {/* ============================ CÓMO FUNCIONA =========================== */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Cómo funciona</p>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "Aparecés",
                d: "Una campaña de búsqueda con tu ubicación te muestra arriba y en el mapa, solo a gente cerca de tu local.",
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
              ["Campaña de búsqueda local", "Segmentada por radio alrededor de tu local, con recurso de ubicación."],
              ["Ficha de Google optimizada", "Categorías, servicios, fotos y respuestas de tu Perfil de Empresa."],
              ["Medición de consultas", "Llamadas, solicitudes de ruta y clics a WhatsApp, registrados."],
              ["Optimización semanal", "Palabras negativas, pujas, horarios y anuncios, todas las semanas."],
              ["Reporte de una página", "Invertiste X, llegaron Y consultas, cada una costó Z. Sin humo."],
            ].map(([t, d], i) => (
              <li key={t} className="grid gap-2 py-5 sm:grid-cols-[64px_240px_1fr] sm:items-baseline sm:gap-6">
                <span className="font-mono text-xs text-[var(--muted)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-semibold">{t}</h3>
                <p className="text-[var(--muted)]">{d}</p>
              </li>
            ))}
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
              <p className="mt-1 text-sm text-[var(--muted)]">Ya tenés dónde recibir las consultas.</p>
              <p className="mt-6 text-4xl font-semibold tracking-tight">
                $150.000<span className="text-base font-normal text-[var(--muted)]"> /mes</span>
              </p>
              <p className="mt-5 flex-1 leading-relaxed text-[var(--muted)]">
                Todo lo de arriba: campaña, ficha de Google, medición, optimización semanal y reporte mensual.
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
              <p className="mt-1 text-sm text-[var(--muted)]">Una página con un solo objetivo: que te contacten.</p>
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
              Nadie puede garantizarte el primer lugar. Nosotros tampoco.
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--muted)]">
              Google no vende posiciones fijas, y desconfiá de quien te las prometa. Lo que sí prometemos: el mes 1
              calibra la campaña, los meses 2 y 3 bajan el costo por consulta, y todos los meses ves exactamente qué
              generó cada peso invertido.
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
                "No, y nadie puede. Garantizamos datos transparentes: vas a ver qué generó cada peso, todos los meses, en un reporte de una página.",
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
