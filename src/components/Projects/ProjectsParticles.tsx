import { useEffect, useRef } from "preact/hooks";

interface Props {
  className?: string;
  class?: string;
}

export default function ProjectsParticles(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const extraClass = (props.className || props.class || "").trim();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const section =
      document.getElementById("proyectos") ||
      container.closest("section") ||
      container;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrameId: number | null = null;
    let isVisible = true;
    let disposed = false;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
      active: false,
    };

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      radius: number;
      color: string;
      glowColor: string;
      alpha: number;
      baseAlpha: number;
      pulseSpeed: number;
      pulseVal: number;
    }

    const COLORS = [
      { fill: "rgba(212, 255, 0, ", glow: "rgba(212, 255, 0, 0.6)" },
      { fill: "rgba(168, 85, 247, ", glow: "rgba(168, 85, 247, 0.6)" },
      { fill: "rgba(59, 130, 246, ", glow: "rgba(59, 130, 246, 0.55)" },
      { fill: "rgba(255, 255, 255, ", glow: "rgba(255, 255, 255, 0.5)" },
    ];

    let particles: Particle[] = [];
    const PARTICLE_COUNT = 55;

    function resize() {
      if (!canvas || !section) return;
      const rect = section.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        createParticles();
      }
    }

    function createParticles() {
      if (width === 0 || height === 0) return;
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const colorObj = COLORS[i % COLORS.length];
        const baseRadius = 1.3 + Math.random() * 2.2;
        const baseAlpha = 0.3 + Math.random() * 0.5;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          baseRadius,
          radius: baseRadius,
          color: colorObj.fill,
          glowColor: colorObj.glow,
          alpha: baseAlpha,
          baseAlpha,
          pulseSpeed: 0.015 + Math.random() * 0.025,
          pulseVal: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw() {
      if (!ctx || !isVisible || disposed) return;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          p.pulseVal += p.pulseSpeed;
          p.alpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.2;

          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius && dist > 0) {
              const force = (1 - dist / mouse.radius) * 2.2;
              const angle = Math.atan2(dy, dx);
              p.x -= Math.cos(angle) * force;
              p.y -= Math.sin(angle) * force;
              p.radius = p.baseRadius * (1 + force * 0.8);
            } else {
              p.radius += (p.baseRadius - p.radius) * 0.1;
            }
          }

          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.1, Math.min(1, p.alpha))})`;
        if (p.radius > 1.6) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.glowColor;
        }
        ctx.fill();
        ctx.restore();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    }

    function onPointerMove(e: PointerEvent) {
      const rect = section.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }

    function onPointerLeave() {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            if (!animationFrameId && !prefersReducedMotion) {
              animationFrameId = requestAnimationFrame(draw);
            } else if (prefersReducedMotion) {
              draw();
            }
          } else {
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
            }
          }
        });
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(section);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            resize();
            if (prefersReducedMotion || !isVisible) {
              draw();
            }
          })
        : null;

    if (resizeObserver && section) {
      resizeObserver.observe(section);
    }

    section.addEventListener("pointermove", onPointerMove as EventListener, {
      passive: true,
    });
    section.addEventListener("pointerleave", onPointerLeave as EventListener, {
      passive: true,
    });

    resize();
    createParticles();
    draw();

    return () => {
      disposed = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver?.disconnect();
      section.removeEventListener(
        "pointermove",
        onPointerMove as EventListener,
      );
      section.removeEventListener(
        "pointerleave",
        onPointerLeave as EventListener,
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`projects-particles-container pointer-events-none absolute inset-0 z-0 overflow-hidden ${extraClass}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        id="projects-particles-canvas"
        className="block h-full w-full opacity-80"
      />
    </div>
  );
}
