import { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeatureGridProps = {
  features: Feature[];
  cols?: 2 | 3 | 4;
};

export function FeatureGrid({ features, cols = 3 }: FeatureGridProps) {
  const gridCls =
    cols === 2 ? "md:grid-cols-2" : cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";

  return (
    <div className={`grid ${gridCls} gap-5 md:gap-6`}>
      {features.map((f, i) => (
        <div
          key={i}
          className="group relative p-7 rounded-2xl bg-white border border-ink-100 hover:border-brand-200 hover:shadow-soft transition-all duration-300"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-500 mb-5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
            <f.icon size={22} strokeWidth={2} />
          </div>
          <h3 className="display text-xl text-ink-900 mb-2.5">{f.title}</h3>
          <p className="text-ink-500 leading-relaxed text-[15px]">
            {f.description}
          </p>
        </div>
      ))}
    </div>
  );
}
