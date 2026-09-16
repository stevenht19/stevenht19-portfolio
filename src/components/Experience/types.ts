import type { RefObject } from "preact";

export interface BigWordProps {
  word?: string;
  className?: string;
  class?: string;
  triggerSelector?: string;
}

export interface BigWordSvgProps {
  word: string;
  className?: string;
  svgRef?: RefObject<SVGSVGElement | null>;
}
