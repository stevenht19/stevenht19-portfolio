import type { BigWordSvgProps } from "./types";

export default function BigWordSvg({
  word,
  className = "",
  svgRef,
}: BigWordSvgProps) {
  return (
    <svg
      ref={svgRef}
      className={`experience-bigword pointer-events-none absolute inset-x-0 top-6 z-0 hidden w-full select-none opacity-20 lg:block ${className}`}
      viewBox="0 0 1440 240"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="none"
        stroke="#d4ff00"
        strokeWidth="3"
        strokeOpacity="0.16"
        vectorEffect="non-scaling-stroke"
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "190px",
          letterSpacing: "0.01em",
        }}
      >
        {word}
      </text>
    </svg>
  );
}
