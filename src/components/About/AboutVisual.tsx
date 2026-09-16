import type { ComponentChildren } from "preact";
import { useAboutCardMotion } from "./useAboutCardMotion";
import AboutVisualFront from "./AboutVisualFront";
import AboutVisualBack from "./AboutVisualBack";

interface AboutVisualProps {
  children?: ComponentChildren;
  photoSrc?: string;
  className?: string;
  class?: string;
}

export default function AboutVisual({
  children,
  photoSrc,
  className,
  class: classProp,
}: AboutVisualProps) {
  const {
    cardRef,
    isFlipped,
    tilt,
    toggleFlip,
    setFlip,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  } = useAboutCardMotion();

  const extraClass = (className || classProp || "").trim();

  const cardTransform = isFlipped
    ? "rotateY(180deg)"
    : tilt.rotX || tilt.rotY
      ? `rotateX(${tilt.rotX.toFixed(2)}deg) rotateY(${tilt.rotY.toFixed(2)}deg)`
      : "rotateX(0deg) rotateY(0deg)";

  const cardTransition = tilt.animate
    ? "transform 1000ms cubic-bezier(0.22, 1, 0.36, 1)"
    : "none";

  return (
    <div
      className={`about-visual-root relative w-full select-none aspect-4/5 ${extraClass}`}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-x-6 inset-y-6 -z-10 rounded-full bg-[radial-gradient(55%_65%_at_50%_45%,rgba(212,255,0,0.16),rgba(212,255,0,0.05)_45%,transparent_70%)] blur-2xl"
      />

      <div
        ref={cardRef}
        className="relative h-full w-full perspective-[1000px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("button")) return;
          toggleFlip();
        }}
      >
        <div
          className="relative h-full w-full cursor-pointer transform-3d"
          style={{
            transform: cardTransform,
            transition: cardTransition,
          }}
        >
          <AboutVisualFront
            photoSrc={photoSrc}
            onToggle={() => setFlip(true)}
          >
            {children}
          </AboutVisualFront>
          <AboutVisualBack onBackClick={() => setFlip(false)} />
        </div>
      </div>
    </div>
  );
}
