import { useRef, useEffect } from 'preact/hooks';

const PHI = (1 + Math.sqrt(5)) / 2; // Golden ratio: (1 + √5) / 2



const FibonacciBackground = ({ className = '', style = undefined }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 280,
      active: false
    };

    let clickRipples = [];
    let time = 0;

    // Photons on the spiral
    let spiralPhotons = [];

    const initScene = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);

      spiralPhotons = [];
      const photonCount = 8;
      for (let i = 0; i < photonCount; i++) {
        spiralPhotons.push({
          theta: (i / photonCount) * (Math.PI * 10),
          speed: 0.005 + Math.random() * 0.007,
          size: 1.5 + Math.random() * 2,
        });
      }
    };

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      initScene();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      clickRipples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 10,
        maxRadius: 320,
        opacity: 0.9
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('click', handleClick);
    document.addEventListener('mouseleave', handleMouseLeave);

    initScene();

    // Logarithmic spiral: r = a * e^(b * theta)
    const b = Math.log(PHI) / (Math.PI / 2);
    const a = 3.0;

    // Color palette: soft pastel sky-200 (suave y unificado)
    const palette = {
      blue: { r: 186, g: 230, b: 253 },      // sky-200
      blueLight: { r: 224, g: 242, b: 254 }, // sky-100
      blueDeep: { r: 147, g: 197, b: 253 },  // blue-300
      blueGlow: { r: 240, g: 249, b: 255 },  // sky-50
      teal: { r: 186, g: 230, b: 253 },      // soft sky
      cyan: { r: 186, g: 230, b: 253 },      // soft sky
      skyBlue: { r: 186, g: 230, b: 253 },
    };

    const lerpColor = (c1, c2, t) => ({
      r: Math.round(c1.r + (c2.r - c1.r) * t),
      g: Math.round(c1.g + (c2.g - c1.g) * t),
      b: Math.round(c1.b + (c2.b - c1.b) * t),
    });

    // Precompute the Fibonacci rectangle tiling positions
    // Using the classic construction: each new square attaches to the longest side
    const buildFibRects = (scale) => {
      const rects = [];
      const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

      // Start: first 1×1 square at origin
      let curX = 0, curY = 0;
      let totalW = scale, totalH = scale;
      rects.push({ x: 0, y: 0, w: scale, h: scale, fib: 1 });

      // Second 1×1 square to the right
      curX = scale;
      totalW = 2 * scale;
      rects.push({ x: curX, y: 0, w: scale, h: scale, fib: 1 });

      // Build outward: directions cycle through bottom, left, top, right
      // 0=bottom, 1=left, 2=top, 3=right
      let bx = 0, by = 0; // bounding box origin
      let bw = totalW, bh = totalH;
      const dirs = [0, 1, 2, 3]; // bottom, left, top, right

      for (let i = 2; i < fib.length; i++) {
        const side = fib[i] * scale;
        const dir = dirs[i % 4];

        let rx, ry, rw, rh;
        switch (dir) {
          case 0: // bottom
            rx = bx;
            ry = by + bh;
            rw = bw;
            rh = side;
            bh += side;
            break;
          case 1: // left
            rx = bx - side;
            ry = by;
            rw = side;
            rh = bh;
            bx -= side;
            bw += side;
            break;
          case 2: // top
            rx = bx;
            ry = by - side;
            rw = bw;
            rh = side;
            by -= side;
            bh += side;
            break;
          case 3: // right
            rx = bx + bw;
            ry = by;
            rw = side;
            rh = bh;
            bw += side;
            break;
        }

        rects.push({ x: rx, y: ry, w: rw, h: rh, fib: fib[i] });
      }

      return rects;
    };

    const render = () => {
      time += 0.016;

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const isStacked = width < 1024;
      const isMobile = width < 640;
      const originX = isStacked ? width * 0.5 : width * 0.62;
      const originY = isStacked ? (isMobile ? height * 0.65 : height * 0.48) : height * 0.52;

      const breathe = Math.sin(time * 0.5) * 0.5 + 0.5;
      const slowPulse = Math.sin(time * 0.3) * 0.5 + 0.5;

      // ─── Layer 1: Golden Rectangles ─────────────────────────────────
      const rectScale = isMobile ? 3.5 : isStacked ? 4.5 : 6;
      const rects = buildFibRects(rectScale);

      ctx.save();
      ctx.translate(originX, originY);

      rects.forEach((rect, i) => {
        const col = palette.skyBlue;
        const pulseAlpha = 0.08 + breathe * 0.05;

        // Rectangle border
        ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${pulseAlpha + 0.03})`;
        ctx.lineWidth = i < 3 ? 0.6 : 1.2;
        ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);

        // Subtle fill for larger rectangles
        if (i >= 5) {
          ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${0.01 + breathe * 0.008})`;
          ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        }

        // Quarter-circle arcs inside each square (these form the spiral guide)
        if (i >= 2) {
          const s = rect.fib * rectScale;
          // Determine arc center and start angle based on direction
          const dir = i % 4;
          let cx, cy, startAngle;

          switch (dir) {
            case 0: // bottom - arc from top-right to bottom-left
              cx = rect.x + rect.w;
              cy = rect.y;
              startAngle = Math.PI * 0.5;
              break;
            case 1: // left - arc from bottom-right to top-left
              cx = rect.x + rect.w;
              cy = rect.y + rect.h;
              startAngle = Math.PI;
              break;
            case 2: // top - arc from bottom-left to top-right
              cx = rect.x;
              cy = rect.y + rect.h;
              startAngle = Math.PI * 1.5;
              break;
            case 3: // right - arc from top-left to bottom-right
              cx = rect.x;
              cy = rect.y;
              startAngle = 0;
              break;
          }

          ctx.beginPath();
          ctx.arc(cx, cy, s, startAngle, startAngle + Math.PI / 2);
          ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${0.04 + breathe * 0.03})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      ctx.restore();

      // ─── Layer 2: Golden Spiral ───────────────────────────────────
      ctx.save();
      ctx.translate(originX, originY);

      const maxTheta = isMobile ? Math.PI * 9 : Math.PI * 12;

      // Outer glow layer
      ctx.beginPath();
      let firstPoint = true;
      for (let theta = 0; theta <= maxTheta; theta += 0.03) {
        const r = a * Math.exp(b * theta);
        const px = r * Math.cos(theta);
        const py = r * Math.sin(theta);
        if (firstPoint) { ctx.moveTo(px, py); firstPoint = false; }
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = `rgba(125, 211, 252, ${0.03 + breathe * 0.02})`;
      ctx.lineWidth = 8;
      ctx.stroke();

      // Main spiral — gradient stroke via segmented drawing
      const spiralSegments = 260;
      for (let s = 0; s < spiralSegments; s++) {
        const t0 = (s / spiralSegments) * maxTheta;
        const t1 = ((s + 1) / spiralSegments) * maxTheta;

        const r0 = a * Math.exp(b * t0);
        const r1 = a * Math.exp(b * t1);
        const x0 = r0 * Math.cos(t0);
        const y0 = r0 * Math.sin(t0);
        const x1 = r1 * Math.cos(t1);
        const y1 = r1 * Math.sin(t1);

        const progress = s / spiralSegments;
        const col = palette.skyBlue;
        const alpha = 0.2 + progress * 0.25 + breathe * 0.05;

        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${Math.min(alpha, 0.45)})`;
        ctx.lineWidth = 1.8 + progress * 0.8;
        ctx.stroke();
      }

      // Mirror spiral (faint echo)
      ctx.beginPath();
      firstPoint = true;
      for (let theta = 0; theta <= maxTheta * 0.6; theta += 0.04) {
        const r = a * Math.exp(b * theta);
        const px = r * Math.cos(theta + Math.PI);
        const py = r * Math.sin(theta + Math.PI);
        if (firstPoint) { ctx.moveTo(px, py); firstPoint = false; }
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = `rgba(${palette.skyBlue.r}, ${palette.skyBlue.g}, ${palette.skyBlue.b}, ${0.03 + slowPulse * 0.025})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // ─── Layer 3: Spiral Photons ────────────────────────────────────
      spiralPhotons.forEach((p) => {
        p.theta += p.speed;
        if (p.theta > maxTheta) p.theta = 0;

        const r = a * Math.exp(b * p.theta);
        const px = r * Math.cos(p.theta);
        const py = r * Math.sin(p.theta);

        const progress = p.theta / maxTheta;
        const col = lerpColor(palette.blueLight, palette.cyan, progress);

        // Trail
        const trailLen = 0.5;
        ctx.beginPath();
        for (let t = p.theta - trailLen; t <= p.theta; t += 0.02) {
          if (t < 0) continue;
          const tr = a * Math.exp(b * t);
          ctx.lineTo(tr * Math.cos(t), tr * Math.sin(t));
        }
        ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${0.3 + progress * 0.35})`;
        ctx.lineWidth = p.size * 0.8;
        ctx.stroke();

        // Photon head
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.7 + progress * 0.3})`;
        ctx.fill();

        // Glow halo
        const glow = ctx.createRadialGradient(px, py, 0, px, py, p.size * 6);
        glow.addColorStop(0, `rgba(${col.r}, ${col.g}, ${col.b}, 0.45)`);
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, p.size * 6, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();


      // ─── Layer 5: Click Ripples ─────────────────────────────────────
      for (let i = clickRipples.length - 1; i >= 0; i--) {
        const rip = clickRipples[i];
        rip.radius += 3.5;
        rip.opacity -= 0.015;

        if (rip.opacity <= 0 || rip.radius > rip.maxRadius) {
          clickRipples.splice(i, 1);
          continue;
        }

        const ripCol = palette.skyBlue;

        ctx.strokeStyle = `rgba(${ripCol.r}, ${ripCol.g}, ${ripCol.b}, ${rip.opacity * 0.35})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // ─── Layer 6: Cursor Spotlight ──────────────────────────────────
      if (mouse.active && mouse.x > -500) {
        const spot = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.radius
        );
        spot.addColorStop(0, `rgba(186, 230, 253, ${0.03 + breathe * 0.012})`);
        spot.addColorStop(0.4, 'rgba(186, 230, 253, 0.008)');
        spot.addColorStop(1, 'transparent');

        ctx.fillStyle = spot;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none pointer-events-auto ${className}`}
      style={style}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Contrast preserving vignettes */}
      <div className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default FibonacciBackground;
