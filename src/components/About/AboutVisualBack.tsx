import { CODE_LINES } from "./codeLines";

interface AboutVisualBackProps {
  onBackClick: () => void;
}

export default function AboutVisualBack({ onBackClick }: AboutVisualBackProps) {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c11] transform-[rotateY(180deg)] backface-hidden [-webkit-backface-visibility:hidden]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/2 px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-red-500/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-zinc-300">
          <svg
            className="h-3.5 w-3.5 shrink-0"
            viewBox="0 0 24 24"
            fill="#3178C6"
            aria-hidden="true"
          >
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
          </svg>
          martin.ts
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onBackClick();
          }}
          className="flex items-center gap-1.5 font-mono text-[11px] text-primary transition-colors hover:text-primary-hover cursor-pointer"
        >
          <span>← Foto</span>
        </button>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="select-text flex-1 overflow-y-auto overflow-x-auto p-3.5 sm:p-4 font-mono text-[13px] sm:text-[14px] md:text-[15px] leading-[1.65] text-zinc-300 scrollbar-thin [scrollbar-color:rgba(212,255,0,0.25)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/15 hover:[&::-webkit-scrollbar-thumb]:bg-primary/40 [-webkit-overflow-scrolling:touch]"
      >
        {CODE_LINES.map((line, idx) => (
          <div
            key={idx}
            className="rounded px-1 transition-colors hover:bg-white/3"
          >
            <span
              className="whitespace-pre"
              dangerouslySetInnerHTML={{ __html: line.html || "&nbsp;" }}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-white/8 px-4 py-2.5 font-mono text-[10px] text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="text-primary font-bold">&gt;</span>
          <span>compiled successfully</span>
        </span>
      </div>
    </div>
  );
}
