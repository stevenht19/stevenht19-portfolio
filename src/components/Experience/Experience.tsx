import { useRef } from "preact/hooks";
import { ExperienceRow } from "./ExperienceRow";
import { ExperienceVisual } from "./ExperienceVisual";
import { useExperienceAnimations } from "./useExperienceAnimations";
import { EXPERIENCE_DATA } from "@data/experience";
import { SITE_INFO } from "@data/site";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  useExperienceAnimations(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="experience-section relative overflow-hidden border-y border-white/8 bg-zinc-950 py-24 sm:py-28 lg:py-36"
      aria-label="Experiencia profesional"
    >
      <ExperienceVisual />

      <div
        className="pointer-events-none absolute top-0 inset-x-0 z-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-9 2xl:max-w-368 2xl:px-12 3xl:max-w-[114rem] 3xl:px-16">
        <header className="mb-16 grid gap-10 sm:mb-20 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-7">
            <span className="experience-eyebrow mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300 opacity-0">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Trayectoria profesional ·{" "}
              {String(EXPERIENCE_DATA.length).padStart(2, "0")}
            </span>

            <h2
              id="experiencia-heading"
              className="experience-heading font-display font-extrabold leading-[0.92] tracking-tight text-white"
            >
              <span className="block text-[clamp(2.65rem,5vw+1rem,5.25rem)] opacity-0">
                Experiencia
              </span>
              <span className="experience-heading-outline block text-[clamp(2.65rem,5vw+1rem,5.25rem)] text-transparent [-webkit-text-stroke:1.5px_rgba(212,255,0,0.60)] opacity-0">
                profesional
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="experience-desc mb-7 max-w-lg leading-relaxed text-zinc-400 opacity-0 lg:ml-auto">
              Una ruta construida producto a producto: aplicaciones internas,
              plataformas en tiempo real y formaciones que sostienen decisiones
              serias de ingeniería.
            </p>
            <div className="experience-cta-wrap opacity-0 lg:text-right">
              <a
                href={SITE_INFO.socials.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="group/linkedin inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-zinc-400 transition-all duration-300 hover:border-white/25 hover:bg-white/4 hover:text-white will-change-transform"
              >
                <span>Ver perfil en LinkedIn</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover/linkedin:-translate-y-0.5 group-hover/linkedin:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        <div className="experience-list relative lg:pl-24">
          <span
            className="absolute inset-y-0 left-0 hidden w-px bg-white/8 lg:block"
            aria-hidden="true"
          />

          <div className="border-b border-white/7">
            {EXPERIENCE_DATA.map((entry) => (
              <ExperienceRow key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px bg-white/6 z-20"
        aria-hidden="true"
      />
    </section>
  );
}
