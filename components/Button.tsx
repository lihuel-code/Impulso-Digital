import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  arrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 font-medium text-sm rounded-full transition-all duration-300";
  const sizes = "px-6 py-3";

  const variants = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-600 hover:shadow-card",
    secondary:
      "bg-brand-50 text-brand-700 hover:bg-brand-100 border border-brand-100",
    ghost:
      "text-ink-700 hover:text-brand-500",
  };

  return (
    <Link
      href={href}
      className={clsx(base, sizes, variants[variant], className)}
    >
      {children}
      {arrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
