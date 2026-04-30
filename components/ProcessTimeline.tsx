type Step = {
  title: string;
  description: string;
  duration?: string;
};

type ProcessTimelineProps = {
  steps: Step[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="relative space-y-8 md:space-y-10">
      {/* Vertical line for desktop */}
      <div className="hidden md:block absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent" />

      {steps.map((step, i) => (
        <li key={i} className="relative flex gap-5 md:gap-7">
          {/* Number bubble */}
          <div className="relative shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-brand-500 text-brand-500 font-display font-semibold relative z-10 shadow-soft">
              {String(i + 1).padStart(2, "0").slice(-2)}
            </div>
          </div>

          <div className="flex-1 pt-1.5 pb-2">
            <div className="flex items-baseline gap-3 mb-2 flex-wrap">
              <h3 className="display text-xl md:text-2xl text-ink-900">
                {step.title}
              </h3>
              {step.duration && (
                <span className="text-xs font-mono text-ink-400 uppercase tracking-wider">
                  · {step.duration}
                </span>
              )}
            </div>
            <p className="text-ink-500 leading-relaxed">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
