"use client";

import { useEffect, useRef } from "react";

type KalariMotionCanvasProps = {
  className?: string;
  intensity?: "hero" | "section";
  variant?: "orbit" | "weapons" | "arena";
};

const KalariMotionCanvas = ({ className = "", intensity = "section", variant = "weapons" }: KalariMotionCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let animationFrame = 0;
    let scrollProgress = 0;
    let pointerX = 0;
    let pointerY = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const scale = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * scale));
      canvas.height = Math.max(1, Math.floor(rect.height * scale));
      context.setTransform(scale, 0, 0, scale, 0, 0);
    };

    const updateScrollProgress = () => {
      const rect = canvas.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const raw = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      scrollProgress = Math.min(1, Math.max(0, raw));
    };

    const project = (x: number, y: number, z: number, width: number, height: number) => {
      const depth = 720;
      const scale = depth / (depth + z);
      return {
        x: width * 0.5 + x * scale,
        y: height * 0.54 + y * scale,
        scale,
      };
    };

    const drawStaff = (
      width: number,
      height: number,
      angle: number,
      z: number,
      length: number,
      alpha: number,
      accent = false,
    ) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const p1 = project(-cos * length, -sin * length * 0.42, z, width, height);
      const p2 = project(cos * length, sin * length * 0.42, z, width, height);

      context.beginPath();
      context.moveTo(p1.x, p1.y);
      context.lineTo(p2.x, p2.y);
      context.strokeStyle = accent ? `rgba(216, 242, 167, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
      context.lineWidth = Math.max(1, 4 * p1.scale);
      context.lineCap = "round";
      context.shadowColor = accent ? "rgba(216, 242, 167, 0.7)" : "rgba(255, 255, 255, 0.42)";
      context.shadowBlur = 16 * p1.scale;
      context.stroke();
      context.shadowBlur = 0;

      [p1, p2].forEach((point) => {
        context.beginPath();
        context.arc(point.x, point.y, 3.5 * point.scale, 0, Math.PI * 2);
        context.fillStyle = `rgba(216, 242, 167, ${alpha})`;
        context.fill();
      });
    };

    const drawArena = (width: number, height: number) => {
      const horizon = height * (0.42 + scrollProgress * 0.05);
      context.save();
      context.globalAlpha = intensity === "hero" ? 0.52 : 0.78;
      for (let line = 0; line < 14; line += 1) {
        const t = line / 13;
        const y = horizon + t * t * height * 0.65;
        context.beginPath();
        context.moveTo(width * (0.12 - t * 0.18), y);
        context.lineTo(width * (0.88 + t * 0.18), y);
        context.strokeStyle = `rgba(216, 242, 167, ${0.18 - t * 0.1})`;
        context.lineWidth = 1;
        context.stroke();
      }

      for (let spoke = -6; spoke <= 6; spoke += 1) {
        const x = width * 0.5 + spoke * width * 0.07;
        context.beginPath();
        context.moveTo(x, horizon);
        context.lineTo(width * 0.5 + spoke * width * 0.22, height);
        context.strokeStyle = "rgba(255, 255, 255, 0.08)";
        context.stroke();
      }
      context.restore();
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width * 0.5;
      const centerY = height * (intensity === "hero" ? 0.5 : 0.54);
      const radius = Math.min(width, height) * (intensity === "hero" ? 0.27 : 0.32);
      const rotation = reduceMotion ? scrollProgress * Math.PI : frame * 0.009 + scrollProgress * Math.PI * 1.7;
      const pointerTiltX = pointerX * 34;
      const pointerTiltY = pointerY * 22;

      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(centerX, centerY, radius * 0.1, centerX, centerY, radius * 2.1);
      glow.addColorStop(0, "rgba(216, 242, 167, 0.24)");
      glow.addColorStop(0.45, "rgba(80, 145, 86, 0.08)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      if (variant !== "orbit") {
        drawArena(width, height);
      }

      context.save();
      context.translate(centerX + pointerTiltX, centerY + pointerTiltY);
      context.rotate(rotation);

      for (let ring = 0; ring < 4; ring += 1) {
        context.beginPath();
        context.ellipse(0, 0, radius * (1 + ring * 0.18), radius * (0.36 + ring * 0.07), 0, 0, Math.PI * 2);
        context.strokeStyle = `rgba(216, 242, 167, ${0.25 - ring * 0.04})`;
        context.lineWidth = ring === 0 ? 1.3 : 0.8;
        context.stroke();
      }

      for (let marker = 0; marker < 12; marker += 1) {
        const angle = (Math.PI * 2 * marker) / 12;
        const x = Math.cos(angle) * radius * 1.15;
        const y = Math.sin(angle) * radius * 0.43;
        context.beginPath();
        context.arc(x, y, marker % 3 === 0 ? 2.2 : 1.3, 0, Math.PI * 2);
        context.fillStyle = marker % 3 === 0 ? "rgba(216, 242, 167, 0.8)" : "rgba(255, 255, 255, 0.45)";
        context.fill();
      }

      context.rotate(-rotation * 1.7);
      for (let staff = 0; staff < 3; staff += 1) {
        context.rotate((Math.PI * 2) / 3);
        context.beginPath();
        context.moveTo(-radius * 0.78, 0);
        context.lineTo(radius * 0.78, 0);
        context.strokeStyle = staff === 0 ? "rgba(255, 255, 255, 0.8)" : "rgba(216, 242, 167, 0.58)";
        context.lineWidth = staff === 0 ? 2.2 : 1.2;
        context.stroke();

        context.beginPath();
        context.arc(radius * 0.84, 0, 4, 0, Math.PI * 2);
        context.fillStyle = "rgba(216, 242, 167, 0.88)";
        context.fill();
      }

      context.restore();

      context.save();
      context.translate(centerX + pointerTiltX * 0.55, centerY + pointerTiltY * 0.55);
      context.rotate(-rotation * 0.7);
      context.beginPath();
      context.moveTo(-radius * 0.18, -radius * 0.48);
      context.quadraticCurveTo(radius * 0.72, -radius * 0.2, radius * 0.35, radius * 0.56);
      context.strokeStyle = "rgba(255, 255, 255, 0.62)";
      context.lineWidth = 1.8;
      context.stroke();
      context.restore();

      if (variant !== "orbit") {
        const weaponLength = Math.min(width, height) * (intensity === "hero" ? 0.34 : 0.42);
        for (let index = 0; index < 5; index += 1) {
          const angle = rotation * (index % 2 === 0 ? 1 : -1) + index * 0.64 + scrollProgress * 1.8;
          const z = -160 + index * 88 + Math.sin(rotation + index) * 52;
          drawStaff(width, height, angle, z, weaponLength * (1 - index * 0.045), 0.78 - index * 0.09, index % 2 === 0);
        }

        context.save();
        context.translate(centerX + pointerTiltX * 0.4, centerY + pointerTiltY * 0.5);
        context.rotate(rotation * 0.42);
        context.beginPath();
        for (let point = 0; point <= 120; point += 1) {
          const t = point / 120;
          const angle = t * Math.PI * 2.65 + scrollProgress * Math.PI * 1.4;
          const r = radius * (0.15 + t * 1.05);
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r * 0.35 + Math.sin(t * 16 + rotation) * 11;
          if (point === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }
        context.strokeStyle = "rgba(216, 242, 167, 0.58)";
        context.lineWidth = 2;
        context.shadowColor = "rgba(216, 242, 167, 0.65)";
        context.shadowBlur = 18;
        context.stroke();
        context.restore();
      }

      frame += 1;
      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / Math.max(1, rect.width) - 0.5;
      pointerY = (event.clientY - rect.top) / Math.max(1, rect.height) - 0.5;
    };

    resize();
    updateScrollProgress();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [intensity, variant]);

  return <canvas ref={canvasRef} className={`kalari-motion-canvas ${className}`} aria-hidden="true" />;
};

export default KalariMotionCanvas;
