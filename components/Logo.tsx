export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" className="fill-ink-900" />
      {/* Ascending bars representing growth */}
      <rect x="7"  y="18" width="3" height="7"  rx="1" className="fill-white/70" />
      <rect x="12" y="14" width="3" height="11" rx="1" className="fill-white/85" />
      <rect x="17" y="9"  width="3" height="16" rx="1" className="fill-white" />
      {/* Accent dot */}
      <circle cx="24" cy="9" r="2.2" className="fill-brand-500" />
    </svg>
  );
}
