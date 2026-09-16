import { useEffect, useRef } from "preact/hooks";
import { gsap, prefersReducedMotion } from "@utils/motion";

export function useBigWordMotion(triggerSelector: string = "#experiencia") {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (prefersReducedMotion() || !svgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        svgRef.current,
        { xPercent: 4, yPercent: 14 },
        {
          xPercent: -4,
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: triggerSelector,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        },
      );
    });

    return () => {
      ctx.revert();
    };
  }, [triggerSelector]);

  return { svgRef };
}
