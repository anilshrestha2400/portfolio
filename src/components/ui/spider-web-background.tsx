"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function OrganicCornerWeb({ className }: { className?: string }) {
  const size = 480;
  const rays = 10;
  const rings = 7;
  const rayAngles = Array.from(
    { length: rays },
    (_, i) => (i / (rays - 1)) * 90
  );

  const pointOnRay = (angleDeg: number, dist: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: Math.cos(rad) * dist, y: Math.sin(rad) * dist };
  };

  const curveThrough = (
    pts: { x: number; y: number }[],
    sagAmount: number
  ) => {
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 1;
      const sag = sagAmount * (i % 2 === 0 ? 1 : -0.55);
      d += ` Q ${mx + (-dy / len) * sag} ${my + (dx / len) * sag} ${b.x} ${b.y}`;
    }
    return d;
  };

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {rayAngles.map((angle, i) => {
        const p = pointOnRay(angle, size * 1.12);
        return (
          <motion.line
            key={`ray-${i}`}
            x1={0}
            y1={0}
            x2={p.x}
            y2={p.y}
            strokeWidth={i % 3 === 0 ? 1.4 : 0.9}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: i * 0.05, ease: "easeOut" }}
          />
        );
      })}
      {Array.from({ length: rings }, (_, ring) => {
        const dist = ((ring + 1) / rings) * size * 0.96;
        const pts = rayAngles.map((angle) => pointOnRay(angle, dist));
        return (
          <motion.path
            key={`ring-${ring}`}
            d={curveThrough(pts, 10 + ring * 2)}
            strokeWidth={0.85}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.9 }}
            transition={{ duration: 1.8, delay: 0.35 + ring * 0.08 }}
          />
        );
      })}
    </svg>
  );
}

export function SpiderWebBackground() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 40, damping: 20 });
  const y = useSpring(rawY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const onMove = (event: MouseEvent) => {
      rawX.set((event.clientX / window.innerWidth - 0.5) * 28);
      rawY.set((event.clientY / window.innerHeight - 0.5) * 28);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 spider-web-pattern opacity-[0.09]" />
      <div className="absolute inset-0 comic-halftone opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--spiderman-red)_22%,transparent),transparent_52%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklch,var(--spiderman-blue)_26%,transparent),transparent_48%)]" />
      <div className="city-fog absolute inset-x-0 bottom-0 h-1/3" />

      <motion.div style={{ x, y }} className="absolute inset-0">
        <OrganicCornerWeb className="absolute -left-8 -top-8 h-72 w-72 text-primary/40 md:h-[28rem] md:w-[28rem]" />
        <OrganicCornerWeb className="absolute -right-8 -top-8 h-72 w-72 origin-top-right scale-x-[-1] text-spiderman-blue/35 md:h-[26rem] md:w-[26rem]" />
        <OrganicCornerWeb className="absolute -bottom-12 -left-12 h-64 w-64 origin-bottom-left scale-y-[-1] text-spiderman-blue/30 md:h-96 md:w-96" />
        <OrganicCornerWeb className="absolute -bottom-12 -right-12 h-64 w-64 origin-bottom-right -scale-100 text-primary/30 md:h-96 md:w-96" />
      </motion.div>
    </div>
  );
}
