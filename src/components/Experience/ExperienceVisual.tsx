import { useEffect, useRef } from "preact/hooks";

interface Props {
  className?: string;
}

export function ExperienceVisual({ className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let disposed = false;
    let rafId: number | null = null;
    let renderer: any = null;
    let scene: any = null;
    let camera: any = null;
    let clock: any = null;
    let group: any = null;
    let knotMesh: any = null;
    let icosaMesh: any = null;
    let ringMesh: any = null;
    let wireMesh: any = null;
    let limeLight: any = null;
    let purpleLight: any = null;
    let blueLight: any = null;
    let resizeObserver: ResizeObserver | null = null;
    let isVisible = false;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const section = document.getElementById("experiencia");

    if (!canvas || !container || !section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const pointer = {
      tx: 0,
      ty: 0,
      x: 0,
      y: 0,
      active: false,
    };

    let lastTime = 0;

    function onResize() {
      if (!canvas || !renderer || !camera || !scene || !container) return;
      const rect = container.getBoundingClientRect();
      if (!rect || rect.width === 0 || rect.height === 0) return;
      const width = rect.width;
      const height = rect.height;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      if (group) {
        const scale = Math.max(0.55, Math.min(1, width / 1280));
        group.scale.setScalar(width < 640 ? scale * 1.15 : scale);
      }

      if (prefersReducedMotion) renderOnce();
    }

    function renderOnce() {
      if (!renderer || !scene || !camera) return;
      renderer.render(scene, camera);
    }

    function frame(time: number) {
      if (!isVisible || disposed) return;
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      if (!prefersReducedMotion && clock) {
        const t = clock.getElapsedTime();

        if (knotMesh) {
          knotMesh.rotation.x = 0.9 + Math.sin(t * 0.35) * 0.14;
          knotMesh.rotation.y += delta * 0.25;
          knotMesh.position.y = 0.75 + Math.sin(t * 0.5) * 0.22;
        }

        if (icosaMesh) {
          icosaMesh.rotation.x += delta * 0.3;
          icosaMesh.rotation.y += delta * 0.22;
          icosaMesh.position.y = -1.9 + Math.sin(t * 0.42 + 1.2) * 0.26;
        }

        if (ringMesh) {
          ringMesh.rotation.z += delta * 0.28;
          ringMesh.position.y = -2.6 + Math.sin(t * 0.38 + 2.4) * 0.22;
        }

        if (wireMesh) {
          wireMesh.rotation.x -= delta * 0.2;
          wireMesh.rotation.y += delta * 0.32;
          wireMesh.position.y = 2.2 + Math.sin(t * 0.5 + 3.1) * 0.24;
        }

        if (pointer.active) {
          pointer.x += (pointer.tx - pointer.x) * 0.05;
          pointer.y += (pointer.ty - pointer.y) * 0.05;
        } else {
          pointer.x += (0 - pointer.x) * 0.04;
          pointer.y += (0 - pointer.y) * 0.04;
        }

        if (group) {
          group.rotation.y = pointer.x * 0.45;
          group.rotation.x = pointer.y * 0.32;
          group.rotation.z = pointer.x * 0.08;
        }

        if (limeLight) limeLight.position.x = 5 + pointer.tx * 1.8;
        if (purpleLight) purpleLight.position.x = -5 + pointer.ty * -1.6;
      }

      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
      rafId = requestAnimationFrame(frame);
    }

    function onPointerMove(e: PointerEvent) {
      const rect = section.getBoundingClientRect();
      if (!rect.width) return;
      pointer.tx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.ty = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      pointer.active = true;
    }

    function onPointerLeave() {
      pointer.active = false;
      pointer.tx = 0;
      pointer.ty = 0;
    }

    function onVisibilityChange() {
      if (document.hidden && rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else if (!document.hidden && isVisible && rafId === null) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(frame);
      }
    }

    async function setupThree() {
      if (disposed || !canvas) return;

      const THREE = await import("three");
      if (disposed) return;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.set(0, 0, 9.5);

      clock = new THREE.Clock();
      group = new THREE.Group();

      knotMesh = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.05, 0.34, 176, 28),
        new THREE.MeshPhysicalMaterial({
          color: 0x14141e,
          metalness: 0.95,
          roughness: 0.16,
          clearcoat: 1,
          clearcoatRoughness: 0.12,
          envMapIntensity: 1.2,
        }),
      );
      knotMesh.position.set(2.35, 0.75, 0);
      knotMesh.rotation.set(0.9, 0.4, 0.2);

      icosaMesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.72, 0),
        new THREE.MeshPhysicalMaterial({
          color: 0x1d2fa8,
          metalness: 0.72,
          roughness: 0.14,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
        }),
      );
      icosaMesh.position.set(-3.6, -1.9, -1);
      icosaMesh.rotation.set(0.5, 0.8, 0.3);

      ringMesh = new THREE.Mesh(
        new THREE.TorusGeometry(0.86, 0.27, 34, 84),
        new THREE.MeshPhysicalMaterial({
          color: 0x5b21b6,
          metalness: 0.82,
          roughness: 0.18,
          clearcoat: 1,
          clearcoatRoughness: 0.12,
        }),
      );
      ringMesh.position.set(3.3, -2.6, -0.6);
      ringMesh.rotation.set(1.4, 0.2, 0.4);

      wireMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.58, 18, 18),
        new THREE.MeshBasicMaterial({
          color: 0xd4ff00,
          wireframe: true,
          transparent: true,
          opacity: 0.32,
        }),
      );
      wireMesh.position.set(-2.1, 2.2, -1);

      group.add(knotMesh, icosaMesh, ringMesh, wireMesh);
      scene.add(group);

      const ambient = new THREE.AmbientLight(0x18182a, 0.7);
      scene.add(ambient);

      const sun = new THREE.DirectionalLight(0xffffff, 1.1);
      sun.position.set(3, 5, 8);
      scene.add(sun);

      limeLight = new THREE.PointLight(0xd4ff00, 55, 0, 1.7);
      limeLight.position.set(5, 4, 5);
      scene.add(limeLight);

      purpleLight = new THREE.PointLight(0xa855f7, 45, 0, 1.6);
      purpleLight.position.set(-5, -3.5, 4);
      scene.add(purpleLight);

      blueLight = new THREE.PointLight(0x3b82f6, 45, 0, 1.6);
      blueLight.position.set(0, 3.2, 6);
      scene.add(blueLight);

      if (typeof ResizeObserver !== "undefined" && container) {
        resizeObserver = new ResizeObserver(onResize);
        resizeObserver.observe(container);
      }
      onResize();

      if (prefersReducedMotion) {
        renderOnce();
      } else {
        lastTime = performance.now();
        rafId = requestAnimationFrame(frame);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            if (!renderer) {
              setupThree();
            } else if (prefersReducedMotion) {
              renderOnce();
            } else if (rafId === null) {
              lastTime = performance.now();
              rafId = requestAnimationFrame(frame);
            }
          } else if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        });
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(section);

    window.addEventListener("visibilitychange", onVisibilityChange);
    section.addEventListener("pointermove", onPointerMove, { passive: true });
    section.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      disposed = true;
      if (rafId !== null) cancelAnimationFrame(rafId);
      observer.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("visibilitychange", onVisibilityChange);
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);

      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`experience-visual pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#08080d",
          backgroundImage:
            "radial-gradient(60% 50% at 18% 12%,rgba(168,85,247,0.18),transparent 62%),radial-gradient(52% 46% at 84% 22%,rgba(59,130,246,0.18),transparent 60%),radial-gradient(48% 58% at 62% 92%,rgba(212,255,0,0.08),transparent 58%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.045) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <canvas
        ref={canvasRef}
        id="experience-3d-canvas"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
