"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check, Loader2, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

type ContactFormProps = {
  service: string;       // "google-ads" | "sitios-web" | "general"
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
};

export function ContactForm({
  service,
  title = "Hablemos de tu negocio",
  subtitle = "Te respondemos de Lun a Vie · 9 a 17h. Sin compromiso, sin venta forzada.",
  variant = "light",
}: ContactFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || ""),
      service,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }

      router.push(`/gracias?s=${encodeURIComponent(service)}`);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Error inesperado. Intentalo nuevamente.");
    }
  }

  const isDark = variant === "dark";
  const inputCls = isDark
    ? "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-ink-300 focus:outline-none focus:border-brand-400 focus:bg-white/10 transition"
    : "w-full px-4 py-3 rounded-xl bg-white border border-ink-100 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition";
  const labelCls = isDark
    ? "block text-xs font-semibold uppercase tracking-wider text-ink-200 mb-2"
    : "block text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2";

  return (
    <div className={isDark ? "text-white" : ""}>
      <h2
        className={`display text-3xl md:text-4xl mb-3 ${
          isDark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-base mb-8 max-w-md ${
          isDark ? "text-ink-200" : "text-ink-500"
        }`}
      >
        {subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelCls}>Nombre *</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="company" className={labelCls}>Empresa</label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className={inputCls}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className={labelCls}>Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelCls}>Teléfono / WhatsApp</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelCls}>Contanos brevemente *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className={inputCls}
          />
        </div>

        {error && (
          <div className="flex items-start gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800">
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center justify-center gap-2 w-full md:w-auto px-7 py-4 rounded-full bg-brand-500 text-white font-medium hover:bg-brand-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-card"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar consulta
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>

        <p className={`text-xs ${isDark ? "text-ink-300" : "text-ink-400"}`}>
          <Check size={12} className="inline mr-1" />
          Tus datos están seguros. No compartimos información con terceros.
        </p>
      </form>
    </div>
  );
}
