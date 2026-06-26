import { createFileRoute, Link } from "@tanstack/react-router";
import type * as React from "react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/playground")({
  component: Playground,
});

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  life: number;
};

function spawnParticle(x: number, y: number, speed: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  const velocity = (0.5 + Math.random()) * speed;
  return {
    x,
    y,
    vx: Math.cos(angle) * velocity,
    vy: Math.sin(angle) * velocity,
    radius: 6 + Math.random() * 18,
    hue: Math.random() * 360,
    life: 1,
  };
}

function Playground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef<{ x: number; y: number; down: boolean } | null>(
    null,
  );
  const [particleCount, setParticleCount] = useState(6);
  const [speed, setSpeed] = useState(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let frame: number;
    const render = () => {
      ctx.fillStyle = "rgba(10, 10, 16, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const pointer = pointerRef.current;
      if (pointer?.down) {
        for (let i = 0; i < particleCount; i++) {
          particlesRef.current.push(spawnParticle(pointer.x, pointer.y, speed));
        }
      }

      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.012;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, ${Math.max(p.life, 0)})`;
        ctx.arc(p.x, p.y, Math.max(p.radius * p.life, 0), 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [particleCount, speed]);

  const setPointer = (
    e: React.PointerEvent<HTMLCanvasElement>,
    down: boolean,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      down,
    };
  };

  const clear = () => {
    particlesRef.current = [];
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className={styles.page}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        aria-label="Particles playground canvas"
        onPointerDown={(e) => setPointer(e, true)}
        onPointerMove={(e) => {
          if (pointerRef.current?.down) setPointer(e, true)
        }}
        onPointerUp={(e) => setPointer(e, false)}
        onPointerLeave={(e) => setPointer(e, false)}
      />
      <div className={styles.panel}>
        <Link to="/" className={styles.back}>
          ← Home
        </Link>
        <label className={styles.control}>
          Particles
          <input
            type="range"
            min={1}
            max={20}
            value={particleCount}
            onChange={(e) => setParticleCount(Number(e.target.value))}
          />
        </label>
        <label className={styles.control}>
          Speed
          <input
            type="range"
            min={1}
            max={8}
            step={0.5}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
        </label>
        <button className={styles.clear} onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
}
