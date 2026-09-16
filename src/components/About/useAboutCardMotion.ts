import { useState, useEffect, useRef, useCallback } from "preact/hooks";

interface TiltState {
  rotX: number;
  rotY: number;
  animate: boolean;
}

const FLIP_INTERVAL = 6000;

export function useAboutCardMotion() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState<TiltState>({
    rotX: 0,
    rotY: 0,
    animate: true,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const isFlippedRef = useRef(isFlipped);
  const isHoveredRef = useRef(isHovered);
  const isVisibleRef = useRef(isVisible);

  isFlippedRef.current = isFlipped;
  isHoveredRef.current = isHovered;
  isVisibleRef.current = isVisible;

  const clearTimer = useCallback(() => {
    if (timerRef.current !== undefined) {
      window.clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
  }, []);

  const scheduleNextFlip = useCallback(
    (delay = FLIP_INTERVAL) => {
      clearTimer();
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (
        prefersReducedMotion ||
        !isVisibleRef.current ||
        isHoveredRef.current
      ) {
        return;
      }

      timerRef.current = window.setTimeout(() => {
        setIsFlipped((prev) => !prev);
        setTilt({ rotX: 0, rotY: 0, animate: true });
        scheduleNextFlip(FLIP_INTERVAL);
      }, delay);
    },
    [clearTimer],
  );

  const setFlip = useCallback(
    (flipped: boolean) => {
      setIsFlipped(flipped);
      setTilt({ rotX: 0, rotY: 0, animate: true });
      scheduleNextFlip(FLIP_INTERVAL);
    },
    [scheduleNextFlip],
  );

  const toggleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
    setTilt({ rotX: 0, rotY: 0, animate: true });
    scheduleNextFlip(FLIP_INTERVAL);
  }, [scheduleNextFlip]);

  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl || typeof window === "undefined") return;

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const visible = entry.isIntersecting;
            setIsVisible(visible);
            isVisibleRef.current = visible;
            if (visible) {
              scheduleNextFlip(3500);
            } else {
              clearTimer();
            }
          });
        },
        { threshold: 0.35 },
      );
      observer.observe(cardEl);
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimer();
      } else if (isVisibleRef.current && !isHoveredRef.current) {
        scheduleNextFlip(FLIP_INTERVAL);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimer();
      observer?.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [clearTimer, scheduleNextFlip]);

  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    isHoveredRef.current = true;
    clearTimer();
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  }, [clearTimer]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    isHoveredRef.current = false;
    rectRef.current = null;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setTilt({ rotX: 0, rotY: 0, animate: true });
    scheduleNextFlip(FLIP_INTERVAL);
  }, [scheduleNextFlip]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isFlippedRef.current) return;
    if (!rectRef.current && cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
    const rect = rectRef.current;
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / (rect.height / 2)) * 5;
    const rotY = (x / (rect.width / 2)) * 5;

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        setTilt({ rotX, rotY, animate: false });
        rafRef.current = null;
      });
    }
  }, []);

  return {
    cardRef,
    isFlipped,
    tilt,
    toggleFlip,
    setFlip,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  };
}
