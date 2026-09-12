import type { ExperienceEntry } from "@types";

interface Props {
  entry: ExperienceEntry;
  className?: string;
}

export function ExperienceRow({ entry, className = "" }: Props) {
  const isEducation = entry.kind === "education";

  return (
    <article
      className={`experience-row group relative border-t border-white/7 py-12 sm:py-14 will-change-transform opacity-0 ${className}`}
    >
      <span
        className={`experience-node pointer-events-none absolute -left-[5px] top-16 z-10 hidden h-2.5 w-2.5 rounded-full lg:block ${
          entry.isCurrent
            ? "bg-primary shadow-[0_0_14px_rgba(212,255,0,0.8)]"
            : isEducation
              ? "bg-zinc-500"
              : "bg-zinc-600"
        }`}
        aria-hidden="true"
      >
        {entry.isCurrent && (
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60"
            aria-hidden="true"
          />
        )}
      </span>

      <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <span
            className="experience-index font-display text-6xl font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.2)] transition-[color,-webkit-text-stroke-color] duration-300 group-hover:text-primary group-hover:[-webkit-text-stroke-color:transparent]"
            aria-hidden="true"
          >
            {entry.index}
          </span>

          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            {entry.timeframe}
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-zinc-400">
            <span>{entry.location}</span>
            <span className="text-zinc-600" aria-hidden="true">
              ·
            </span>
            <span>{entry.workMode}</span>
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-white transition-colors duration-300 sm:text-3xl">
              {entry.company}
            </h3>
            {isEducation && (
              <span className="rounded-full border border-white/9 bg-white/4 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                Formación
              </span>
            )}
          </div>

          <p className="mt-2 text-base font-semibold text-primary transition-colors duration-300">
            {entry.role}
          </p>

          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-zinc-400">
            {entry.summary}
          </p>

          <ul className="mt-5 space-y-2.5">
            {entry.responsibilities.map((responsibility, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] leading-relaxed text-zinc-300"
              >
                <span
                  className="mt-[2px] font-display text-sm text-primary select-none"
                  aria-hidden="true"
                >
                  →
                </span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2">
            {entry.technologies.map((tech, i) => (
              <li
                key={i}
                className="rounded-full border border-white/9 bg-white/4 px-3 py-1 text-xs font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
