"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "/google-ads",     label: "Google Ads" },
  { href: "/sitios-web",     label: "Sitios web" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-ink-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Impulso Digital">
          <Logo className="h-7 w-7" />
          <span className="font-display text-lg font-semibold tracking-tight text-ink-900">
            Impulso<span className="text-brand-500">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-500 hover:text-ink-900 transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-brand-500 text-white hover:bg-brand-600 transition-colors"
          >
            Hablemos
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-ink-900"
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-ink-100 bg-white">
          <div className="wrap py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-ink-700 hover:text-brand-500 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center px-4 py-3 rounded-full bg-brand-500 text-white text-sm font-medium"
            >
              Hablemos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
