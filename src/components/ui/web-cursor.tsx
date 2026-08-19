"use client";

import { useEffect, useState } from "react";

type Ripple = { id: number; x: number; y: number };

export function WebCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reduceMotion) return;

    setEnabled(true);

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };

    const onClick = (event: MouseEvent) => {
      const id = Date.now() + Math.random();
      setRipples((current) => [...current, { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => {
        setRipples((current) => current.filter((ripple) => ripple.id !== id));
      }, 900);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block" aria-hidden>
      <div
        className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_var(--spiderman-red)]"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40"
        style={{ left: pos.x, top: pos.y }}
      />
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="spider-sense-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </div>
  );
}
