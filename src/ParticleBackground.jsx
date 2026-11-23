import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles = [];
    let raf = 0;
    let visible = !document.hidden;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -1000, y: -1000 };

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(72, Math.max(30, Math.floor((width * height) / 19000)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: index % 9 === 0 ? 2 : Math.random() * 1.2 + 0.5,
        hue: index % 3 === 0 ? 185 : 265,
      }));
    }

    function onPointer(event) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -10 || p.x > width + 10) p.vx *= -1;
          if (p.y < -10 || p.y > height + 10) p.vy *= -1;
        }

        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        const pointerDistance = Math.hypot(dx, dy);
        if (!reduceMotion && pointerDistance < 125) {
          p.x -= dx * 0.00065;
          p.y -= dy * 0.00065;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 72%, .78)`;
        ctx.shadowBlur = p.radius > 1.5 ? 13 : 5;
        ctx.shadowColor = `hsla(${p.hue}, 95%, 65%, .65)`;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const distance = Math.hypot(p.x - q.x, p.y - q.y);
          if (distance < 118) {
            const alpha = (1 - distance / 118) * 0.19;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(105, 205, 235, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }
      if (!reduceMotion && visible) raf = requestAnimationFrame(draw);
    }

    function onVisibility() {
      visible = !document.hidden;
      cancelAnimationFrame(raf);
      if (visible) draw();
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas className="particle-canvas" aria-hidden="true" ref={canvasRef} />;
}
