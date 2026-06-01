"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";

type PortfolioItem = {
  name: string;
  url: string;
  imageKey: string;
  category: string;
  description: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    name: "Seres Salud",
    url: "https://seressalud.com.ar/",
    imageKey: "seres-salud",
    category: "Medicina Laboral",
    description: "Medicina laboral y asistencial con +20 años de trayectoria en Avellaneda.",
  },
  {
    name: "Laboratorio Avellaneda",
    url: "https://analisisclinicos.com.ar/",
    imageKey: "laboratorio-avellaneda",
    category: "Laboratorio",
    description: "Análisis clínicos con turnos online, atención personalizada y resultados seguros desde 2007.",
  },
  {
    name: "IVEMA Desarrollos",
    url: "https://ivemadesarrollos.com.ar/",
    imageKey: "ivema",
    category: "Biotecnología",
    description: "Ingeniería y producción de equipamiento para laboratorios de biotecnología y biología molecular.",
  },
  {
    name: "Alessio Endoscopía",
    url: "https://alessioendoscopia.com.ar/",
    imageKey: "alessio",
    category: "Equipamiento Médico",
    description: "Comercialización de equipamiento médico quirúrgico para laparoscopía, histeroscopía y artroscopía.",
  },
  {
    name: "Comunidad Bienestar",
    url: "https://comunidadbienestar.com.ar/",
    imageKey: "comunidad-bienestar",
    category: "Salud Integral",
    description: "Espacio interdisciplinario dedicado a la gestión integral de la salud y el bienestar.",
  },
  {
    name: "Transportes El Canario",
    url: "https://transporteselcanario.com.ar/",
    imageKey: "transportes-canario",
    category: "Logística",
    description: "Empresa con +40 años en logística y transporte de cargas livianas, pesadas y sobredimensionadas.",
  },
];

export function PortfolioGrid({ showViewAllButton = true }: { showViewAllButton?: boolean }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl overflow-hidden border border-ink-100 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Screenshot thumbnail */}
            <div className="relative aspect-[4/3] bg-ink-50 overflow-hidden">
              <Image
                src={`/portfolio/${item.imageKey}.png`}
                alt={`Captura de ${item.name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/70 text-sm mb-1">{item.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-white text-sm font-medium">
                    Visitar sitio
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom info bar */}
            <div className="px-5 py-4 bg-white flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-ink-900 text-[15px]">{item.name}</h3>
                <span className="text-xs text-ink-400 uppercase tracking-wider font-medium">{item.category}</span>
              </div>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink-50 text-ink-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 group-hover:rotate-45">
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </span>
            </div>
          </a>
        ))}
      </div>
      
      {showViewAllButton && (
        <div className="mt-12 text-center">
          <a 
            href="/portfolio" 
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-ink-100 shadow-sm text-ink-900 font-medium hover:border-brand-500 hover:shadow-card hover:-translate-y-0.5 transition-all"
          >
            Ver portfolio completo
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </div>
  );
}
