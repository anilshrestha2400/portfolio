"use client";

import { SpidermanSwingSilhouette } from "@/components/ui/spiderman-swing-silhouette";

function SwingingFigure({
  anchorX,
  height,
  figureClass,
  opacityClass,
  delay,
  flip,
  muted,
}: {
  anchorX: string;
  height: string;
  figureClass: string;
  opacityClass: string;
  delay?: string;
  flip?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`cinematic-spidey-swing absolute top-0 ${opacityClass}`}
      style={{
        left: anchorX,
        height,
        animationDelay: delay,
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      <div className="flex h-full flex-col items-center">
        <div className="w-px flex-1 bg-gradient-to-b from-white/10 via-primary/50 to-primary" />
        <div
          className={`relative shrink-0 ${figureClass} ${muted ? "brightness-[0.72] saturate-[0.85]" : ""}`}
        >
          <SpidermanSwingSilhouette />
        </div>
      </div>
    </div>
  );
}

export function SwingingSpidermanBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <SwingingFigure
        anchorX="78%"
        height="52vh"
        figureClass="h-44 w-36 md:h-56 md:w-44"
        opacityClass="opacity-[0.22] md:opacity-[0.28]"
      />
      <SwingingFigure
        anchorX="8%"
        height="38vh"
        figureClass="h-32 w-24 md:h-40 md:w-32"
        opacityClass="opacity-[0.1] md:opacity-[0.14]"
        delay="-2.4s"
        flip
        muted
      />

      <div className="cinematic-spidey-pass absolute inset-0">
        <div className="cinematic-spidey-pass-inner relative flex h-full w-full items-start justify-end pr-[6%] pt-[14vh] opacity-[0.14] md:opacity-[0.18]">
          <div className="absolute right-[20%] top-[8vh] h-36 w-px origin-top rotate-[12deg] bg-gradient-to-b from-transparent via-white/15 to-white/25" />
          <SpidermanSwingSilhouette className="h-32 w-28 md:h-48 md:w-40" />
        </div>
      </div>
    </div>
  );
}
