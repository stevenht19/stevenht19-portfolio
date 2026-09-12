import type { RefObject } from 'preact';
import { useEffect } from "preact/hooks";

export function useExperienceAnimations(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    let ctx: any = null;

    async function initGSAP() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const container = containerRef.current;
      if (!container) return;

      ctx = gsap.context(() => {
        const eyebrow = container.querySelector(".experience-eyebrow");
        const headingSpans = container.querySelectorAll(".experience-heading span");
        const desc = container.querySelector(".experience-desc");
        const ctaWrap = container.querySelector(".experience-cta-wrap");
        const rows = gsap.utils.toArray<HTMLElement>(".experience-row");

        if (!prefersReducedMotion) {
          const revealTargets = [eyebrow, desc, ctaWrap].filter(
            Boolean,
          ) as gsap.TweenTarget[];

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top 78%",
              once: true,
            },
          });

          tl.fromTo(
            revealTargets,
            { opacity: 0, y: 26, filter: "blur(5px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.85,
              ease: "power3.out",
              stagger: 0.12,
            },
          );

          if (rows.length > 0) {
            tl.fromTo(
              rows,
              { opacity: 0, y: 48, filter: "blur(6px)" },
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.14,
              },
              "-=0.45",
            );
          }

          gsap.fromTo(
            headingSpans,
            { opacity: 0, y: 46, filter: "blur(6px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: container,
                start: "top 80%",
                once: true,
              },
            },
          );

          rows.forEach((row) => {
            const indexEl = row.querySelector(".experience-index");
            if (!indexEl) return;

            row.addEventListener(
              "pointerenter",
              () => {
                gsap.to(indexEl, {
                  x: 6,
                  duration: 0.35,
                  ease: "power3.out",
                });
              },
              { passive: true },
            );

            row.addEventListener(
              "pointerleave",
              () => {
                gsap.to(indexEl, {
                  x: 0,
                  duration: 0.5,
                  ease: "power3.out",
                });
              },
              { passive: true },
            );
          });

          const magneticEls = container.querySelectorAll<HTMLElement>(
            "[data-magnetic]",
          );
          magneticEls.forEach((el) => {
            const xTo = gsap.quickTo(el, "x", {
              duration: 0.38,
              ease: "power2.out",
            });
            const yTo = gsap.quickTo(el, "y", {
              duration: 0.38,
              ease: "power2.out",
            });

            el.addEventListener(
              "pointermove",
              (e: PointerEvent) => {
                const rect = el.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const dx = (e.clientX - centerX) * 0.35;
                const dy = (e.clientY - centerY) * 0.35;
                xTo(dx);
                yTo(dy);
              },
              { passive: true },
            );

            el.addEventListener(
              "pointerleave",
              () => {
                gsap.to(el, {
                  x: 0,
                  y: 0,
                  duration: 0.7,
                  ease: "elastic.out(1, 0.4)",
                });
              },
              { passive: true },
            );
          });
        } else {
          gsap.set(
            [eyebrow, ...headingSpans, desc, ctaWrap, ...rows].filter(Boolean),
            { opacity: 1, y: 0, filter: "blur(0px)" },
          );
        }
      }, container);
    }

    initGSAP();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [containerRef]);
}
