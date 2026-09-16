import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Checks if user prefers reduced motion.
 */
export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Checks if device has a fine pointer (mouse/trackpad).
 */
export const isFinePointer = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/**
 * Executes a callback when the DOM is ready.
 */
export function onDomReady(fn: () => void) {
  if (typeof document === "undefined") return;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn, { once: true });
  } else {
    fn();
  }
}

/**
 * Centralized magnetic effect for elements with `[data-magnetic]`.
 * Guarded with `dataset.magneticInit` to ensure listeners and quickTo are never bound twice.
 */
export function initMagneticElements(
  container: ParentNode = document,
  selector: string = "[data-magnetic]"
) {
  if (prefersReducedMotion() || !isFinePointer()) return;

  const elements = container.querySelectorAll<HTMLElement>(selector);
  elements.forEach((el) => {
    if (el.dataset.magneticInit === "true") return;
    el.dataset.magneticInit = "true";

    const xTo = gsap.quickTo(el, "x", {
      duration: 0.38,
      ease: "power2.out",
    });
    const yTo = gsap.quickTo(el, "y", {
      duration: 0.38,
      ease: "power2.out",
    });

    let cachedRect: DOMRect | null = null;

    el.addEventListener(
      "pointerenter",
      () => {
        cachedRect = el.getBoundingClientRect();
      },
      { passive: true }
    );

    el.addEventListener(
      "pointermove",
      (e: PointerEvent) => {
        if (!cachedRect) cachedRect = el.getBoundingClientRect();
        const centerX = cachedRect.left + cachedRect.width / 2;
        const centerY = cachedRect.top + cachedRect.height / 2;
        const dx = (e.clientX - centerX) * 0.35;
        const dy = (e.clientY - centerY) * 0.35;
        xTo(dx);
        yTo(dy);
      },
      { passive: true }
    );

    el.addEventListener(
      "pointerleave",
      () => {
        cachedRect = null;
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
        });
      },
      { passive: true }
    );
  });
}

/**
 * Centralized 3D card tilt effect.
 */
export function setupCardTilt(
  card: HTMLElement,
  options?: {
    trigger?: HTMLElement;
    maxTilt?: number;
    perspective?: number;
    trackMouseVars?: boolean;
    pixelCoords?: boolean;
  }
) {
  if (prefersReducedMotion() || !isFinePointer()) return;

  const trigger = options?.trigger || card;
  const maxTilt = options?.maxTilt ?? 6;
  const perspective = options?.perspective ?? 1100;
  const trackMouseVars = options?.trackMouseVars ?? false;
  const pixelCoords = options?.pixelCoords ?? false;

  gsap.set(card, { transformPerspective: perspective });

  const rxTo = gsap.quickTo(card, "rotationX", {
    duration: 0.45,
    ease: "power2.out",
  });
  const ryTo = gsap.quickTo(card, "rotationY", {
    duration: 0.45,
    ease: "power2.out",
  });

  let cachedRect: DOMRect | null = null;

  trigger.addEventListener(
    "pointerenter",
    () => {
      cachedRect = trigger.getBoundingClientRect();
    },
    { passive: true }
  );

  trigger.addEventListener(
    "pointermove",
    (e: PointerEvent) => {
      if (!cachedRect) cachedRect = trigger.getBoundingClientRect();
      const x = e.clientX - cachedRect.left;
      const y = e.clientY - cachedRect.top;
      const rx = (y / cachedRect.height - 0.5) * -maxTilt;
      const ry = (x / cachedRect.width - 0.5) * maxTilt;
      rxTo(rx);
      ryTo(ry);

      if (trackMouseVars) {
        if (pixelCoords) {
          trigger.style.setProperty("--mx", `${x}px`);
          trigger.style.setProperty("--my", `${y}px`);
        } else {
          const mx = (x / cachedRect.width) * 100;
          const my = (y / cachedRect.height) * 100;
          trigger.style.setProperty("--mx", `${mx}%`);
          trigger.style.setProperty("--my", `${my}%`);
        }
      }
    },
    { passive: true }
  );

  trigger.addEventListener(
    "pointerleave",
    () => {
      cachedRect = null;
      rxTo(0);
      ryTo(0);
    },
    { passive: true }
  );
}

/**
 * Pauses animations when the trigger section is outside viewport to conserve CPU/battery.
 */
export function pauseWhenOutOfView(
  sectionSelector: string | Element,
  tweens: (gsap.core.Animation | null | undefined)[]
) {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

  const section =
    typeof sectionSelector === "string"
      ? document.querySelector(sectionSelector)
      : sectionSelector;

  if (!section) return;

  const activeTweens = tweens.filter(Boolean) as gsap.core.Animation[];
  if (activeTweens.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeTweens.forEach((t) => t.resume());
        } else {
          activeTweens.forEach((t) => t.pause());
        }
      }
    },
    { threshold: 0.05 }
  );

  observer.observe(section);
}
