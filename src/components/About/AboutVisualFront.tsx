import type { ComponentChildren } from "preact";

interface AboutVisualFrontProps {
  children?: ComponentChildren;
  photoSrc?: string;
  onToggle: () => void;
}

export default function AboutVisualFront({
  children,
  photoSrc,
  onToggle,
}: AboutVisualFrontProps) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c11] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_75%_at_50%_0%,rgba(212,255,0,0.14),rgba(212,255,0,0.05)_45%,transparent_75%)]"
      />
      {children ? (
        children
      ) : photoSrc ? (
        <img
          src={photoSrc}
          alt="Martín Hernández - Desarrollador Full-Stack"
          className="relative h-full w-full object-cover object-top"
          loading="lazy"
        />
      ) : null}

      <div className="absolute inset-x-3 bottom-3">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className="group/btn flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/55 px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-primary/40 cursor-pointer"
        >
          <span className="text-xs font-medium text-zinc-200">
            Martín Hernández
          </span>
          <svg
            className="h-3.5 w-3.5 text-primary transition-transform duration-500 group-hover/btn:rotate-180"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
