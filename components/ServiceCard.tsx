import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";

type ServiceCardProps = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  href: string;
  featured?: boolean;
};

export function ServiceCard({
  number,
  icon: Icon,
  title,
  description,
  bullets,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col p-7 md:p-8 rounded-3xl border transition-all duration-500 ${
        featured
          ? "bg-ink-900 border-ink-900 text-white hover:shadow-card hover:-translate-y-1"
          : "bg-white border-ink-100 text-ink-900 hover:border-brand-200 hover:shadow-card hover:-translate-y-1"
      }`}
    >
      {/* Top row: number + icon */}
      <div className="flex items-start justify-between mb-8">
        <span
          className={`text-xs font-mono ${
            featured ? "text-brand-300" : "text-ink-300"
          }`}
        >
          {number}
        </span>
        <div
          className={`flex items-center justify-center w-11 h-11 rounded-xl ${
            featured
              ? "bg-white/10 text-brand-300"
              : "bg-brand-50 text-brand-500"
          }`}
        >
          <Icon size={20} strokeWidth={2} />
        </div>
      </div>

      {/* Title */}
      <h3
        className={`display text-2xl md:text-[26px] mb-3 ${
          featured ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-[15px] leading-relaxed mb-6 ${
          featured ? "text-ink-200" : "text-ink-500"
        }`}
      >
        {description}
      </p>

      {/* Bullets */}
      <ul className="space-y-2.5 mb-8 flex-1">
        {bullets.map((b, i) => (
          <li
            key={i}
            className={`flex items-start gap-2.5 text-sm ${
              featured ? "text-ink-100" : "text-ink-700"
            }`}
          >
            <span
              className={`mt-2 inline-block w-1 h-1 rounded-full shrink-0 ${
                featured ? "bg-brand-400" : "bg-brand-500"
              }`}
            />
            {b}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div
        className={`flex items-center justify-between pt-5 border-t ${
          featured ? "border-white/10" : "border-ink-100"
        }`}
      >
        <span
          className={`text-sm font-medium ${
            featured ? "text-white" : "text-ink-900"
          }`}
        >
          Ver propuesta
        </span>
        <span
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 group-hover:rotate-45 ${
            featured
              ? "bg-brand-500 text-white"
              : "bg-ink-50 text-ink-900 group-hover:bg-brand-500 group-hover:text-white"
          }`}
        >
          <ArrowUpRight size={16} strokeWidth={2.2} />
        </span>
      </div>
    </Link>
  );
}
