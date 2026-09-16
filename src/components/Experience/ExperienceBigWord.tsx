import type { BigWordProps } from "./types";
import { useBigWordMotion } from "./useBigWordMotion";
import BigWordSvg from "./BigWordSvg";

export default function ExperienceBigWord({
  word = "TRAYECTORIA",
  className = "",
  class: classProp = "",
  triggerSelector = "#experiencia",
}: BigWordProps) {
  const combinedClass = `${className} ${classProp}`.trim();
  const { svgRef } = useBigWordMotion(triggerSelector);

  return (
    <BigWordSvg
      word={word}
      className={combinedClass}
      svgRef={svgRef}
    />
  );
}
